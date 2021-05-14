const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/Members";

const {body, validationResult}=require('express-validator');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const dbName = 'Members';
const collectionName = 'member';
var db;

//connecting to mongodb database
MongoClient.connect(url,{ 
   useUnifiedTopology: true,
   useNewUrlParser: true
  },function(err,client) {
  if(err)
  {
    res.status(500).send(err.message);
  }
  db = client.db(dbName);
  console.log(`Connected to mongoDB database at url ${url}`);
  console.log(`Database : ${dbName}`);
});

app.get('/',(req,res) => {
  db.collection(collectionName).find({}).toArray((err,doc)=>{
  if(err)
   {
     res.status(500).send(err.message); 
   }
   res.status(200).json(doc);
 });
});

app.get('/member/:_id',(req,res) => {
  let id=parseInt(req.params._id);
  db.collection(collectionName).findOne({_id : id},(err,doc)=>{
  if(err)
   {
     res.status(500).json({"msg":`No member with id ${_id} found.`}); 
   }
   res.status(200).json(doc);
 });
});

//
app.post('/member',body('name').exists().isLength({min:3}).withMessage("Name must have at least three characters."),
body('_id').exists().isNumeric().withMessage("Id must be present and must be a number."),
body('email').exists().isEmail().withMessage("Email is not valid."),(req,res) => {
  const errors=validationResult(req);
  if(!errors.isEmpty())
  {
    return res.status(400).json({errors:errors.array()});
  }
  const info = {
        _id : req.body._id,
        name : req.body.name,
        email : req.body.email
      };
      db.collection(collectionName).insertOne(info,(err,doc)=>{
      if(err)
       {
         res.status(500).send(err.message); 
       }
       res.status(200).json({msg:"Successfully Inserted",doc});
   });
});

app.delete('/member/:_id',(req,res)=>{
  let id=parseInt(req.params._id);
  db.collection(collectionName).deleteOne({_id:id},(err,doc)=>{
  if(err)
   {
     res.status(500).send(err.message); 
   }
   res.status(200).json({"msg":"Deleted successfully",doc});
 });
});;


app.put('/member',(req,res) => {
    const name= req.body.name;
    const info = req.body;
    db.collection(collectionName).updateOne({name:name},{$set:info},(err,doc)=>{
    if(err)
     {
       res.status(500).send(err.message); 
     }
     res.status(200).json({"msg":"Updated successfully",doc});
   });
  });

app.listen(port, () => {
    console.log(`Listening at port ${port} .....`);
})  