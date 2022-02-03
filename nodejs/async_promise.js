/*
const{readFile}=require('fs')

const getPath=(path)=>{
     return new Promise((reject,resolve)=>{
        readFile(path,'utf-8',(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}
getPath('./folder/first.txt')
.then((result)=>console.log(result))
.catch((err)=>console.log(err))
*/

/*
const {readFile, writeFile}=require('fs')
const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)

const start= async()=>{
    try{
        const first= await readFilePromise('./folder/first.txt','utf-8')
        const second= await readFilePromise('./folder/second.txt','utf-8')
        await writeFilePromise('./folder/async_promise.txt','promise file: '+first+' '+second)
    console.log(first,second)
}catch(error){
        console.log(error)
}
}
start()
*/

const {readFile, writeFile}=require('fs').promises

const start= async()=>{
    try{
        const first= await readFile('./folder/first.txt','utf-8')
        const second= await readFile('./folder/second.txt','utf-8')
        await writeFile('./folder/async_promise_2.txt','promise file: '+first+' '+second)
    console.log(first,second)
}catch(error){
        console.log(error)
}
}
start()
