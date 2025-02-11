const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {

    console.log(req.url, req.method, req.headers);
    if(req.url === ('/')){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<header><title>user input</title></header>');
        res.write('<body><h1>enter your details:</h1>');
        res.write('<form action="/submit-tab" method="POST">');
        res.write('<input type="text" name="userName" placeholder="enter your name"/><br>');
        res.write('<label>gender</label><br>');
        res.write('<input type="radio" id="male" value="male" name="gender" /><label for="male">male</label>');
        res.write('<input type="radio" id="female" name="gender" value="female" /><label for="female">female</label>');
        res.write('<button type="submit">ckick me');
        res.write('</body>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if(req.url.toLowerCase() ==="/submit-tab" && req.method == 'POST'){
        fs.writeFileSync('user-detail.txt', 'rakhi prasad');
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<header><title>routing</title></header>');
    res.write('<body><h1>thank you for enjoying my product</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;
 server.listen(PORT, () =>{
    console.log(`server is started at [http://localhost:${PORT}]`);
 })