const express=require('express');//import express library
const app=express();//start a server
const port=3000;
const path=require('path');

//responds with message on home page
// app.get('/user',(req,res)=>{
   //res.send("Hello Sandesh!!!!");
//    res.sendFile(path.join(__dirname,'index.html'))
// });

//creating static server
app.use(express.static(path.join(__dirname)));//http://localhost:3000/index.html

//respond with post request on the root route(/user)
// app.post('/user',(req,res)=>{
//   res.send("Got a post request");
// });

//respond to put request to /user
// app.put('/user',(req,res)=>{
//    res.send("Got a put request at /user");
// });

// respond to a DELETE request to /user route
// app.delete('/user',(req,res)=>{
//    res.send("Got a DELETE request request at /user");
// });

app.listen(port,()=>{
   console.log(`Example app listening at http://localhost:${port}`);
});


