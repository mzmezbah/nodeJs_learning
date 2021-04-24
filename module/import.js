// import {add,test} from './exportFile' //this import system is not work is not work in node js ...it just works in javascript browser...

// const exportFile = require('./exportFile')

// //
// console.log(exportFile);
// console.log(exportFile.add(20,55));


const {add,test} = require('./exportFile')

console.log(add(40,33));

console.log(test(30,33));
