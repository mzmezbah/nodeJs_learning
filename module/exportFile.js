const add = (a,b)=> a+b;
// module.exports.add = add
module.exports.add = (a,b)=> a+b;
// exports.add = (a,b) => a+b;
// module.exports = add

const sub = (a,b)=> a-b;
const mult = (a,b)=> a*b;
const div = (a,b)=> a/b;

const test = (a,b)=> add(a,b)/div(a,b);

exports.test = (a,b)=> add(a,b)/div(a,b);

// module.exports.test = (a,b)=> add(a,b)/div(a,b);

// module.exports = test

// module.exports ={
//   test,
//   add,
//   mult
// }


// console.log(test(2,5) +  '\n' + div(2,5) + '\n' + add(2,5) + '\n' + div(add(2,5),div(2,5)))
//
//
// console.log(module);
