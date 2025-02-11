const express = require('express');

const app = express();


app.get("/", (req, res, next)=>{
    console.log("first middleware called", req.url, req.method);
    // res.send("welcome to first middle ware");
    next();
})

app.post("/submit-tab",(req, res, next)=>{
    console.log("secound middleware called", req.url, req.method);
    res.send("welcome to my page")
})

app.use("/", (req, res, next)=>{
    console.log("another middleware called", req.url, req.method);
    res.send("welcome to another middleware");
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server has been started at [http://localhost:${PORT}]`);
})