const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  console.log("first dummy midleware called", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("secound dummy midleware called", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("third midleware called", req.url, req.method);
//   res.send("welcome to my page");
//   next();
// });

app.get("/", (req, res, next) => {
  console.log("handle /  midleware called", req.url, req.method);
 res.send("<h1>welcome to my home page</h1>")
});

app.get("/contact-us", (req, res, next) => {
  console.log("form page called", req.url, req.method);
  res.send(`<h1>please enter your details</h1>
    <form action="/contact-us" method="POST">
        <label for="name">name <input type="text" name="name" placeholder="enter your name here"></label><br>
        <label for="email">email <input type="text" name="email" placeholder="enter your mail is here"></label><br>
          <button type="submit">send</button>
    </form>`);

});

app.post("/contact-us", (req, res, next) => {
  console.log("form handler", req.url, req.method, req.body);
  // res.send("<h1>form detail has been submitted</h1>");
  next();
});


//handle encoding of the data
app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
    console.log("form submite", req.url, req.method, req.body);
    res.send("<h1>form detail has been submitted</h1>");
    
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server has been started at [http://localhost:${PORT}]`);
});
