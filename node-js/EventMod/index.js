const EventEmitter = require('events');

const event=new EventEmitter();

//event.addEventListener
//listening events
event.on('sayMyName',()=>{
    console.log("your name is jyoti");
});
event.on('sayMyName',()=>{
    console.log("your name is Abhi");
});

//event fire
event.emit('sayMyName');

event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkPage",200,ok);

