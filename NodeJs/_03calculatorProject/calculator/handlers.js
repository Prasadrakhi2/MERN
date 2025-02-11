const {sumHandlers} = require('../sumHandler')
const userRequest = (req, res)=>{
    console.log(req.url, req.method)
    if(req.url === '/'){
        res.setHeader('Create-type', 'text/html');
        res.write('<html>')
        res.write('<head><title>calculator</title></head>')
        res.write('<body>')
        res.write('<h1>Welcome to my page</h1>')
        res.write('<a href="/calculator">Calculator</a>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    else if(req.url === '/calculator'){
        res.setHeader('Create-type', 'text/html');
        res.write('<html>')
        res.write('<head><title>calculator</title></head>')
        res.write('<body>')
        res.write('<form action="/calculate-result" method="POST">')
        res.write('<label for="first">First value : </label>')
        res.write('<input type="text" name="first" placeholder="enter the first value here"><br><br>')
        res.write('<label for="secound">Secound value : </label>')
        res.write('<input type="text" name="secound"placeholder="enter the first value here"><br>')
        res.write('<button  type="submit">Sum</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    else if(req.url === '/result'){
        res.setHeader('Create-type', 'text/html');
        res.write('<html>')
        res.write('<head><title>calculator</title></head>')
        res.write('<body>')
        res.write('<h1>the sum of that 2 value is : </h1>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    else if(req.url.toLowerCase() === "/calculate-result" && req.method == 'POST'){
        sumHandlers(req, res);
        return res.end();
    }

    else{
        res.setHeader('Create-type', 'text/html');
        res.write('<html>')
        res.write('<head><title>calculator</title></head>')
        res.write('<body>')
        res.write('<h1>404 you are on the wrong page</h1><br>')
        res.write('<p>click on below link for home page</p><br>')
        res.write('<a href="/">Home</h1>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
   
};

module.exports = userRequest;