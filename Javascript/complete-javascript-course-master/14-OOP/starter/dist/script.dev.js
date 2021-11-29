'use strict';
/*
//First coding challenge
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/
// const Person = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };
// const jyoti = new Person('Jyoti', 2000);
// const Abhi = new Person('Abhi', 2001);
// console.log(Abhi);
// //Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// Abhi.calcAge();
// jyoti.calcAge();
// console.log(jyoti.__proto__);
// Person.prototype.species = 'Homo Sapiens';
// console.log(jyoti, Abhi);
// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__);
//ES6 CLASSES
//class expression
//const PersonCl=class{}
//class declaration

/*
class PersonCl {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  cacAge() {
    console.log(2037 - this.lastName);
  }
}
const jyoti = new PersonCl('jyoti', 2000);
console.log(jyoti);
jyoti.cacAge();

//getter and setter
const account = {
  owner: 'jonas',
  movements: [200, 500, 564, 234],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(movements);
*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person = function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.lastName);
}; // const Student = function (firstName, lastName, course) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.course = course;
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// class Student extends Person{
//   constructor(firstName,lastName,course){
//     super(firstName,lastName);
//     this.course=course;
//   }
// }
//////////////////////////////////


var Account =
/*#__PURE__*/
function () {
  function Account(owner, currency, pin) {
    _classCallCheck(this, Account);

    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log("thanks for opening account,".concat(owner));
  }

  _createClass(Account, [{
    key: "deposit",
    value: function deposit(val) {
      this.movements.push(val);
    }
  }, {
    key: "withdraw",
    value: function withdraw(val) {
      this.deposit(-val);
    }
  }]);

  return Account;
}();

var acc1 = new Account('Jonas', 'EUR', 1111, []);
console.log(acc1); // acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
//# sourceMappingURL=script.dev.js.map
