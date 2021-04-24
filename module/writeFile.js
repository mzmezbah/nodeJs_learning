const fs = require('fs');

const testObj = {
  name: 'mezbah-zishan',
  gmail: 'mdmezbahuddinfeni@gmail.com',
  address: {
    homeTown: 'Feni',
    CurrentTown: 'Feni'
  }
}

const data = JSON.stringify(testObj)

fs.writeFile('writeData', data, (error)=> {
  if(error){
    console.log(error)
  }else(
    console.log('write successfully')
  )
})
