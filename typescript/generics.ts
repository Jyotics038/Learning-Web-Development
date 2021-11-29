let names: Array<string> = [];

let promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve string data");
  }, 2000);
});

promise.then((data) => {
  data.split("");
});

//creating generic function
function merge(){
   
}