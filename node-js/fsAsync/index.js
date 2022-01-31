const fs= require('fs');

// fs.writeFile('read.txt','Today is the first day of the week',
// (err)=>{
//   console.log("The file is created");
//   console.log(err);    //null
// });


// fs.appendFile('read.txt','Today is the first day of the week',
// (err)=>{
//     console.log("The file is created");
//     console.log(err);    //null
//   }
// );

fs.readFile('read.txt',"UTF-8",
(err,data)=>{
  console.log(data); 
});
