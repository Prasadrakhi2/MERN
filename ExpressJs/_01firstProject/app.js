//core module
const http = require('http');

//external module
const express = require('express');

//local module
const userRequestHandler = require('./user')

//here express create the app same as we create the diff modules like user.js
const app = express();

//adding a middleware
app.use((req, res, next)=>{
    console.log("first midlewear called" ,req.url, req.method);
    next()
})

app.use((req, res, next)=>{
    console.log("secound midlewear called" ,req.url, req.method);
    res.send("<p>welcome to my first express page</p>")
   
})


const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server has been started at [http://localhost:${PORT}]`);
})