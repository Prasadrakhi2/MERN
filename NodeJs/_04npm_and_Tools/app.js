const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req)
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`the server has been started at [http://localhost:${PORT}]`)
})