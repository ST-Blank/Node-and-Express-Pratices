const express=require('express')
const authorize = require('./5authorize')
const app=express()
const logger=require('./5logger')

//middleware function
/*
const logger=(req,res,next)=>{
const method=req.method
const url=req.url
const time=new Date().getFullYear()
console.log(method,url,time);
next()
}
*/
//for single
//app.get('/',logger,(req,res)=>{
    //res.send('home page')
//})

//for multiple middleware
//only for same path
//app.use('/api',logger)
//for all
//app.use(logger)
app.use([logger,authorize])
app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/about',(req,res)=>{
    res.send('about')
    console.log(req.user);
})

app.get('/api/item',(req,res)=>{
    res.send('item')
})

app.get('/api/reviews',(req,res)=>{
    res.send('reviews')
})

app.listen(5000,()=>{
    console.log('listening on port 5000');
})

