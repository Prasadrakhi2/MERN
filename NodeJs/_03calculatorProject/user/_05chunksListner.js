
const fs = require("fs");
const { URLSearchParams } = require("url");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<header><title>user input</title></header>");
    res.write("<body><h1>enter your details:</h1>");
    res.write('<form action="/submit-tab" method="POST">');
    res.write(
      '<input type="text" name="userName" placeholder="enter your name"/><br>'
    );
    res.write("<label>gender</label><br>");
    res.write(
      '<input type="radio" id="male" value="male" name="gender" /><label for="male">male</label>'
    );
    res.write(
      '<input type="radio" id="female" name="gender" value="female" /><label for="female">female</label>'
    );
    res.write('<button type="submit">ckick me');
    res.write("</body>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit-tab" && req.method == "POST") {

    const body = [];
    req.on('data', chnck=>{
        console.log(chnck);
        body.push(chnck);
    })

    req.on('end',()=>{
        const fullBody = Buffer.concat(body).toString();
        console.log(fullBody);
        const params = new URLSearchParams(fullBody);
        // const bodyObj = {};
        // for(const [key,val] of params.entries()){
        //     bodyObj[key] = val;
        // }
        // console.log(bodyObj);
        

        //uper one is also same
        const bodyObj = Object.fromEntries(params);
        console.log(bodyObj)
        
    fs.writeFile("user-detail.txt", JSON.stringify(bodyObj), error=>{
      console.log("file written has been completed")
      
    res.statusCode = 302;
    res.setHeader("location", "/");
    return res.end();
    });
    })

  }
else{
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<header><title>routing</title></header>");
  res.write("<body><h1>thank you for enjoying my product</h1></body>");
  res.write("</html>");
  res.end();}
};

module.exports = userRequestHandler;

