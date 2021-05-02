const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Router = require('./router')

const app = express()


app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())



app.use('/', Router)
app.use('/contacts', Router)



const PORT = process.env.PORT || 8080

mongoose.connect('mongodb+srv://mezbah:45406331@cluster0.pn01s.mongodb.net/test-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen('PORT', () => {
            console.log(`server is running on port- ${PORT}`)
        })
    })
    .catch((e) => {
        console.log(e)
    })