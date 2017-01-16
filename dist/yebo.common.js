/**
 * Yebo SDK v1.0.0-beta
 * This library is the bridge between the Yebo E-commerce API
 * and JavaScript applications
 *
 * @author <Yebo E-commerce>
 * @contributors <Gabriel Corado, Gabriela Caldeira Diogo>
 * @copyright (2016-2017) Yebo E-commerce
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios/dist/axios'));

/**
 * This module is the lowest level between the connection
 * with Yebo API
 *
 * @TODO Better support to jsonp
 */

// Dependencies
/**
 * General purpose fetch, could be used by anyone
 *
 * @param {String} method The HTTP method (mainly 'GET' and 'POST')
 * @param {url} url The URL that will be fetched
 * @param {Object} data Data that will be sent to the URL
 * @param {String} contentType The type of data
 * @param {Object} headers The HTTP request headers
 * @return {Promise} A promise
 */
var fetch = function fetch(method, url, data, contentType, headers) {
  // Create the request
  return axios({
    url: url,
    method: method,
    contentType: contentType,
    crossOrigin: true,
    headers: headers,
    data: data
  }).then(function (req) {
    return req.data;
  });
};

/**
 * This file will manage all the configurations used by
 * the hole SDK.
 */

/**
 * Configurations
 * Where all the configurations will live
 */
var config = {
  apiURL: 'yebo-api.com.br/api',
  version: 'v2',
  protocol: 'https',
  store: undefined,
  token: undefined,
  authToken: undefined,
  expireAt: undefined
};

/**
 * Set the configuration
 * @param {String} name Configuration name
 * @param {Any} value A value that will be stored
 * @param {Boolean} replace If the configuration is already setted
 *                          if will be replace with the new value?
 * @return {Boolean} Success or Not
 */
var set = function set(name, value) {
  var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // Check if the value exists and if it will be replaced
  if (exists(name) && !replace) return false;

  // Set the value
  config[name] = value;

  // Return success
  return true;
};

/**
 * Unset a configuration
 * @param {String} name Configuration name
 * @return {Boolean} Success or Not
 */
var unset = function unset(name) {
  // Check if the value exists
  if (!exists(name)) return false;

  // Delete from the object
  delete config[name];

  // Return success
  return true;
};

/**
 * Get the value of a configuration
 * @param {String} name The configuration name
 * @param {Any} value If there is no configuration return
 *                    the predefined value
 * @return {Any} The Configuration value or the default value
 */
var get = function get(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  // Check if the config exists
  if (!exists(name)) return value;

  // Return the value itself
  return config[name];
};

/**
 * Check if the configuration is setted
 * @param {String} name The configuration name
 * @param {Boolean} Exists or not
 */
var exists = function exists(name) {
  // Check if the config object has the property
  return config.hasOwnProperty(name);
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

/**
 *
 *
 * @TODO Better support to the others HTTP verbs
 */

// Dependencies
// Configurations
/**
 * Generate the options to make a request
 *
 * @param {String} method The HTTP method (mainly GET or POST)
 * @param {String} path The path that will be used as base
 * @param {Object} data Data passed in the request
 * @param {String} auth The API token (previsouly queried)
 * @param {String} name Store name
 * @param {String} version The API version
 * @param {String} token The API token
 * @return {Object} Base configuration for the request
 */
var buildRequest = function buildRequest(method, path, data) {
  var auth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : get('auth');
  var store = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : get('store');
  var version = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : get('version');
  var token = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : get('token');

  // Query String
  var qs = '';

  // Generate the QueryString if its necessary
  if (method === 'GET' && data !== undefined) qs = buildParams(data);

  // Request Headers
  var headers = {};

  // Check if a token is passed to be used
  if (token !== undefined) headers['Yebo-Token'] = token;

  // Return the request options
  return {
    name: path.split('/').join('-').substring(1),
    method: method,
    url: get('protocol') + '://' + store + '.' + get('apiURL') + '/' + version + path + qs,
    data: method === 'GET' ? {} : data,
    headers: headers,
    content_type: method === 'GET' ? 'application/x-www-form-urlencoded' : 'application/json'
  };
};

/**
 * Build the request that will get the authentication token
 *
 * @param {String} name Store name
 * @param {String} version The API version
 * @param {String} token The API token
 * @return {Object} Request that will return the authentication token
 */
var buildAuthentication = function buildAuthentication(name, version, token) {
  return buildRequest('GET', '/', {}, undefined, name, version, token);
};

/**
 * Execute the Authentication
 *
 * @param {String} name Store name
 * @param {String} version The API version
 * @param {String} token The API token
 * @return {Promise} Result of the authentication
 */
var authenticate = function authenticate() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : get('store');
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : get('version');
  var token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : get('token');

  return executeRequest(buildAuthentication(name, version, token));
};

