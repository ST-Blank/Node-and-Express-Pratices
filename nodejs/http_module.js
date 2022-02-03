const http=require('http')
const server=http.createServer((req,res)=>{
//console.log(req);
//res.write('homepage')
//res.end()
if(req.url==='/'){
    res.end('homepaGE')
}
if(req.url==='/anotherpage'){
    res.end('anotherPage')
}
res.end(`<html><body>
<h7>opps!!</h7>
<p>unable to find</p>
<a href="/">back to main page</a></html></body>
`)
})
server.listen(4000)