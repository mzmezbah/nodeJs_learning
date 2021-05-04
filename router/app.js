const express = require('express')
const userRouter = require('./userRoute')
const postRoute = require('./postRoute')

let app = express()

app.use('/user', userRouter)
app.use('/posts', postRoute)


app.get('/products/:id', (req,res)=> {
  let id = req.params
  console.log(id)
  res.send('this is product')
}) //here : means that is unique for every one..when we search any product then we can search it by any unique id in url...like (localhost:555/products/58957895729)

app.listen('5555', ()=>{
  console.log(`this server is running on port - 5555`)
})
      