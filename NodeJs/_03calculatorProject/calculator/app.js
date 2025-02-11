const http = require('http');


const userRequest = require('./handlers');
const server = http.createServer(userRequest);

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server has been started [http://localhost:${PORT}]`)
})