'use strict'; // Data needed for a later exercise

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'; // Data needed for first part of the section

var restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function orderDelivery() {
    var starterIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var mainIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '20:00';
    var address = arguments.length > 3 ? arguments[3] : undefined;
    console.log("Order received!".concat(this.starterMenu[starterIndex], "and\n    ").concat(this.mainMenu[mainIndex], "will be delived to ").concat(address, " at ").concat(time, "\n    "));
  },
  orderPasta: function orderPasta(ing1, ing2, ing3) {
    console.log("here is your delicious pasta with\n    ".concat(ing1, ",").concat(ing2, ",").concat(ing3, "\n    "));
  },
  orderPizza: function orderPizza(mainIngredient) {
    console.log(mainIngredient);

    for (var _len = arguments.length, otherIngredients = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      otherIngredients[_key - 1] = arguments[_key];
    }

    console.log(otherIngredients);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0,
      // Open 24 hours
      close: 24
    }
  }
};
restaurant.orderDelivery({
  time: '22.30',
  address: 'narnaul,haryana',
  mainIndex: 2,
  starterIndex: 2
});
/*
Deconstructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//console.log(restaurant.order(2, 0));

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, main);

//Nested  destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/*//destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*//Spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterators:arrays,strings,maps,sets,NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//console.log(`${...str} Jyoti`);

const ingredients = [
  prompt("Let's make pasta! Ingrediant 1?"),
  prompt("Let's make pasta! Ingrediant 2?"),
  prompt("Let's make pasta! Ingrediant 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'jyoti' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*//Rest Pattern
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2..functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroms');
*/

/*
//Short CIRCUITING
//use any data type,return any data type,short circuiting
console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---------And----------');
console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); //Jonas
*/

/*
//For of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  //console.log(item);
  console.log(`${i + 1}:${e}`);
}
*/

/*
//Optional chaining
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//with optional chaining
console.log(restaurant.openingHours.mon?.open);
//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
//Arrays
const users = [{ name: 'Jyoti', email: 'hdkfjgfjdg' }];
console.log(users[0]?.name ?? 'User array empty');
*/

/*
//SETS
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotta',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('Jonas'));
console.log(orderSet.size);

console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

orderSet.delete('Risotto');

console.log(orderSet[2]); //doesn't work
//orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
*/

/*
//MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Narnaul,Haryana');

console.log(rest.set(2, 'Kanota,Jaipur'));
console.log(rest.get('name'));

rest.set(document.querySelector('h1'), 'Heading');

//Maps Iteration
const question = new Map([
  ['question', 'what is best prog lang?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Js'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

//console.log(Object.entries(openingHours));

//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));
*/

/*
//Working with strings part1
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You get lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

*/

/*
//Working with strins part2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name
const passenger = 'jOnAS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$');
console.log(priceUS);

const announcement = 'All passengers come to barding door 23';
console.log(announcement.replace('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of new airbus family');
}
*/
//Working with strings part3
//split and join

console.log('a+very+nice+string'.split('+'));
console.log('Jyoti bansal'.split(' '));

var _JyotiBansal$split = 'Jyoti Bansal'.split(' '),
    _JyotiBansal$split2 = _slicedToArray(_JyotiBansal$split, 2),
    firstNAme = _JyotiBansal$split2[0],
    lastName = _JyotiBansal$split2[1];

var newName = ['Miss.', firstNAme, lastName.toUpperCase()].join(' ');
console.log(newName);

var capitalisedName = function capitalisedName(name) {
  var names = name.split(' ');
  var namesUpper = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var n = _step.value;
      // namesUpper.push(n[0].toUpperCase() + n.slice(1));
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(namesUpper.join(' '));
};

capitalisedName('jessica ann smith devis');
capitalisedName('Jyoti Bansal'); //Padding

var message = 'Go to gate 23';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

var maskCreditCard = function maskCreditCard(number) {
  var str = number + '';
  var last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4347837983749837489));
console.log(maskCreditCard('36867848647637632434')); //Repeat method

var message2 = 'Bad Weather...Tooo Bad ';
console.log(message2.repeat(5));
//# sourceMappingURL=script.dev.js.map
