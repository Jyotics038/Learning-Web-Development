const fs=require('fs');

//creating a new file
fs.writeFileSync('read.txt',"Welcome here!");

//appending data
fs.appendFileSync('read.txt'," How are you ??");

//reading data
const buf_data=fs.readFileSync('read.txt');
console.log(buf_data);

//<Buffer 57 65 6c 63 6f 6d 65 20 68 65 72 65 21 20 48 6f 77 20 61 72 65 20 79 6f 75 20 3f 3f>

orig_data=buf_data.toString();
console.log(orig_data);


//to rename file
fs.renameSync('read.txt', 'readwrite.txt');
