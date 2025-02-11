const { Console } = require('console');
const http = require('http');


const server = http.createServer(
    (req,res) => {
        console.log(req);
        // console.log(req.url, req.method, req.headers);
    });


    const PORT = 3000;

server.listen(PORT , ()=>{
    console.log(`server started [http://localhost:${PORT}]`);
   
});
