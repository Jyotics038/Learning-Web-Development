"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.qt = exports.totalPrice = exports.addToCart = void 0;
//Exporting module
console.log('Exporting module');
var shippingCost = 10;
var cart = [];

var addToCart = function addToCart(product, quantity) {
  cart.push(product, quantity);
  console.log("".concat(quantity, " ").concat(product, " added to cart"));
};

exports.addToCart = addToCart;
var totalPrice = 237;
exports.totalPrice = totalPrice;
var totalQuantity = 23;
exports.qt = totalQuantity;

//exports defaults
function _default(product, quantity) {
  cart.push(product, quantity);
  console.log("".concat(quantity, " ").concat(product, " added to cart"));
}
//# sourceMappingURL=shoppingCart.dev.js.map
