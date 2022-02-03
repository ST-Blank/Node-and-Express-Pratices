const { readFile,writeFile } = require("fs");
console.log('start');

readFile('./folder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first =result
    readFile('./folder/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const second =result
    writeFile(
        './folder/result_async.txt',
        ' here is the result : '+first +' '+second +' ', {flag:'a'},
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with the task');
        }
    )
})
})
console.log('starting new line');