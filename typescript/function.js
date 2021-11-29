"use strict";
function addy(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result: ", num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(addy(12, 13));
//let somevalue=undefined;
let combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
