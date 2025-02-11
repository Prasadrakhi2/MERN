const http = require('http');



const server = http.createServer((req,res) => {
    console.log(req.url, req.headers, req.method);
    // process.exit();
});

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`the server is started of [http://localhost:${PORT}] `)
});