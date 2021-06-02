// middleware is just like a fn. we can use it between the space of request & response time. we can do anything of any request before the it response by using this middleware fn..

const express = require('express');
const fs = require('fs');
const morgan = require('morgan'); // its a third party middleware.


const app = express() // express is a fn...when we call this express fn it create a server and here we create a server name app...we will keep all of our data in this server....

// app.use(morgan('dev')) // use middleware for all route..


// function DemoMiddleware(req,res,next){
//   console.log('hello, i am running', req.url);
//   next()
// } // we can make a middleware. its a fn . it takes a 3 parameter 1.request 2.response 3.next..next is work just like a fn. if we don't call this fn then req don't response..

// app.use(DemoMiddleware)

function demoMiddleware(req,res,next) {
  if(req.url == '/help'){
    res.json({
      file: 'this file does not existing anymore..'
    })
  }
  console.log('this page route - ' , req.url);
  next()
}

function tinyLogger(){
  return(req,res,next) =>{
    console.log(`${req.method} - ${req.url}`)
    next()
  }
}

let middleware =[demoMiddleware,tinyLogger()]

app.use(middleware)



app.get('/about',morgan('dev') /*use middleware in single route & we use a lot middleware fn here. by using comma(,)*/, (req,res)=> {
  res.send('<h1> hello, i am about page</h1>')
})

app.get('/help', (req,res)=> {
  res.send('<h1>hi, this is a help full pages.</h1>')
})

app.get('/', (req,res)=> {
  fs.readFile('../module/index.html','utf8', (err, data) =>{
    res.send(data)
    res.end()
  })

//  res.send('<h1>hello, I am start running with a new server...')
})

app.get('*', (req,res)=>{
  res.send('<h1 style="text-align: center; color: red; margin: 0 auto; padding-top: 170px;  font-size: 124px;">404! NOT FOUND</h1>')
})

const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
})//when we create a server ...we need to listen this server otherwise it does not work...it take two thing 1 is port 2 is a callback fn..
