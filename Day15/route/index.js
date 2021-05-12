const express=require('express');
const app=express();
const port=3000;

//middleware are executed in order in which they are defined in code
//Body Parser middleware
app.use(express.json());//executed second
app.use(express.urlencoded({extended:false}));//executed third

app.use('/user/members',require('./routes.js'));//executed fourths

 //executed first
app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
});

