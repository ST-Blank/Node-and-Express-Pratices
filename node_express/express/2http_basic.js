const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    console.log('server used');
    res.status(200).send('Home Page')
})
app.get('*',(req,res)=>{
    res.status(404).send('<h1>no found 404 error</h1>')
})
app.listen(5000,()=>{
    console.log('running on port 5000');
})