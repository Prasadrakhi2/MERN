const { URLSearchParams } = require("url");

const sumHandlers = (req, res)=>{
       const body = [];
       let result;
       console.log("1.event started the loop")
       req.on('data', chunck=>{
        body.push(chunck);
        console.log("2. data chuncks go in the body")
       })

       req.on('end',()=>{
              console.log("3.end listner is called")
        const bodySt =Buffer.concat(body).toString();
        const bodyObj = new URLSearchParams(bodySt);
        const fullBody = Object.fromEntries(bodyObj);
        console.log(fullBody);
        result = Number(fullBody.first) + Number(fullBody.secound);
        console.log(result)
        console.log("4. body return")
        res.setHeader('Create-type', 'text/html');
        res.write(`<html>
        <head><title>calculator</title></head>
        <body>
        <h1>the sum is : ${result}</h1>
        </body>
        </html>`);
        return res.end();
       }) 
      
}

exports.sumHandlers = sumHandlers;