/**
 * Based on an array generate
 *
 * @param {Object/Array} value Values that will be mapped to QueryString
 * @return {String} QueryString itself
 */
var buildParams = function buildParams(value) {
  return _recBuildParams('', value, true, '?').slice(0, -1);
};

/**
 * Execute the generated requestç
 *
 * @param {Object} req Generated request
 * @return {Promise} The HTTP request Promise
 */
var executeRequest = function executeRequest(req) {
  var resolver = function resolver(res, rej) {
    // Check if the authentication token is passed
    req.headers['Authorization'] = 'Bearer ' + get('authToken');

    //
    fetch(req.method, req.url, req.data, req.contentType, req.headers).then(res).catch(rej);
  };
  return new Promise(function (resolve, reject) {
    //
    if (req.name !== '' && get('expireAt') > Date.now()) {
      // authenticate
      authenticate().then(function (res) {
        // res.token
        set('authToken', res.token);
        // res.expire_at
        set('expireAt', res.expire_at);
        // resolver reolve and reject
        resolver(resolve, reject);
      });
    } else {
      resolver(resolve, reject);
    }
  });
};

/**
 * Generate (recursively) the params
 *
 * @param {String} prefix The param prefix
 * @param {Object/Array} value Values that will be mapped to params
 * @param {Boolean} top Check if the value is at top level
 * @param {String} acc Accumulate the result
 * @return {String} The full QueryString (just remember that a last '&' will not be removed)
 */
var _recBuildParams = function _recBuildParams(prefix, value, top, acc) {
  // Different treatment to array sources
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    // Each the value
    for (var i in value) {
      // Check if its a number
      var nan = isNaN(i);

      // Build the recursion again, setting the accumulator
      acc = _recBuildParams('' + (nan && top ? i : prefix) + (nan && !top ? '[' + i + ']' : nan ? '' : '[]'), value[i], false, acc);
    }
  } else {
    // Aggregate to the accumulator
    // acc += `${encodeURIComponent(prefix)}=${encodeURIComponent(value)}&`;
    acc += prefix + '=' + encodeURIComponent(value) + '&';
  }

  // Return the accumlator
  return acc;
};

// Dependencies
/**
 * Create/Validate carts
 * Same params as `createCart`
 * @return {Object} Request
 */
var buildCreateCart = function buildCreateCart(token, number, last, create, userToken) {
  // Build the request.
  return buildRequest('POST', '/cart', { number: number, token: token, last: last, create: create, user_token: userToken });
};

/**
 * Create / Validates carts
 * @param {String} token Token Order
 * @param {String} number Number (reference) of the Order
 * @param {Boolean} last If an order is not found, search for the last not complete
 * @param {Boolean} create If you find an Order (even the last incomplete) initialize a new
 * @param {String} userToken User token to validate the Order
 * @return
 */
var createCart = function createCart(token, number, last, create, userToken) {
  // Build the request.
  var req = buildCreateCart(token, number, last, create, userToken);

  // // Return the execution
  return executeRequest(req);
};

/**
 * Return all items from the cart.
 * Same params as `getCartItems`
 * @return {Object} Request
 */
var buildGetCartItems = function buildGetCartItems(token, number, last, create, userToken) {
  // Build the request.
  return buildRequest('GET', '/cart/items', { number: number, token: token, last: last, create: create, user_token: userToken });
};

