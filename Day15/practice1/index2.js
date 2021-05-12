const express=require('express');
const app=express();
const port=3000;
const path=require('path');

app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get('/',(req,res)=>{
    res.render("home",{
        isCorrect:true
    });
});

app.get('/about',(req,res)=>{
   res.send("Thanks for learning about us.");
});

app.post("/result",(req,res)=>{
   if(parseInt(req.body.year) === 2021)
   {
    res.send("You are correct .Thanks for submitting the form.");
   }
   else{
    res.send("You are wrong try again."); 
   }
});

app.listen(process.env.port||port,()=>{
    console.log(`Listening port at ${port}...`);
});