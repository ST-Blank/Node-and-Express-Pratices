const express=require('express')
const app=express()
const path=require('path')

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./public/index.html'))
})
app.get('*',(req,res)=>{
    res.send('Error not Found');
})

app.listen(5000,()=>{
    console.log('listening on port 5000');
})