/*
//Importing module
//import { addToCart, totalPrice as price, qt } from './shoppingCart';
// addToCart('bread', 5);
// console.log(price, qt);


//console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

//import default export
import add from './shoppingCart.js';
add('pizza', 2);
*/

import shoppingCart from './shoppingCart';

/*
//Module Pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  //return values are public and rest are private
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
//console.log(ShoppingCart2.shippingCost); //undefined
*/

// //Common js Modules
// //Export
// export.addTocart=function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   //Import
//   const {addTocart} =require('./shoppingCart.js');

//NPM----------------------------

//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
//import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

//only parcel understands
if (module.hot) {
  module.hot.accept();
}

//Configuring babel and Polyfilling
class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonus = new Person('Jyoti');

console.log('Jyoti' ?? null);

console.log(cart.find(el => el.quantity >= 2));

//import 'core-js/stable';