/**
 * Return all items from the cart.
 * @param {String} token Token Order
 * @param {String} number Number (reference) of the Order
 * @param {Boolean} last If an order is not found, search for the last not complete
 * @param {Boolean} create If you find an Order (even the last incomplete) initialize a new
 * @param {String} userToken User token to validate the Order
 * @return
 */
var getCartItems = function getCartItems(token, number, last, create, userToken) {
  // Build the request.
  var req = buildGetCartItems(token, number, last, create, userToken);

  // Return the execution
  return executeRequest(req);
};

/**
 * Remove all items from the cart
 * Same params as `addCartItems`
 * @return {Object} Request
 */
var buildEmptyCartItems = function buildEmptyCartItems(token, number, last, create, userToken) {
  // Build the request.
  return buildRequest('POST', '/cart/items/empty', { number: number, token: token, last: last, create: create, user_token: userToken });
};

/**
 * Remove all items from the cart
 * @param {String} token Token Order
 * @param {String} number Number (reference) of the Order
 * @param {Boolean} last If an order is not found, search for the last not complete
 * @param {Boolean} create If you find an Order (even the last incomplete) initialize a new
 * @param {String} userToken User token to validate the Order
 * @return
 */
var emptyCartItems = function emptyCartItems(token, number, last, create, userToken) {
  // Build the request.
  var req = buildEmptyCartItems(token, number, last, create, userToken);

  // Return the execution
  return executeRequest(req);
};

/**
 * Returns all items cart
 * Same params as `addCartItems`
 * @return {Object} Request
 */
var buildAddCartItems = function buildAddCartItems(token, number, last, create, userToken, variant, qty) {
  // Build the request.
  return buildRequest('POST', '/cart/items/add', { number: number, token: token, last: last, create: create, user_token: userToken, variant: variant, qty: qty });
};

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
var addCartItems = function addCartItems(token, number, last, create, userToken, variant, qty) {
  // Build the request.
  var req = buildAddCartItems(token, number, last, create, userToken, variant, qty);

  // Return the execution
  return executeRequest(req);
};

/**
 * Returns all items cart
 * Same params as `removeCartItems`
 * @return {Object} Request
 */
var buildRemoveCartItems = function buildRemoveCartItems(token, number, last, create, userToken, variant, qty) {
  // Build the request.
  return buildRequest('POST', '/cart/items/remove', { token: token, last: last, create: create, user_token: userToken, variant: variant, qty: qty });
};

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
var removeCartItems = function removeCartItems(token, number, last, create, userToken, variant, qty) {
  // Build the request.
  var req = buildRemoveCartItems(token, number, last, create, userToken, variant, qty);

  // Return the execution
  return executeRequest(req);
};

/**
 * Update cart items
 * Returns all items cart
 * Same params as `addCartItems`
 * @return {Object} Request
 */
var buildUpdateCartItems = function buildUpdateCartItems(token, number, last, create, userToken, lineItem, qty) {
  // Build the request.
  return buildRequest('POST', '/cart/items/update', { token: token, last: last, create: create, user_token: userToken, lineItem: lineItem, qty: qty });
};

/**
 * Update cart items
 * @param {String} token Token Order
 * @param {String} number Number (reference) of the Order
 * @param {Boolean} last If an order is not found, search for the last not complete
 * @param {Boolean} create If you find an Order (even the last incomplete) initialize a new
 * @param {String} userToken User token to validate the Order
 * @param {Integer} lineItem Item ID cart
 * @param {Integer} qty Quantity of products to be added
 * @return
 */
var updateCartItems = function updateCartItems(token, number, last, create, userToken, lineItem, qty) {
  // Build the request.
  var req = buildUpdateCartItems(token, number, last, create, userToken, lineItem, qty);

  // Return the execution
  return executeRequest(req);
};

// Dependencies
/**
 * Returns the address
 * Same params as `getOrderAddress`
 * @return {Object} Request
 */
var buildGetOrderAddress = function buildGetOrderAddress(number, userToken, kind) {
  // Build the request.
  return buildRequest('GET', '/checkout/address/' + number + '/' + kind, { user_token: userToken });
};

