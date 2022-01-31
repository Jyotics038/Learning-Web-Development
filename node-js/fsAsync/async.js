const fs = require('fs');

const data=fs.readFileSync('read.txt','utf-8');
console.log(data);
console.log("After the data");

