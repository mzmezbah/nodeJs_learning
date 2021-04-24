const fs = require('fs');
const http = require('http');

let server = http.createServer((req,res)=> {
  fs.readFile('./index.html', (err,data)=>{
    res.write(data)
    res.end()
  } )
})

server.listen(4141,()=> {
  console.log('server create successfully...4141');
})
