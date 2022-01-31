const http=require('http');

//request and response
const server=http.createServer((req,res)=>{
    //console.log(req.url);
    if(req.url=="/"){
        res.end("Hello from the home sides");
    }else if(req.url=="/about"){
        res.end("Hello from the AboutUs sides");
    }
    else if(req.url=="/contact"){
        res.end("Hello from the ContactUS sides");
    }else{
        res.writeHead(404,{"Content-type": "text/html"});
        res.end("PAge does not exist");
    }
   //res.end('hello');
});

//to listen request 
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});