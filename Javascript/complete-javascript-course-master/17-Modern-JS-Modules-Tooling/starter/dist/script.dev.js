"use strict";

var _shoppingCart = _interopRequireDefault(require("./shoppingCart"));

var _lodashEs = _interopRequireDefault(require("lodash-es"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
//import cloneDeep from 'lodash';
var state = {
  cart: [{
    product: 'bread',
    quantity: 5
  }, {
    product: 'pizza',
    quantity: 5
  }],
  user: {
    loggedIn: true
  }
};
var stateClone = Object.assign({}, state);
var stateDeepClone = (0, _lodashEs["default"])(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone); //only parcel understands

if (module.hot) {
  module.hot.accept();
}
//# sourceMappingURL=script.dev.js.map
