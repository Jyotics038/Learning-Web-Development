"use strict";

var budget = [{
  value: 250,
  description: 'Sold old TV 📺',
  user: 'jonas'
}, {
  value: -45,
  description: 'Groceries 🥑',
  user: 'jonas'
}, {
  value: 3500,
  description: 'Monthly salary 👩‍💻',
  user: 'jonas'
}, {
  value: 300,
  description: 'Freelancing 👩‍💻',
  user: 'jonas'
}, {
  value: -1100,
  description: 'New iPhone 📱',
  user: 'jonas'
}, {
  value: -20,
  description: 'Candy 🍭',
  user: 'matilda'
}, {
  value: -125,
  description: 'Toys 🚂',
  user: 'matilda'
}, {
  value: -1800,
  description: 'New Laptop 💻',
  user: 'jonas'
}];
var spendinglimits = {
  jonas: 1500,
  matilda: 100
};

var addExpense = function addExpense(value, description) {
  var user = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'jonas';
  // if (!user) user = 'jonas';
  user = user.toLowerCase(); //let lim;
  // if (spendinglimits[user]) {
  //   lim = spendinglimits[user];
  // } else {
  //   lim = 0;
  // }

  var limit = spendinglimits[user] ? spendinglimits[user] : 0;

  if (value <= limit) {
    budget.push({
      value: -value,
      description: description,
      user: user
    });
  }
};

addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

var check = function check() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = budget[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;
      var lim = void 0;

      if (spendinglimits[el.user]) {
        lim = spendinglimits[el.user];
      } else {
        lim = 0;
      }

      if (el.value < -lim) {
        el.flag = 'limit';
      }
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
};

check();
console.log(budget);

var bigExpenses = function bigExpenses(limit) {
  var output = '';
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = budget[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var el = _step2.value;

      if (el.value <= -limit) {
        output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  output = output.slice(0, -2); // Remove last '/ '

  console.log(output);
};

bigExpenses(1000);
//# sourceMappingURL=clean.dev.js.map