/**
 * Returns the address
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
var getOrderAddress = function getOrderAddress(number, userToken, kind) {
  // Build the request.
  var req = buildGetOrderAddress(number, userToken, kind);

  // Return the execution
  return executeRequest(req);
};

/**
 * Create the address of the Order
 * Same params as `createOrderAddress`
 * @return {Object} Request
 */
var buildCreateOrderAddress = function buildCreateOrderAddress(number, userToken, kind) {
  // Build the request.
  return buildRequest('POST', '/checkout/address/' + number + '/' + kind, { user_token: userToken });
};

/**
 * Create the address of the Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
var createOrderAddress = function createOrderAddress(number, userToken, kind) {
  // Build the request.
  var req = buildCreateOrderAddress(number, userToken, kind);

  // Return the execution
  return executeRequest(req);
};

/**
 * Remove the address of the Order
 * Same params as `removeOrderAddress`
 * @return {Object} Request
 */
var buildRemoveOrderAddress = function buildRemoveOrderAddress(number, userToken, kind) {
  // Build the request.
  return buildRequest('POST', '/checkout/address/' + number + '/' + kind, { user_token: userToken });
};

/**
 * Remove the address of the Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
var removeOrderAddress = function removeOrderAddress(number, userToken, kind) {
  // Build the request.
  var req = buildRemoveAddress(number, userToken, kind);

  // Return the execution
  return executeRequest(req);
};

/**
 * Update the address of the Order
 * Same params as `updateOrderAddress`
 * @return {Object} Request
 */
var buildUpdateOrderAddress = function buildUpdateOrderAddress(number, userToken, kind) {
  // Build the request.
  return buildRequest('POST', '/checkout/address/' + number + '/' + kind, { user_token: userToken });
};

/**
 * Update the address of the Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
var updateOrderAddress = function updateOrderAddress(number, userToken, kind) {
  // Build the request.
  var req = buildUpdateOrderAddress(number, userToken, kind);

  // Return the execution
  return executeRequest(req);
};

/**
 * Returns / estimated delivery methods for Order
 * Same params as `getOrderShipments`
 * @return {Object} Request
 */
var buildGetOrderShipments = function buildGetOrderShipments(number, userToken, calculate) {
  // Build the request.
  return buildRequest('POST', '/checkout/shipments/' + number + '/' + kind, { user_token: userToken, calculate: calculate });
};

/**
 * Returns / estimated delivery methods for Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Boolean} calculate Deliveries will be recalculated
 * @return
 */
var getOrderShipments = function getOrderShipments(number, userToken, calculate) {
  // Build the request.
  var req = buildGetOrderShipments(number, userToken, calculate);

  // Return the execution
  return executeRequest(req);
};

/**
 * Defines a delivery method for a package
 * Same params as `setOrderShipment`
 * @return {Object} Request
 */
var buildSetOrderShipment = function buildSetOrderShipment(number, userToken, pkg, rate) {
  // Build the request.
  return buildRequest('POST', '/checkout/shipments/' + number + '/' + kind, { user_token: userToken, rate: rate, package: pkg });
};

/**
 * Defines a delivery method for a package
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Integer} pkg ID Package
 * @param {Integer} rate delivery ID to the package
 * @return
 */
var setOrderShipment = function setOrderShipment(number, userToken, pkg, rate) {
  // Build the request.
  var req = buildSetOrderShipment(number, userToken, pkg, rate);

  // Return the execution
  return executeRequest(req);
};

/**
 * Returns payment methods for Order
 * Same params as `getOrderPayments`
 * @return {Object} Request
 */
var buildGetOrderPayments = function buildGetOrderPayments(number, userToken, subscription) {
  // Build the request.
  return buildRequest('GET', '/checkout/' + number + '/payments', { user_token: userToken, subscription: subscription });
};

/**
 * Returns payment methods for Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Boolean} subscription Return type recurrence payment methods
 * @return
 */
var getOrderPayments = function getOrderPayments(number, userToken, subscription) {
  // Build the request.
  var req = buildGetOrderPayments(number, userToken, subscription);

  // Return the execution
  return executeRequest(req);
};

/**
 * Making the payment
 * Same params as `orderPay`
 * @return {Object} Request
 */
