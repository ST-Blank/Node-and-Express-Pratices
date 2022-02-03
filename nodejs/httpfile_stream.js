const http=require('http')
const fs=require('fs')

http.createServer(function(req,res){
    //const text=fs.readFileSync('./folder/bigdata.txt','utf-8')
    //res.end(text)
    const fileStream=fs.createReadStream('./folder/bigdata.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        console.log(err);
    })
})
.listen(3000)