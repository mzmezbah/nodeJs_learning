const http = require('http');

let server = http.createServer((request, response) => {
    console.log(request.url);
    response.end('<h1>hello my dear friends....</h1>')
})// this method create a server and it took a callback fn & it also took 2 argument & first request seceond is response...

server.listen(9393,()=>{
  console.log('server is created successfully');
}) // for this server running it needs a port..this method create a port for server & it took a port number/name, a callback fn..