var buildOrderPay = function buildOrderPay(number, userToken, methodId, source) {
  // Build the request.
  return buildRequest('POST', '/checkout/' + number + '/payments', { user_token: userToken, method_id: methodId, source: source });
};

/**
 * Making the payment
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Integer} methodId ID payment method
 * @param {String} source Information used for payment
 * @return
 */
var orderPay = function orderPay(number, userToken, methodId, source) {
  // Build the request.
  var req = buildOrderPay(number, userToken, methodId, source);

  // Return the execution
  return executeRequest(req);
};

// Dependencies
/**
 * Returns all a user Orders
 * Same params as `getOrders`
 * @return {Object} Request
 */
var buildGetOrders = function buildGetOrders(token, complete, incomplete) {
  var page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var perPage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 25;

  //
  if (complete === true && incomplete === true) throw 'A order could not be complete and incomplete at same time.';

  // Build the request.
  return buildRequest('GET', '/orders', { token: token, complete: complete, incomplete: incomplete, page: page, per_page: perPage });
};

/**
 * Returns all a user Orders
 * @param {String} token Token user, owner of Orders
 * @param {Boolean} complete Returns only complete Orders
 * @param {Boolean} incomplete Returns only incomplete Orders
 * @return
 */
var getOrders = function getOrders(token, complete, incomplete) {
  var page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var perPage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 25;

  // Build the request.
  var req = buildGetOrder(token, complete, incomplete, page, perPage);

  // Return the execution
  return executeRequest(req);
};

/**
 * Returns a user Order
 * Same params as `getOrderNumber`
 * @return {Object} Request
 */
var buildGetOrderNumber = function buildGetOrderNumber(token, number) {
  var complete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var incomplete = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  //
  if (complete === true && incomplete === true) throw 'A order could not be complete and incomplete at same time.';

  // Build the request.
  return buildRequest('GET', '/orders/' + number, { token: token, complete: complete, incomplete: incomplete });
};

/**
 * Returns a user Order
 * @param {String} token Token user, owner of Orders
 * @param {String} number Order's number
 * @param {Boolean} complete Returns only if the Order is complete
 * @param {Boolean} incomplete Returns only if the Order is incomplete
 * @return
 */
var getOrderNumber = function getOrderNumber(token, number) {
  var complete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var incomplete = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // Build the request.
  var req = buildGetOrderNumber(token, number, complete, incomplete);

  // Return the execution
  return executeRequest(req);
};

// Dependencies
/**
 * Build Request Get Products
 * @param {Object} search Parameters used in the products search
 * @return {Object} request
 */
var buildGetProducts = function buildGetProducts(search) {
  //
  if (search.build instanceof Function) {
    // Build it
    search = search.build();
  }

  // Build Get Products
  return buildRequest('GET', '/products', search);
};

/**
 * List of Products
 * @param {Object} search Parameters used in the products search
 * @return
 */
var getProducts = function getProducts(search) {
  // Build the request.
  var req = buildGetProducts(search);

  // Return the execution
  return executeRequest(req);
};

/**
 * Build Request Get Products Aggs
 * @param {String} root Category base
 * @param {Array[Object]} ranges Price Range
 * @param {Object} search Parameters used in the products search
 * @return {Object} request
 */
var buildGetProductsAggs = function buildGetProductsAggs(root, ranges, search) {
  // Build the request.
  return buildRequest('GET', '/products/aggs', { root: root, ranges: ranges, search: search });
};

/**
 * Aggregations
 * @param {String} root Category base
 * @param {Array[Object]} ranges Price Range
 * @param {Object} search Parameters used in the products search
 * @return
 */
var getProductsAggs = function getProductsAggs(root, ranges, search) {
  // Build the request.
  var req = buildGetProductsAggs(root, ranges, search);

  // Return the execution
  return executeRequest(req);
};

/**
 * Build Get Products Id
 * @param {Integer} id Product ID
 * @return
 */
var buildGetProductsId = function buildGetProductsId(id) {
  // Build the request.
  return buildRequest('GET', '/product/' + id, {});
};

/**
 * Information from a single product
 * @param {Integer} id Product ID
 * @return
 */
var getProductsId = function getProductsId(id) {
  // Build the request.
  var req = buildGetProductsId(id);

  // Return the execution
  return executeRequest(req);
};

