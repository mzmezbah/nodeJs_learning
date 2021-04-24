const fs = require('fs');

fs.readFile('./writeData',(error,data) => {
  if (error) {
    console.log(error);
  }
  let obj = JSON.parse(data)
  console.log(obj.address)
})  //this readFile system takes two argument 1. path, 2. callback fn & it to argument A. errror B. data....
