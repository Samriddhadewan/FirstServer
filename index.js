const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("hello world!") 
})

app.get("/data", (req, res)=>{
    res.send("more data coming soon")
})

app.listen(port, ()=>{
    console.log(`my first server is running on port${port}`);
})