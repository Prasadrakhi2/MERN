const http = require('http');
const testingSyntex = require('./errors');
const logicalError =require('./logicalErr');
const claculateArea = require('./prectice_debugging')

const server = http.createServer((req)=>{
    console.log(req.url, req.method);
    // testingSyntex();
    // logicalError();
    claculateArea();
})

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server has been started at [http://localhost:${PORT}]`);
})