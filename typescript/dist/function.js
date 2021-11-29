function addy(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result: ", num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(addy(12, 13));
//let somevalue=undefined;
var combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});

//# sourceMappingURL=function.js.map
