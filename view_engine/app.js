const express = require('express')
const morgan = require('morgan')

const app = express();

app.set('view engine', 'ejs') //in ejs view engine, we can use set method & also render full page as template & we use this template as common page for dynamically for all user..

//here we need to create a new folder name 'views' and here we need to keep all ejs file like  under this page ..here this file or page we send dynamic data as variable & like under as an object by import or like under system..but for every variable we send special symbol like here ejs file..

app.use(morgan('dev'))


app.get('/test',(req,res)=>{
    res.render('./pages/test')
})
app.get('/help', (req,res)=>{
    res.render('./pages/help')
})

app.get('/about', (req,res)=> {
    res.render('./pages/about')
})

app.get('/', (req,res)=>{

    let  post = {
        title : 'this is title',
        body : 'this is body',
        published : true
    }

    let posts = [
        {
            title: 'HELLO One',
            author: 'mezvah'
        },
        {
            title: 'HELLO Two',
            author: 'zishan'
        },
        {
            title: 'HELLO Three',
            author: 'uddin'
        }
    ]
    res.render('./pages/index',{title: 'this is dummy page', newDate :   new Date().toString(), post, posts })
})

app.listen('8080', ()=>{
    console.log('this port is running on 8080')
})

