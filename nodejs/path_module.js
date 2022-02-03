const path=require('path')

console.log(path.sep);

//join the given path
const filepath= path.join('folder','text_folder','path.txt')
console.log(filepath);

//base path
const base=path.basename(filepath)
console.log(base);

//all path
const absolute=path.resolve(__dirname,'folder','text_folder','path.txt')
console.log(absolute);