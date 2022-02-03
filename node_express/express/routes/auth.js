const express=require('express')
const router=express.Router()

router.post('/',(req,res)=>{
    console.log(req.body);
    const {name}=req.body
    if(name){
        return res.send('welcome '+name)
    }
         res.send('provide name')
    
})

module.exports=router