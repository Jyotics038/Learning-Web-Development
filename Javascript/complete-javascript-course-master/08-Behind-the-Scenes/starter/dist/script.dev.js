'use strict'; // function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `you are ${age},born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);
//primitve types

var age = 30;
var oldAge = 30;
age = 31;
console.log(age);
console.log(oldAge); //Reference types

var me = {
  name: 'Jonas',
  age: 30
};
var friend = me;
friend.age = 27;
console.log('friend:', friend); //27

console.log('me', me); //27
//# sourceMappingURL=script.dev.js.map
