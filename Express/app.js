const express = require('express');
const fs = require('fs');


const app = express() // express is a fn...when we call this express fn it create a server and her we create a server name app...we will keep all of our data in this server....

app.get('/about', (req,res)=> {
  res.send('<h1> hello, i am about page</h1>')
})

app.get('/help', (req,res)=> {
  res.send('<h1>hi, this is a helpfull pages.</h1>')
})

app.get('/', (req,res)=> {
  fs.readFile('./index.html','utf8', (err, data) =>{
      console.log(data);
    res.send(data)
    res.end()

  })

//  res.send('<h1>hello, I am start running with a new server...')
})

app.get('*', (req,res)=>{
  res.send('<h1 style="text-align: center; color: red; margin: 0 auto; padding-top: 170px;  font-size: 124px;">404! NOT FOUND</h1>')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
})//when we create a server ...we need to listen this server otherwise it does not work...it take two thing 1 is port 2 is a callback fn..
