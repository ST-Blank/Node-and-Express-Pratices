const { writeFileSync } = require('fs');
for(let i=0;i<10000;i++)
{
writeFileSync('./folder/bigdata.txt','my name is sagar and count is '+i+'\n',{flag:'a'})
}