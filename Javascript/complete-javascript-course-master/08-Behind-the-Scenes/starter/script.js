'use strict';

// function calcAge(birthYear) {
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
let age = 30;
let oldAge = 30;
age = 31;
console.log(age);
console.log(oldAge);

//Reference types
const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('friend:', friend); //27
console.log('me', me); //27
