function addy(num1: number, num2: number) {
  return num1 + num2;
}

function printResult(num: number) {
  console.log("Result: ", num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(addy(12, 13));

//let somevalue=undefined;
let combinedValues: (a: number, b: number) => number;
combinedValues = add;
console.log(combinedValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
