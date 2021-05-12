const express=require('express');
const app=express();
const port=5000;
const fs=require('fs');

var cb0=(req,res,next)=>{
    console.log("CBO");
    next();
};

var cb1=(req,res,next)=>{
    console.log("CB1");
    next();
};

// var cb2=(req,res,next)=>{
//     res.send("Hello from C!");
// };

app.get('/example/c',[cb0,cb1],(req,res,next)=>{
    console.log("the response will be sent by the next function...");
    next();
  },(req,res)=>{
      res.send("Hello from D!");
  });

app.get('/', function (req, res) {
    throw new Error('BROKEN'); // Express will catch this on its own.
  });

  app.get('/read', function (req, res, next) {
    fs.readFile('/file-does-not-exist', function (err, data) {
      if (err) {
        next(err);// Pass errors to Express.
      } else {
        res.send(data);
      }
    });
  });

  app.get('/write', [
    function (req, res, next) {
      fs.writeFile('/inaccessible-path', 'data', next);
    },
    function (req, res) {
      res.send('OK');
    }
  ]);

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
