const express=require('express');
const app=express();
const port=2000;
const router=express.Router();

//executed for every request as there is no route path
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });

//any type of http request to /user path
router.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next();
  }, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });

app.use('/',router);

app.listen(port,()=>{
    console.log(`Listening at port ${port}....`);
});