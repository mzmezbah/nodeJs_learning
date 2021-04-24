const path = require('path')// third party module


console.log(__filename)//show full file path
console.log(__dirname)//show full directory path
console.log(module)// module details
console.log(path.basename(__dirname))//show only directory basename
console.log(path.basename(__filename)) // show only file name
console.log(path.extname(__filename))// show file extention

let pathObj ={
  dir : 'user/loclal',
  name: 'hello',
  ext : '.js'
}

console.log(path.format(pathObj))// it makes a obj to path format

const x = path.format(pathObj)
console.log(path.isAbsolute(__filename)) // show path is true or false
console.log(path.isAbsolute('./index'))
console.log(path.isAbsolute(x));
console.log(x);

console.log(path.join('user', 'local', 'localHost', '5050','index', '.html'))// it return string to path format

console.log(path.join(__dirname,'user', 'local', 'localHost', '5050','index', '.html'));

console.log(path.resolve(__dirname,'localhost9090', 'practde.js'));//it also works like path.join but have some little difference

console.log(path.parse(__dirname))// it return a path as an object...
console.log(path.parse(__filename))
