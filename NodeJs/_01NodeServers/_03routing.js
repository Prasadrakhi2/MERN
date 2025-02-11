const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url===('/')){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<header><title>routing</title></header>');
        res.write('<body><h1>welcome to my page</h1></body>');
        res.write('</html>');
        return res.end();
    }

    else if(req.url===('/product')){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<header><title>routing</title></header>');
    res.write('<body><h1>check out new products</h1></body>');
    res.write('</html>');
    return res.end();
    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<header><title>routing</title></header>');
    res.write('<body><h1>thank you for enjoying my product</h1></body>');
    res.write('</html>');
    res.end();
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server has been started at [http://localhost:${PORT}]`)
})