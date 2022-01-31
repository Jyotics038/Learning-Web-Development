const path=require('path');
const express = require('express');

const app=express();

//console.log(__dirname);
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("Hello from the express server");
});

app.get("/about",(req,res)=>{
    res.send("Welcome to the about page");
});

app.listen(8000,()=>{
    console.log("Listening port at 8000");
})