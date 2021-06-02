
// route is url..any files url is call its route...

let userRouter = require('express').Router()// router is npm ..but we use it easily with express....like above..


userRouter.get('/login', (req,res)=> {
    res.send('<h1> hello everyone its login pages...')
})

userRouter.get('/signUp', (req,res)=>{
  res.send('<h1>hello ,, if you are not register it ..then sign up now!')
})

userRouter.get('/logOut', (req,res)=> {
  res.send('<h1>hello,,this is logOut page..</h1>')
})


module.exports = userRouter
