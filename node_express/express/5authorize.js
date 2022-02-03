const authorize=(req,res,next)=>{
    const {user}=req.query
    if(user==='sagar'){
        req.user={name:'sagar', id:4}
        //console.log(req.user);
        next()
    }
    else{
        res.status(401).send('unauthorized')
        
    }
}
module.exports=authorize