/**
 * Create type search
 */
var Search = function Search() {
  // Query will live here
  this.query = {};
};

/**
 * Will search page
 * @param {Number} page Page number of the product listing
 * @return {Search} Current Search
 */
Search.prototype.page = function (page) {
  // Set to query the number search
  this.query.page = page;

  //
  return this;
};

/**
 * Will search products by name
 * @param {String} name Search by product name
 * @return {Search} Current Search
 */
Search.prototype.byName = function (name) {
  // Set to query the name search
  this.query.name = name;

  //
  return this;
};

/**
 * Will search perPage
 * @param {Number} Quantity of products per page
 * @return {Search} Current Search
 */
Search.prototype.perPage = function (perPage) {
  // Set to query the number search
  this.query.per_page = perPage;

  //
  return this;
};
/**
 * Create Search
 * @return {Search} Current Search
 */
var createSearch = function createSearch() {
  // Initial state
  return new Search();
};

/**
 * Will search for Filters
 * @param {Array[Object]} and Filters that relates 'and'
 * @return {Search} Current Search
 */
Search.prototype.and = function () {
  var _query$and;

  //
  if (this.query.and === undefined) this.query.and = [];

  // Set to query the filters search

  for (var _len = arguments.length, filters = Array(_len), _key = 0; _key < _len; _key++) {
    filters[_key] = arguments[_key];
  }

  if (filters[0] instanceof Array) this.query.and.push(filters);else (_query$and = this.query.and).push.apply(_query$and, filters);

  //
  return this;
};

/**
 * Build the search
 * @return {Object} The internal query
 */
Search.prototype.build = function () {
  // Result
  var res = {};

  //
  if (this.query.page !== undefined) res.page = this.query.page;

  //
  if (this.query.name !== undefined) res.name = this.query.name;

  //
  if (this.query.perPage !== undefined) res.per_page = this.query.perPage;

  //
  if (this.query.and !== undefined || this.query.or !== undefined) res.filters = {};

  //
  if (this.query.and !== undefined) res.filters.and = this.query.and;

  //
  if (this.query.or !== undefined) res.filters.or = this.query.or;

  // Returning
  return res;
};

//
// getProdutcs(search)
// { } => Inicial
// { name } => searchByName
// { name, order } => setOrder
// { name, order, page } => setPage
//
// // Create Rules
// let rules = [
//   createFilter('taxons', 'permalink', ['merceria/peixes', 'marcas/...'], 'fixed')
// ]
// // name: taxons(Categorias) - filter(Filtros) - price(Preço)
// // type: fixed(Fixo) - range(Intervalo - só para preço)
//
// // Create search
// let busca = createSearch()
// busca.byName('manteiga')
//      .orderBy('name', 'asc')
//      .and(rules)
//      .or(fltrs)
//      .page(2)

/**
 * Create Filter for Products
 * @param {String} name The name of filter
 * @param {String} field The field of filter ( )
 * @param {String} type The type of filter (has two type, range and fixed)
 * @param {Array[String/Object]} values The values of filter
 * @return {Object} The API formatted filter
 */
var createFilter = function createFilter(name, field, type, values) {
  return {
    name: name,
    field: field,
    type: type,
    values: values
  };
};

/**
 * Shortcut to directly create a `taxons` filter
 * @param {Array[String/Number] values This could the taxons `permalinks` or `ids`
 * @return {Object} The API formatted filter
 */
var createTaxonsFilter = function createTaxonsFilter(values) {
  var permalink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  // Field of the filter
  var field = void 0;

  // Check the type of values
  if (isNaN(values[0])) {
    field = 'permalink';
  } else {
    field = 'id';
  }

  // Return the creation
  return createFilter('taxons', field, 'fixed', values);
};

// Dependencies
/**
 * Method responsible for seeking taxons
 * Same params as `getTaxons`
 * @return {Object} Request
 */
var buildGetTaxons = function buildGetTaxons(ids, taxons, taxonomyId) {
  var page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var perPage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 25;

  // Build the request.
  return buildRequest('GET', '/taxons', { ids: ids, taxons: taxons, taxonomy_id: taxonomyId, page: page, per_page: perPage });
};

