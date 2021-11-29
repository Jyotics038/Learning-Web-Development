'use strict'; /////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// Data

var account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  // %
  pin: 1111
};
var account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};
var account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};
var account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};
var accounts = [account1, account2, account3, account4]; // Elements

var labelWelcome = document.querySelector('.welcome');
var labelDate = document.querySelector('.date');
var labelBalance = document.querySelector('.balance__value');
var labelSumIn = document.querySelector('.summary__value--in');
var labelSumOut = document.querySelector('.summary__value--out');
var labelSumInterest = document.querySelector('.summary__value--interest');
var labelTimer = document.querySelector('.timer');
var containerApp = document.querySelector('.app');
var containerMovements = document.querySelector('.movements');
var btnLogin = document.querySelector('.login__btn');
var btnTransfer = document.querySelector('.form__btn--transfer');
var btnLoan = document.querySelector('.form__btn--loan');
var btnClose = document.querySelector('.form__btn--close');
var btnSort = document.querySelector('.btn--sort');
var inputLoginUsername = document.querySelector('.login__input--user');
var inputLoginPin = document.querySelector('.login__input--pin');
var inputTransferTo = document.querySelector('.form__input--to');
var inputTransferAmount = document.querySelector('.form__input--amount');
var inputLoanAmount = document.querySelector('.form__input--loan-amount');
var inputCloseUsername = document.querySelector('.form__input--user');
var inputClosePin = document.querySelector('.form__input--pin');

var displayMovements = function displayMovements(movements) {
  containerMovements.innerHTML = ''; //.textContent=0

  movements.forEach(function (mov, i) {
    var type = mov > 0 ? 'deposit' : 'withdrawal';
    var html = "\n    <div class=\"movements__row\">\n          <div class=\"movements__type \n          movements__type--".concat(type, "\">").concat(i + 1, " ").concat(type, "</div>\n          <div class=\"movements__value\">").concat(mov, "</div>\n        </div>\n    ");
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

var createUsernames = function createUsernames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(function (name) {
      return name[0];
    }).join('');
  }); // const username = user
  //   .toLowerCase()
  //   .split(' ')
  //   .map(function (name) {
  //     return name[0];
  //   })
  //   .join('');
  // return username;
};

createUsernames(accounts);
console.log(accounts);

var calcDisplayBalance = function calcDisplayBalance(movements) {
  var balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = "".concat(balance, " EUR");
};

calcDisplayBalance(account1.movements);

var calcDisplaySummary = function calcDisplaySummary(movements) {
  var incomes = movements.filter(function (mov) {
    return mov > 0;
  }).reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelSumIn.textContent = "".concat(incomes, " EUR");
  var out = movements.filter(function (mov) {
    return mov < 0;
  }).reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelSumOut.textContent = "".concat(Math.abs(out), " EURO");
  var interest = movements.filter(function (mov) {
    return mov > 0;
  }).map(function (deposit) {
    return deposit * 1.2 / 100;
  }).filter(function (_int, i, arr) {
    console.log(arr);
    return _int >= 1;
  }).reduce(function (acc, _int2) {
    return acc + _int2;
  }, 0);
  labelSumInterest.textContent = "".concat(interest, " EURO");
};

calcDisplaySummary(account1.movements); //Event handler

var currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(function (acc) {
    return acc.username === inputLoginUsername.value;
  });
  console.log(currentAccount);

  if (currentAccount.pin === Number(inputLoginPin.value)) {
    console.log('Login');
  }
}); //console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////

/*
//SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); //c,d,e
console.log(arr.slice(2, 4)); //c,d
console.log(arr.slice(-2)); //d,e
console.log(arr.slice(-1)); //e
console.log(arr.slice(1, -2)); // b,c
console.log(arr.slice()); //copy of array
console.log([...arr]); //copr of array

//SPLICE METHOD-delete extracted elements
console.log(arr.splice(2)); //c,d,e
//arr.splice(-1); //e
console.log(arr); //a,b
arr.splice(1, 2); //b,c will be deleted

//REVERSE
let arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
//chnaged oeiginal array so muted method

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

//JOIN
console.log(letters.join(' - '));
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`mov ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`mov ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});
//0:function(200)
//1:function(450)-------------
*/

/*
//For each with maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

/*
//Map method
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);
*/

/*
//Filter Mathod
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);
*/

/*
//Reduce Method
//accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
}, 0);
console.log(balance);

const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance);
*/

/*
//Maximum value of movements array
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

/*const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

/*
//find method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
//# sourceMappingURL=script.dev.js.map
