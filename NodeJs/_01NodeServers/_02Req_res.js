const http = require('http');


const server = http.createServer((req, res) =>{
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>response checking</title></head>');
    res.write('<body><h1>hello I am rakhi!!!!</h1></body>')
    res.write('</html>');
});

const PORT = 3000;

server.listen(PORT, () =>{
    console.log(`server started [http://localhost:${PORT}]`)
})