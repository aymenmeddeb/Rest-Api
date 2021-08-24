const express=require('express')
const Contact=require('../model/contact');
const router=express.Router()

// method post
// path http://localhost:5000/contact
router.post('/',async(req,res)=>{
 
    try {
   let newcontact= new Contact ({...req.body})
   let result=await  newcontact.save();
   res.send({result,msg:'contact saved'})     
    } catch (error) {
      res.status(400).send({msg:'contact not saved'})
      console.log(error)  
    }
    
})
// method get
// path http://localhost:5000/contact/all
router.get('/all',async(req,res)=>{
 
  try {
  let result=await Contact.find();
 res.send({result,msg:'contact getted'})     
  } catch (error) {
    res.status(400).send({msg:'contact not get'})
    console.log(error)  
  }

  
})

module.exports=router;