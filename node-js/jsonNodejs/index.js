const fs= require('fs');
const bioData={
    name:"jyoti",
    age:21,
    channel:"poetry prism",
};
   
//object convert into json
// const jsonData=JSON.stringify(bioData);
// console.log(jsonData);

// //console.log(bioData.channel);

// //json to object
// const objData=JSON.parse(jsonData);
// console.log(objData);

const jsonData=JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData, (err)=>{
   //console.log("done");
   const orgData=JSON.parse(data);
   console.log(orgData);
});

fs.readFile("json1.json","utf-8",(err,data)=>{
   console.log(data);
});



