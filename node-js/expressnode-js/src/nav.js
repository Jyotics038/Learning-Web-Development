const express = require('express');
const app = express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello from the home page</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>Hello from the about page</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("Hello from the contact page");
});

app.get("/temp",(req,res)=>{
    res.send([{
        id:1,
        name:"jyoti",
    },
    { 
        id:1,
        name:"jyoti",
    }
]);
});

app.listen(port,()=>{
    console.log("Listening port at 3000");
});