/**
 * Method responsible for seeking taxons
 * @param {Array[Number]} ids
 * @param {String} ranges A list of slugs
 * @param {Integer} page Current search page
 * @param {Integer} perPage Number of taxons per page
 * @param {Integer} taxonomyId Just back taxons that belong to specified taxonomy
 * @return
 */
var getTaxons = function getTaxons(ids, taxons, taxonomyId) {
  var page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var perPage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 25;

  // Build the request.
  var req = buildGetTaxons(ids, taxons, taxonomyId, page, perPage);

  // Return the execution
  return executeRequest(req);
};

/**
 * Returns information from a single taxon
 * Same params as `getTaxonId`
 * @return {Object} Request
 */
var buildGetTaxonId = function buildGetTaxonId() {
  // Build the request.
  return buildRequest('GET', '/taxon/' + id, {});
};

/**
 * Returns information from a single taxon
 * @return
 */
var getTaxonId = function getTaxonId() {
  // Build the request.
  var req = buildGetTaxonId();

  // Return the execution
  return executeRequest(req);
};

/**
 * Method responsible for seeking taxonomies
 * Same params as `getTaxonomies`
 * @return {Object} Request
 */
var buildGetTaxonomies = function buildGetTaxonomies() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;

  // Build the request.
  return buildRequest('GET', '/taxonomies', { page: page, per_page: perPage });
};

/**
 * Method responsible for seeking taxonomies
 * @param {Integer} page Current search page
 * @param {Integer} perPage Taxons amount per page
 * @return
 */
var getTaxonomies = function getTaxonomies() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;

  // Build the request.
  var req = buildGetTaxonomies(page, perPage);

  // Return the execution
  return executeRequest(req);
};

/**
 * Returns information from a single taxonomy
 * Same params as `getTaxonomyId`
 * @return {Object} Request
 */
var buildGetTaxonomyId = function buildGetTaxonomyId() {
  // Build the request.
  return buildRequest('GET', '/taxonomy/' + id, {});
};

/**
 * Returns information from a single taxonomy
 * @return
 */
var getTaxonomyId = function getTaxonomyId() {
  // Build the request.
  var req = buildGetTaxonomyId();

  // Return the execution
  return executeRequest(req);
};

// Dependencies
/**
 * User Registration
 * Same params as `registerUser`
 * @return {Object} Request
 */
var buildRegisterUser = function buildRegisterUser(email, password, passwordConfirmation) {
  // Build the request.
  return buildRequest('POST', '/users', { user: { email: email, password: password, password_confirmation: passwordConfirmation } });
};

/**
 * User Registration
 * @param {String} email User Email
 * @param {String} password User Password
 * @param {String} passwordConfirmation User Password confirmation
 * @return
 */
var registerUser = function registerUser(email, password, passwordConfirmation) {
  // Build the request.
  var req = buildRegisterUser(email, password, passwordConfirmation);

  // Return the execution
  return executeRequest(req);
};

/**
 * User Login
 * Same params as `loginUser`
 * @return {Object} Request
 */
var buildLoginUser = function buildLoginUser(email, password) {
  // Build the request.
  return buildRequest('POST', '/users/login', { user: email, password: password });
};

/**
 * User Login
 * @param {String} email User Email
 * @param {String} password User Password
 * @return
 */
var loginUser = function loginUser(email, password) {
  // Build the request.
  var req = buildLoginUser(email, password);

  // Return the execution
  return executeRequest(req);
};

/**
 * Calls password change
 * Same params as `requireResetUser`
 * @return {Object} Request
 */
var buildRequireResetUser = function buildRequireResetUser(email, storeUrl) {
  // Build the request.
  return buildRequest('POST', '/users/reset', { email: email, store_url: storeUrl });
};

/**
 * Calls password change
 * @param {String} email User Email
 * @param {String} storeUrl The URL of recovery that will be sent by email
 * @return
 */
var requireResetUser = function requireResetUser(email, storeUrl) {
  // Build the request.
  var req = buildRequireResetUser(email, storeUrl);

  // Return the execution
  return executeRequest(req);
};

