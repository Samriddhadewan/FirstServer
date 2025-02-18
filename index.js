const express = require("express");
const phones = require("./phones.json")
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("hello world! soon toon") 
})

app.get("/phones", (req, res)=>{
    res.send(phones);
})

app.get("/phones/:id", (req, res)=> {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {}
    res.send(phone)
})

app.get("/data", (req, res)=>{
    res.send("more data coming soon tooon")
})
app.listen(port, ()=>{
    console.log(`my first server is running on port${port}`);
})