const express=require('express');
const router=express.Router();
const { body, validationResult } = require('express-validator');

const members=require('./members.js');

//responds with json on home page
router.get('/',(req,res)=>{
    res.json(members);
 });
 
 //get single member
 router.get('/:id',(req,res)=>{
     const found=members.some((member)=>member.id === parseInt(req.params.id));
     if(found)
     {
         res.status(200).json(members.filter((member)=>member.id === parseInt(req.params.id)));
     }
     else{
         res.status(400).json({msg:`Member not found with id ${req.params.id}`});
     }
     
 });

 //create member
 router.post('/',[body('name').isLength({min:3}).withMessage("Name must be of length at least 3"),
  body('email').trim().isEmail().withMessage("Email must be a valid email").normalizeEmail().toLowerCase()],
  (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newMember={
        name:req.body.name,
        email:req.body.email
      };
      members.push(newMember);
      res.status(200).json(members);
 });

 //update member
 router.put('/:id',(req,res)=>{
    const found=members.some((member)=>member.id === parseInt(req.params.id));
    if(found)
    {
        const updatedMember=req.body;
        members.forEach((member)=>{
            if(member.id===parseInt(req.params.id))
            {
                member.name=updatedMember.name?updatedMember.name:member.name;
                member.email=updatedMember.email?updatedMember.email:member.email;

                res.status(200).json({msg:"Member was updated",member});
            }
        });
    }
    else{
        res.status(400).json({msg:`Member not found with id ${req.params.id}`});
    }
    
});

//delete
router.delete('/:id',(req,res)=>{
    const found=members.some((member)=>member.id === parseInt(req.params.id));
    if(found)
    {
        res.status(200).json({
            msg:"Members deleted",
            members:members.filter((member)=>member.id !== parseInt(req.params.id))
        });
    }
    else{
        res.status(400).json({msg:`Member not found with id ${req.params.id}`});
    }
    
});
 
module.exports=router;