/**
 * Change User Password
 * Same params as `userReset`
 * @return {Object} Request
 */
var buildResetUser = function buildResetUser(token, email, password, passwordConfirmation) {
  // Build the request.
  return buildRequest('POST', '/users/reset/reset', { token: token, email: email, password: password, password_confirmation: passwordConfirmation });
};

/**
 * Change User Password
 * @param {String} token Token that was sent by email
 * @param {String} email User Email
 * @param {String} password User Password
 * @param {String} passwordConfirmation User Password confirmation
 * @return
 */
var resetUser = function resetUser(token, email, password, passwordConfirmation) {
  // Build the request.
  var req = buildResetUser(token, email, password, passwordConfirmation);

  // Return the execution
  return executeRequest(req);
};

// SDK version
var version = '1.0.0-beta';

exports.version = version;
exports.buildRequest = buildRequest;
exports.buildAuthentication = buildAuthentication;
exports.authenticate = authenticate;
exports.buildParams = buildParams;
exports.executeRequest = executeRequest;
exports.fetch = fetch;
exports.set = set;
exports.unset = unset;
exports.get = get;
exports.exists = exists;
exports.buildCreateCart = buildCreateCart;
exports.createCart = createCart;
exports.buildGetCartItems = buildGetCartItems;
exports.getCartItems = getCartItems;
exports.buildEmptyCartItems = buildEmptyCartItems;
exports.emptyCartItems = emptyCartItems;
exports.buildAddCartItems = buildAddCartItems;
exports.addCartItems = addCartItems;
exports.buildRemoveCartItems = buildRemoveCartItems;
exports.removeCartItems = removeCartItems;
exports.buildUpdateCartItems = buildUpdateCartItems;
exports.updateCartItems = updateCartItems;
exports.buildGetOrderAddress = buildGetOrderAddress;
exports.getOrderAddress = getOrderAddress;
exports.buildCreateOrderAddress = buildCreateOrderAddress;
exports.createOrderAddress = createOrderAddress;
exports.buildRemoveOrderAddress = buildRemoveOrderAddress;
exports.removeOrderAddress = removeOrderAddress;
exports.buildUpdateOrderAddress = buildUpdateOrderAddress;
exports.updateOrderAddress = updateOrderAddress;
exports.buildGetOrderShipments = buildGetOrderShipments;
exports.getOrderShipments = getOrderShipments;
exports.buildSetOrderShipment = buildSetOrderShipment;
exports.setOrderShipment = setOrderShipment;
exports.buildGetOrderPayments = buildGetOrderPayments;
exports.getOrderPayments = getOrderPayments;
exports.buildOrderPay = buildOrderPay;
exports.orderPay = orderPay;
exports.buildGetOrders = buildGetOrders;
exports.getOrders = getOrders;
exports.buildGetOrderNumber = buildGetOrderNumber;
exports.getOrderNumber = getOrderNumber;
exports.buildGetProducts = buildGetProducts;
exports.getProducts = getProducts;
exports.buildGetProductsAggs = buildGetProductsAggs;
exports.getProductsAggs = getProductsAggs;
exports.buildGetProductsId = buildGetProductsId;
exports.getProductsId = getProductsId;
exports.Search = Search;
exports.createSearch = createSearch;
exports.createFilter = createFilter;
exports.createTaxonsFilter = createTaxonsFilter;
exports.buildGetTaxons = buildGetTaxons;
exports.getTaxons = getTaxons;
exports.buildGetTaxonId = buildGetTaxonId;
exports.getTaxonId = getTaxonId;
exports.buildGetTaxonomies = buildGetTaxonomies;
exports.getTaxonomies = getTaxonomies;
exports.buildGetTaxonomyId = buildGetTaxonomyId;
exports.getTaxonomyId = getTaxonomyId;
exports.buildRegisterUser = buildRegisterUser;
exports.registerUser = registerUser;
exports.buildLoginUser = buildLoginUser;
exports.loginUser = loginUser;
exports.buildRequireResetUser = buildRequireResetUser;
exports.requireResetUser = requireResetUser;
exports.buildResetUser = buildResetUser;
exports.resetUser = resetUser;