const express=require('express');//import express library
const app=express();//start a server
const port=5000;
const moment=require('moment');
const path=require('path');

const members=require('./member.js');

const logger=(req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} ${moment().format()}`);
    next();
};

//init middleware
app.use(logger);

//responds with json on home page
app.get('/user',(req,res)=>{
   res.json(members);
});

//get single member
app.get('/user/:id',(req,res)=>{
    const found=members.some((member)=>member.id === parseInt(req.params.id));
    if(found)
    {
        res.json(members.filter((member)=>member.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg:`Member not found with id ${req.params.id}`});
    }
    
});

app.listen(port,()=>{
   console.log(`Example app listening at http://localhost:${port}`);
});


