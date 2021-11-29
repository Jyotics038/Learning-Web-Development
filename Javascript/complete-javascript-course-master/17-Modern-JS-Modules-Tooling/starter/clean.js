'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// budget[0].value=10000; //value is changed
// budget[9]='jonus'; //not going to work

const spendinglimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
//Not going to work becoz it is freezed
// spendinglimits.jay = 200;
// console.log(spendinglimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

//Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  //let lim;
  // if (spendinglimits[user]) {
  //   lim = spendinglimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendinglimits[user] ? spendinglimits[user] : 0;
  //const limit = getLimit(user);

  value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendinglimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendinglimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendinglimits, 200, 'Stuff', 'Jay');

// console.log(newBudget1);
// console.log(newBudget2);

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
//   for (const entry of newBudget3)
//     if (entry.value < -getLimit(limits,entry.user)) entry.flag = 'limit';
// };
const finalBudget = checkExpenses(newBudget3, spendinglimits);
console.log(finalBudget);

// console.log(budget);

//Impure
const logBigExpenses = function (state, biglimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -biglimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, cur) => `${str} ${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);

  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -biglimit ? `${entry.description.slice(-2)} / ` : '';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(finalBudget, 1000);
