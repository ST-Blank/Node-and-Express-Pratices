const express=require('express')
const app=express()


const people=require('./routes/people')
const auth=require('./routes/auth')

//static assets
app.use(express.static('./exampleProj'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

app.use('/app/people',people)
app.use('/login',auth)



app.listen(5000,()=>{
    console.log('listening on port 5000');
})