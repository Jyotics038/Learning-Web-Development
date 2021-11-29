'use strict';
/*
const bookings = [];
const createBooking = function (flightNum, newPAssengers = 1, price = 199) {
  //   newPAssengers = newPAssengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    newPAssengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
*/

/*
//128 video

const flight = 'LH234';
const jonus = {
  name: 'Jonus',
  passport: 24366723836,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24366723836) {
    alert('Check in');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, jonus);
console.log(flight);
console.log(jonus);
*/

/*
//130
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string:${str}`);
  console.log(`tranformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is best!', upperFirstWord);
transformer('JavaScript is best!', oneWord);

//JS usses callbacks all the time
const high5 = function () {
  console.log('Hi');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
//131 function returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Jyoti');

greet('Hello')('Jonas');

//Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jyoti');
*/

/*
//132...Call and apply methods
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on
         ${this.airline}flight ${this.iataCode} 
         ${flightNum}`);
    this.bookings.push({
      flight: `${this.iataCode}
         ${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Jyoti');
lufthansa.book(240, 'Abhishek');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EN',
  bookings: [],
};

const book = lufthansa.book;

//does not work
//book(23, 'Sarah');

book.call(eurowings, 23, 'Sarah');
//call book function with this keyword set to eurowings
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Somerville');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'EN',
  bookings: [],
};

book.call(swiss, 583, 'Abhishek');
console.log(swiss);

//Apply method
const flighData = [583, 'Georger Cooper'];
book.apply(swiss, flighData);
console.log(swiss);

book.call(swiss, ...flighData); //sa,e as 140 line

//Bind method
const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEw(23, 'Steven Williams');

const bookEw23 = book.bind(eurowings, 23);
bookEw23('Jyoti');
bookEw23('Abhishek');

//Another example- with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Another..Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT=value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

//using returning function in function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(100);
*/

/*
//IIFE
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
  // const isPrivate=23;
})();

(() => console.log('This will never run again'))();

{
  //const isPrivate = 23;
  var notPrivate = 46;
}
//console.log(isPrivate);
console.log(notPrivate);
*/

//Closures
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);
*/

//Example of closure
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//RE-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  //settimeout funct will execute after 3 sec
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups,each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);
