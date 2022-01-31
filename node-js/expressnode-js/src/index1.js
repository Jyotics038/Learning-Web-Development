const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const port=8000;

//built in middleware
//console.log(path.join(__dirname, '../public'));
const staticPath=path.join(__dirname, '../public')
const templatePath=path.join(__dirname, '../templates/views');
const partialPath=path.join(__dirname, '../templates/partials');

//to set the view engine
app.set('view engine',"hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

///app.use(express.static(staticPath));

//template engine route
app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/",(req,res)=>{
   res.send("Hello from the server");
})

app.get('*',(req,res)=>{
    res.render("404",{
        errorcomment:"OOps page could not be found",
    
    });
})

app.listen(port,()=>{
    console.log("Listening to port 8000");
});