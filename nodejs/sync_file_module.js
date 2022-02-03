const { readFileSync,writeFileSync } = require("fs");
console.log('starting');

const first=readFileSync('./folder/first.txt','utf-8')
const second=readFileSync('./folder/second.txt','utf-8')
//console.log(first +' '+second);

writeFileSync('./folder/result.txt','here is the content:'+first +' '+second ,{flag:'a'})
console.log('done the task');
console.log('starting new line');