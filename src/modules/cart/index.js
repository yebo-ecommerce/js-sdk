// Dependencies
import {buildRequest} from './../../core/api'

/**
 * Create / Validates carts
 * @param {String} token Token Order
 * @param {String} number Number (reference) of the Order
 * @param {Boolean} last If an order is not found, search for the last not complete
 * @param {Boolean} create If you find an Order (even the last incomplete) initialize a new
 * @param {String} userToken User token to validate the Order
 * @return
 */
export const createCart = function (token, number, last, create, userToken) {
  // Build the request.
  return buildRequest('POST', `/cart/${number}`, { token: token , last: last, create: create, user_token: userToken });

  // // Return the execution
  // return executeRequest(req);
}

/**
 * Return all items from the cart.
 * @param {String} token Token Order
 * @param {String} number Number (reference) of the Order
 * @param {Boolean} last If an order is not found, search for the last not complete
 * @param {Boolean} create If you find an Order (even the last incomplete) initialize a new
 * @param {String} userToken User token to validate the Order
 * @return
 */
export const getCartItems = function (token, number, last, create, userToken) {
  // Build the request.
  return buildRequest('GET', `/cart_items/${number}`, { token: token , last: last, create: create, user_token: userToken });

  // Return the execution
  // return executeRequest(req);
}

/**
 * Remove all items from the cart
 * @param {String} token Token Order
 * @param {String} number Number (reference) of the Order
 * @param {Boolean} last If an order is not found, search for the last not complete
 * @param {Boolean} create If you find an Order (even the last incomplete) initialize a new
 * @param {String} userToken User token to validate the Order
 * @return
 */
export const emptyCartItems = function (token, number, last, create, userToken) {
  // Build the request.
  return buildRequest('POST', `/cart_items/${number}`, { token: token , last: last, create: create, user_token: userToken });

  // Return the execution
  // return executeRequest(req);
}

/**
 * Returns all items cart
 * @param {String} token Token Order
 * @param {String} number Number (reference) of the Order
 * @param {Boolean} last If an order is not found, search for the last not complete
 * @param {Boolean} create If you find an Order (even the last incomplete) initialize a new
 * @param {String} userToken User token to validate the Order
 * @param {Number} variant Variant ID to be added
 * @param {Number} qty Quantity of products to be added
 * @return
 */
export const addCartItems = function (token, number, last, create, userToken, variant, qty) {
  // Build the request.
  return buildRequest('POST', `/cart_items/${number}`, { token: token , last: last, create: create, user_token: userToken, variant: variant, qty: qty});

  // Return the execution
  // return executeRequest(req);
}

/**
 * Returns all items cart
 * @param {String} token Token Order
 * @param {String} number Number (reference) of the Order
 * @param {Boolean} last If an order is not found, search for the last not complete
 * @param {Boolean} create If you find an Order (even the last incomplete) initialize a new
 * @param {String} userToken User token to validate the Order
 * @param {Integer} variant Variant ID to be added
 * @param {Integer} qty Quantity of products to be added
 * @return
 */
export const removeCartItems = function (token, number, last, create, userToken, variant, qty) {
  // Build the request.
  return buildRequest('POST', `/cart_items/${number}`, { token: token , last: last, create: create, user_token: userToken, variant: variant, qty: qty});

  // Return the execution
  // return executeRequest(req);
}

/**
 * Returns all items cart
 * @param {String} token Token Order
 * @param {String} number Number (reference) of the Order
 * @param {Boolean} last If an order is not found, search for the last not complete
 * @param {Boolean} create If you find an Order (even the last incomplete) initialize a new
 * @param {String} userToken User token to validate the Order
 * @param {Integer} lineItem Item ID cart
 * @param {Integer} qty Quantity of products to be added
 * @return
 */
export const updateCartItems = function (token, number, last, create, userToken, lineItem, qty) {
  // Build the request.
  return buildRequest('POST', `/cart_items/${number}`, { token: token , last: last, create: create, user_token: userToken, lineItem: lineItem, qty: qty});

  // Return the execution
  // return executeRequest(req);
}