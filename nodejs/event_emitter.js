
//http eventemmiter example
/*
const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    res.end('welcome')
})
server.listen(5000)
*/
const eventemitter=require('events')
const customevent=new eventemitter()

customevent.on('response',(name,id)=>{
    console.log('data received is '+name+' '+id);

})
customevent.on('response',()=>{
    console.log('other logic');
})
customevent.emit('response','sagar',32)