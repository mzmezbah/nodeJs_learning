const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const router = require('./route')

let app = express();

app.use(morgan('dev'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/contact', router)

app.get('/',(req,res)=>{
    fs.readFile('./app.html','utf8',(err,data)=>{
        res.send(data)
        res.end()
    })
})

app.get('*', (req,res) => {
    res.send('<h1 style="text-align: center; color: red; margin: 0 auto; padding-top: 170px;  font-size: 124px;">404! NOT FOUND</h1>')
})


app.listen('1111', ()=>{
    console.log(' this server is running on port num - 1111')
})
