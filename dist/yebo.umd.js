/**
 * Yebo SDK v1.0.0-beta
 * This library is the bridge between the Yebo E-commerce API
 * and JavaScript applications
 *
 * @author <Yebo E-commerce>
 * @contributors <Gabriel Corado, Gabriela Caldeira Diogo>
 * @copyright (2016-2017) Yebo E-commerce
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.yebo = global.yebo || {})));
}(this, (function (exports) { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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

var axios = createCommonjsModule(function (module, exports) {
	/* axios v0.14.0 | (c) 2016 by Matt Zabriskie */
	(function webpackUniversalModuleDefinition(root, factory) {
		if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["axios"] = factory();else root["axios"] = factory();
	})(commonjsGlobal, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				module.exports = __webpack_require__(1);

				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);
				var bind = __webpack_require__(3);
				var Axios = __webpack_require__(4);

				/**
     * Create an instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     * @return {Axios} A new instance of Axios
     */
				function createInstance(defaultConfig) {
					var context = new Axios(defaultConfig);
					var instance = bind(Axios.prototype.request, context);

					// Copy axios.prototype to instance
					utils.extend(instance, Axios.prototype, context);

					// Copy context to instance
					utils.extend(instance, context);

					return instance;
				}

				// Create the default instance to be exported
				var axios = createInstance();

				// Expose Axios class to allow class inheritance
				axios.Axios = Axios;

				// Factory for creating new instances
				axios.create = function create(defaultConfig) {
					return createInstance(defaultConfig);
				};

				// Expose all/spread
				axios.all = function all(promises) {
					return Promise.all(promises);
				};
				axios.spread = __webpack_require__(21);

				module.exports = axios;

				// Allow use of default import syntax in TypeScript
				module.exports.default = axios;

				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var bind = __webpack_require__(3);

				/*global toString:true*/

				// utils is a library of generic helper functions non-specific to axios

				var toString = Object.prototype.toString;

				/**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Array, otherwise false
     */
				function isArray(val) {
					return toString.call(val) === '[object Array]';
				}

				/**
     * Determine if a value is an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an ArrayBuffer, otherwise false
     */
				function isArrayBuffer(val) {
					return toString.call(val) === '[object ArrayBuffer]';
				}

				/**
     * Determine if a value is a FormData
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an FormData, otherwise false
     */
				function isFormData(val) {
					return typeof FormData !== 'undefined' && val instanceof FormData;
				}

				/**
     * Determine if a value is a view on an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
     */
				function isArrayBufferView(val) {
					var result;
					if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
						result = ArrayBuffer.isView(val);
					} else {
						result = val && val.buffer && val.buffer instanceof ArrayBuffer;
					}
					return result;
				}

				/**
     * Determine if a value is a String
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a String, otherwise false
     */
				function isString(val) {
					return typeof val === 'string';
				}

				/**
     * Determine if a value is a Number
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Number, otherwise false
     */
				function isNumber(val) {
					return typeof val === 'number';
				}

				/**
     * Determine if a value is undefined
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if the value is undefined, otherwise false
     */
				function isUndefined(val) {
					return typeof val === 'undefined';
				}

				/**
     * Determine if a value is an Object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Object, otherwise false
     */
				function isObject(val) {
					return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
				}

				/**
     * Determine if a value is a Date
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Date, otherwise false
     */
				function isDate(val) {
					return toString.call(val) === '[object Date]';
				}

				/**
     * Determine if a value is a File
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a File, otherwise false
     */
				function isFile(val) {
					return toString.call(val) === '[object File]';
				}

				/**
     * Determine if a value is a Blob
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Blob, otherwise false
     */
				function isBlob(val) {
					return toString.call(val) === '[object Blob]';
				}

				/**
     * Determine if a value is a Function
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Function, otherwise false
     */
				function isFunction(val) {
					return toString.call(val) === '[object Function]';
				}

				/**
     * Determine if a value is a Stream
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Stream, otherwise false
     */
				function isStream(val) {
					return isObject(val) && isFunction(val.pipe);
				}

				/**
     * Determine if a value is a URLSearchParams object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a URLSearchParams object, otherwise false
     */
				function isURLSearchParams(val) {
					return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
				}

				/**
     * Trim excess whitespace off the beginning and end of a string
     *
     * @param {String} str The String to trim
     * @returns {String} The String freed of excess whitespace
     */
				function trim(str) {
					return str.replace(/^\s*/, '').replace(/\s*$/, '');
				}

				/**
     * Determine if we're running in a standard browser environment
     *
     * This allows axios to run in a web worker, and react-native.
     * Both environments support XMLHttpRequest, but not fully standard globals.
     *
     * web workers:
     *  typeof window -> undefined
     *  typeof document -> undefined
     *
     * react-native:
     *  typeof document.createElement -> undefined
     */
				function isStandardBrowserEnv() {
					return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function';
				}

				/**
     * Iterate over an Array or an Object invoking a function for each item.
     *
     * If `obj` is an Array callback will be called passing
     * the value, index, and complete array for each item.
     *
     * If 'obj' is an Object callback will be called passing
     * the value, key, and complete object for each property.
     *
     * @param {Object|Array} obj The object to iterate
     * @param {Function} fn The callback to invoke for each item
     */
				function forEach(obj, fn) {
					// Don't bother if no value provided
					if (obj === null || typeof obj === 'undefined') {
						return;
					}

					// Force an array if not already something iterable
					if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
						/*eslint no-param-reassign:0*/
						obj = [obj];
					}

					if (isArray(obj)) {
						// Iterate over array values
						for (var i = 0, l = obj.length; i < l; i++) {
							fn.call(null, obj[i], i, obj);
						}
					} else {
						// Iterate over object keys
						for (var key in obj) {
							if (obj.hasOwnProperty(key)) {
								fn.call(null, obj[key], key, obj);
							}
						}
					}
				}

				/**
     * Accepts varargs expecting each argument to be an object, then
     * immutably merges the properties of each object and returns result.
     *
     * When multiple objects contain the same key the later object in
     * the arguments list will take precedence.
     *
     * Example:
     *
     * ```js
     * var result = merge({foo: 123}, {foo: 456});
     * console.log(result.foo); // outputs 456
     * ```
     *
     * @param {Object} obj1 Object to merge
     * @returns {Object} Result of all merge properties
     */
				function merge() /* obj1, obj2, obj3, ... */{
					var result = {};
					function assignValue(val, key) {
						if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
							result[key] = merge(result[key], val);
						} else {
							result[key] = val;
						}
					}

					for (var i = 0, l = arguments.length; i < l; i++) {
						forEach(arguments[i], assignValue);
					}
					return result;
				}

				/**
     * Extends object a by mutably adding to it the properties of object b.
     *
     * @param {Object} a The object to be extended
     * @param {Object} b The object to copy properties from
     * @param {Object} thisArg The object to bind function to
     * @return {Object} The resulting value of object a
     */
				function extend(a, b, thisArg) {
					forEach(b, function assignValue(val, key) {
						if (thisArg && typeof val === 'function') {
							a[key] = bind(val, thisArg);
						} else {
							a[key] = val;
						}
					});
					return a;
				}

				module.exports = {
					isArray: isArray,
					isArrayBuffer: isArrayBuffer,
					isFormData: isFormData,
					isArrayBufferView: isArrayBufferView,
					isString: isString,
					isNumber: isNumber,
					isObject: isObject,
					isUndefined: isUndefined,
					isDate: isDate,
					isFile: isFile,
					isBlob: isBlob,
					isFunction: isFunction,
					isStream: isStream,
					isURLSearchParams: isURLSearchParams,
					isStandardBrowserEnv: isStandardBrowserEnv,
					forEach: forEach,
					merge: merge,
					extend: extend,
					trim: trim
				};

				/***/
			},
			/* 3 */
			/***/function (module, exports) {

				'use strict';

				module.exports = function bind(fn, thisArg) {
					return function wrap() {
						var args = new Array(arguments.length);
						for (var i = 0; i < args.length; i++) {
							args[i] = arguments[i];
						}
						return fn.apply(thisArg, args);
					};
				};

				/***/
			},
			/* 4 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var defaults = __webpack_require__(5);
				var utils = __webpack_require__(2);
				var InterceptorManager = __webpack_require__(7);
				var dispatchRequest = __webpack_require__(8);
				var isAbsoluteURL = __webpack_require__(19);
				var combineURLs = __webpack_require__(20);

				/**
     * Create a new instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     */
				function Axios(defaultConfig) {
					this.defaults = utils.merge(defaults, defaultConfig);
					this.interceptors = {
						request: new InterceptorManager(),
						response: new InterceptorManager()
					};
				}

				/**
     * Dispatch a request
     *
     * @param {Object} config The config specific for this request (merged with this.defaults)
     */
				Axios.prototype.request = function request(config) {
					/*eslint no-param-reassign:0*/
					// Allow for axios('example/url'[, config]) a la fetch API
					if (typeof config === 'string') {
						config = utils.merge({
							url: arguments[0]
						}, arguments[1]);
					}

					config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

					// Support baseURL config
					if (config.baseURL && !isAbsoluteURL(config.url)) {
						config.url = combineURLs(config.baseURL, config.url);
					}

					// Hook up interceptors middleware
					var chain = [dispatchRequest, undefined];
					var promise = Promise.resolve(config);

					this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
						chain.unshift(interceptor.fulfilled, interceptor.rejected);
					});

					this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
						chain.push(interceptor.fulfilled, interceptor.rejected);
					});

					while (chain.length) {
						promise = promise.then(chain.shift(), chain.shift());
					}

					return promise;
				};

				// Provide aliases for supported request methods
				utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
					/*eslint func-names:0*/
					Axios.prototype[method] = function (url, config) {
						return this.request(utils.merge(config || {}, {
							method: method,
							url: url
						}));
					};
				});

				utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
					/*eslint func-names:0*/
					Axios.prototype[method] = function (url, data, config) {
						return this.request(utils.merge(config || {}, {
							method: method,
							url: url,
							data: data
						}));
					};
				});

				module.exports = Axios;

				/***/
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);
				var normalizeHeaderName = __webpack_require__(6);

				var PROTECTION_PREFIX = /^\)\]\}',?\n/;
				var DEFAULT_CONTENT_TYPE = {
					'Content-Type': 'application/x-www-form-urlencoded'
				};

				function setContentTypeIfUnset(headers, value) {
					if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
						headers['Content-Type'] = value;
					}
				}

				module.exports = {
					transformRequest: [function transformRequest(data, headers) {
						normalizeHeaderName(headers, 'Content-Type');
						if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
							return data;
						}
						if (utils.isArrayBufferView(data)) {
							return data.buffer;
						}
						if (utils.isURLSearchParams(data)) {
							setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
							return data.toString();
						}
						if (utils.isObject(data)) {
							setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
							return JSON.stringify(data);
						}
						return data;
					}],

					transformResponse: [function transformResponse(data) {
						/*eslint no-param-reassign:0*/
						if (typeof data === 'string') {
							data = data.replace(PROTECTION_PREFIX, '');
							try {
								data = JSON.parse(data);
							} catch (e) {/* Ignore */}
						}
						return data;
					}],

					headers: {
						common: {
							'Accept': 'application/json, text/plain, */*'
						},
						patch: utils.merge(DEFAULT_CONTENT_TYPE),
						post: utils.merge(DEFAULT_CONTENT_TYPE),
						put: utils.merge(DEFAULT_CONTENT_TYPE)
					},

					timeout: 0,

					xsrfCookieName: 'XSRF-TOKEN',
					xsrfHeaderName: 'X-XSRF-TOKEN',

					maxContentLength: -1,

					validateStatus: function validateStatus(status) {
						return status >= 200 && status < 300;
					}
				};

				/***/
			},
			/* 6 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);

				module.exports = function normalizeHeaderName(headers, normalizedName) {
					utils.forEach(headers, function processHeader(value, name) {
						if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
							headers[normalizedName] = value;
							delete headers[name];
						}
					});
				};

				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);

				function InterceptorManager() {
					this.handlers = [];
				}

				/**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
				InterceptorManager.prototype.use = function use(fulfilled, rejected) {
					this.handlers.push({
						fulfilled: fulfilled,
						rejected: rejected
					});
					return this.handlers.length - 1;
				};

				/**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     */
				InterceptorManager.prototype.eject = function eject(id) {
					if (this.handlers[id]) {
						this.handlers[id] = null;
					}
				};

				/**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     */
				InterceptorManager.prototype.forEach = function forEach(fn) {
					utils.forEach(this.handlers, function forEachHandler(h) {
						if (h !== null) {
							fn(h);
						}
					});
				};

				module.exports = InterceptorManager;

				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);
				var transformData = __webpack_require__(9);

				/**
     * Dispatch a request to the server using whichever adapter
     * is supported by the current environment.
     *
     * @param {object} config The config that is to be used for the request
     * @returns {Promise} The Promise to be fulfilled
     */
				module.exports = function dispatchRequest(config) {
					// Ensure headers exist
					config.headers = config.headers || {};

					// Transform request data
					config.data = transformData(config.data, config.headers, config.transformRequest);

					// Flatten headers
					config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

					utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
						delete config.headers[method];
					});

					var adapter;

					if (typeof config.adapter === 'function') {
						// For custom adapter support
						adapter = config.adapter;
					} else if (typeof XMLHttpRequest !== 'undefined') {
						// For browsers use XHR adapter
						adapter = __webpack_require__(10);
					} else if (typeof process !== 'undefined') {
						// For node use HTTP adapter
						adapter = __webpack_require__(10);
					}

					return Promise.resolve(config)
					// Wrap synchronous adapter errors and pass configuration
					.then(adapter).then(function onFulfilled(response) {
						// Transform response data
						response.data = transformData(response.data, response.headers, config.transformResponse);

						return response;
					}, function onRejected(error) {
						// Transform response data
						if (error && error.response) {
							error.response.data = transformData(error.response.data, error.response.headers, config.transformResponse);
						}

						return Promise.reject(error);
					});
				};

				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);

				/**
     * Transform the data for a request or a response
     *
     * @param {Object|String} data The data to be transformed
     * @param {Array} headers The headers for the request or response
     * @param {Array|Function} fns A single function or Array of functions
     * @returns {*} The resulting transformed data
     */
				module.exports = function transformData(data, headers, fns) {
					/*eslint no-param-reassign:0*/
					utils.forEach(fns, function transform(fn) {
						data = fn(data, headers);
					});

					return data;
				};

				/***/
			},
			/* 10 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);
				var settle = __webpack_require__(11);
				var buildURL = __webpack_require__(14);
				var parseHeaders = __webpack_require__(15);
				var isURLSameOrigin = __webpack_require__(16);
				var createError = __webpack_require__(12);
				var btoa = typeof window !== 'undefined' && window.btoa || __webpack_require__(17);

				module.exports = function xhrAdapter(config) {
					return new Promise(function dispatchXhrRequest(resolve, reject) {
						var requestData = config.data;
						var requestHeaders = config.headers;

						if (utils.isFormData(requestData)) {
							delete requestHeaders['Content-Type']; // Let the browser set it
						}

						var request = new XMLHttpRequest();
						var loadEvent = 'onreadystatechange';
						var xDomain = false;

						// For IE 8/9 CORS support
						// Only supports POST and GET calls and doesn't returns the response headers.
						// DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
						if ("production" !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
							request = new window.XDomainRequest();
							loadEvent = 'onload';
							xDomain = true;
							request.onprogress = function handleProgress() {};
							request.ontimeout = function handleTimeout() {};
						}

						// HTTP basic authentication
						if (config.auth) {
							var username = config.auth.username || '';
							var password = config.auth.password || '';
							requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
						}

						request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

						// Set the request timeout in MS
						request.timeout = config.timeout;

						// Listen for ready state
						request[loadEvent] = function handleLoad() {
							if (!request || request.readyState !== 4 && !xDomain) {
								return;
							}

							// The request errored out and we didn't get a response, this will be
							// handled by onerror instead
							if (request.status === 0) {
								return;
							}

							// Prepare the response
							var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
							var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
							var response = {
								data: responseData,
								// IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
								status: request.status === 1223 ? 204 : request.status,
								statusText: request.status === 1223 ? 'No Content' : request.statusText,
								headers: responseHeaders,
								config: config,
								request: request
							};

							settle(resolve, reject, response);

							// Clean up request
							request = null;
						};

						// Handle low level network errors
						request.onerror = function handleError() {
							// Real errors are hidden from us by the browser
							// onerror should only fire if it's a network error
							reject(createError('Network Error', config));

							// Clean up request
							request = null;
						};

						// Handle timeout
						request.ontimeout = function handleTimeout() {
							reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

							// Clean up request
							request = null;
						};

						// Add xsrf header
						// This is only done if running in a standard browser environment.
						// Specifically not if we're in a web worker, or react-native.
						if (utils.isStandardBrowserEnv()) {
							var cookies = __webpack_require__(18);

							// Add xsrf header
							var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

							if (xsrfValue) {
								requestHeaders[config.xsrfHeaderName] = xsrfValue;
							}
						}

						// Add headers to the request
						if ('setRequestHeader' in request) {
							utils.forEach(requestHeaders, function setRequestHeader(val, key) {
								if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
									// Remove Content-Type if data is undefined
									delete requestHeaders[key];
								} else {
									// Otherwise add header to the request
									request.setRequestHeader(key, val);
								}
							});
						}

						// Add withCredentials to request if needed
						if (config.withCredentials) {
							request.withCredentials = true;
						}

						// Add responseType to request if needed
						if (config.responseType) {
							try {
								request.responseType = config.responseType;
							} catch (e) {
								if (request.responseType !== 'json') {
									throw e;
								}
							}
						}

						// Handle progress if needed
						if (typeof config.onDownloadProgress === 'function') {
							request.addEventListener('progress', config.onDownloadProgress);
						}

						// Not all browsers support upload events
						if (typeof config.onUploadProgress === 'function' && request.upload) {
							request.upload.addEventListener('progress', config.onUploadProgress);
						}

						if (requestData === undefined) {
							requestData = null;
						}

						// Send the request
						request.send(requestData);
					});
				};

				/***/
			},
			/* 11 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var createError = __webpack_require__(12);

				/**
     * Resolve or reject a Promise based on response status.
     *
     * @param {Function} resolve A function that resolves the promise.
     * @param {Function} reject A function that rejects the promise.
     * @param {object} response The response.
     */
				module.exports = function settle(resolve, reject, response) {
					var validateStatus = response.config.validateStatus;
					// Note: status is not exposed by XDomainRequest
					if (!response.status || !validateStatus || validateStatus(response.status)) {
						resolve(response);
					} else {
						reject(createError('Request failed with status code ' + response.status, response.config, null, response));
					}
				};

				/***/
			},
			/* 12 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var enhanceError = __webpack_require__(13);

				/**
     * Create an Error with the specified message, config, error code, and response.
     *
     * @param {string} message The error message.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     @ @param {Object} [response] The response.
     * @returns {Error} The created error.
     */
				module.exports = function createError(message, config, code, response) {
					var error = new Error(message);
					return enhanceError(error, config, code, response);
				};

				/***/
			},
			/* 13 */
			/***/function (module, exports) {

				'use strict';

				/**
     * Update an Error with the specified config, error code, and response.
     *
     * @param {Error} error The error to update.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     @ @param {Object} [response] The response.
     * @returns {Error} The error.
     */

				module.exports = function enhanceError(error, config, code, response) {
					error.config = config;
					if (code) {
						error.code = code;
					}
					error.response = response;
					return error;
				};

				/***/
			},
			/* 14 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);

				function encode(val) {
					return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
				}

				/**
     * Build a URL by appending params to the end
     *
     * @param {string} url The base of the url (e.g., http://www.google.com)
     * @param {object} [params] The params to be appended
     * @returns {string} The formatted url
     */
				module.exports = function buildURL(url, params, paramsSerializer) {
					/*eslint no-param-reassign:0*/
					if (!params) {
						return url;
					}

					var serializedParams;
					if (paramsSerializer) {
						serializedParams = paramsSerializer(params);
					} else if (utils.isURLSearchParams(params)) {
						serializedParams = params.toString();
					} else {
						var parts = [];

						utils.forEach(params, function serialize(val, key) {
							if (val === null || typeof val === 'undefined') {
								return;
							}

							if (utils.isArray(val)) {
								key = key + '[]';
							}

							if (!utils.isArray(val)) {
								val = [val];
							}

							utils.forEach(val, function parseValue(v) {
								if (utils.isDate(v)) {
									v = v.toISOString();
								} else if (utils.isObject(v)) {
									v = JSON.stringify(v);
								}
								parts.push(encode(key) + '=' + encode(v));
							});
						});

						serializedParams = parts.join('&');
					}

					if (serializedParams) {
						url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
					}

					return url;
				};

				/***/
			},
			/* 15 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);

				/**
     * Parse headers into an object
     *
     * ```
     * Date: Wed, 27 Aug 2014 08:58:49 GMT
     * Content-Type: application/json
     * Connection: keep-alive
     * Transfer-Encoding: chunked
     * ```
     *
     * @param {String} headers Headers needing to be parsed
     * @returns {Object} Headers parsed into an object
     */
				module.exports = function parseHeaders(headers) {
					var parsed = {};
					var key;
					var val;
					var i;

					if (!headers) {
						return parsed;
					}

					utils.forEach(headers.split('\n'), function parser(line) {
						i = line.indexOf(':');
						key = utils.trim(line.substr(0, i)).toLowerCase();
						val = utils.trim(line.substr(i + 1));

						if (key) {
							parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
						}
					});

					return parsed;
				};

				/***/
			},
			/* 16 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);

				module.exports = utils.isStandardBrowserEnv() ?

				// Standard browser envs have full support of the APIs needed to test
				// whether the request URL is of the same origin as current location.
				function standardBrowserEnv() {
					var msie = /(msie|trident)/i.test(navigator.userAgent);
					var urlParsingNode = document.createElement('a');
					var originURL;

					/**
     * Parse a URL to discover it's components
     *
     * @param {String} url The URL to be parsed
     * @returns {Object}
     */
					function resolveURL(url) {
						var href = url;

						if (msie) {
							// IE needs attribute set twice to normalize properties
							urlParsingNode.setAttribute('href', href);
							href = urlParsingNode.href;
						}

						urlParsingNode.setAttribute('href', href);

						// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
						return {
							href: urlParsingNode.href,
							protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
							host: urlParsingNode.host,
							search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
							hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
							hostname: urlParsingNode.hostname,
							port: urlParsingNode.port,
							pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
						};
					}

					originURL = resolveURL(window.location.href);

					/**
     * Determine if a URL shares the same origin as the current location
     *
     * @param {String} requestURL The URL to test
     * @returns {boolean} True if URL shares the same origin, otherwise false
     */
					return function isURLSameOrigin(requestURL) {
						var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
						return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
					};
				}() :

				// Non standard browser envs (web workers, react-native) lack needed support.
				function nonStandardBrowserEnv() {
					return function isURLSameOrigin() {
						return true;
					};
				}();

				/***/
			},
			/* 17 */
			/***/function (module, exports) {

				'use strict';

				// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

				var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

				function E() {
					this.message = 'String contains an invalid character';
				}
				E.prototype = new Error();
				E.prototype.code = 5;
				E.prototype.name = 'InvalidCharacterError';

				function btoa(input) {
					var str = String(input);
					var output = '';
					for (
					// initialize result and counter
					var block, charCode, idx = 0, map = chars;
					// if the next str index does not exist:
					//   change the mapping table to "="
					//   check if d has no fractional digits
					str.charAt(idx | 0) || (map = '=', idx % 1);
					// "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
					output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
						charCode = str.charCodeAt(idx += 3 / 4);
						if (charCode > 0xFF) {
							throw new E();
						}
						block = block << 8 | charCode;
					}
					return output;
				}

				module.exports = btoa;

				/***/
			},
			/* 18 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				var utils = __webpack_require__(2);

				module.exports = utils.isStandardBrowserEnv() ?

				// Standard browser envs support document.cookie
				function standardBrowserEnv() {
					return {
						write: function write(name, value, expires, path, domain, secure) {
							var cookie = [];
							cookie.push(name + '=' + encodeURIComponent(value));

							if (utils.isNumber(expires)) {
								cookie.push('expires=' + new Date(expires).toGMTString());
							}

							if (utils.isString(path)) {
								cookie.push('path=' + path);
							}

							if (utils.isString(domain)) {
								cookie.push('domain=' + domain);
							}

							if (secure === true) {
								cookie.push('secure');
							}

							document.cookie = cookie.join('; ');
						},

						read: function read(name) {
							var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
							return match ? decodeURIComponent(match[3]) : null;
						},

						remove: function remove(name) {
							this.write(name, '', Date.now() - 86400000);
						}
					};
				}() :

				// Non standard browser env (web workers, react-native) lack needed support.
				function nonStandardBrowserEnv() {
					return {
						write: function write() {},
						read: function read() {
							return null;
						},
						remove: function remove() {}
					};
				}();

				/***/
			},
			/* 19 */
			/***/function (module, exports) {

				'use strict';

				/**
     * Determines whether the specified URL is absolute
     *
     * @param {string} url The URL to test
     * @returns {boolean} True if the specified URL is absolute, otherwise false
     */

				module.exports = function isAbsoluteURL(url) {
					// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
					// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
					// by any combination of letters, digits, plus, period, or hyphen.
					return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
					);
				};

				/***/
			},
			/* 20 */
			/***/function (module, exports) {

				'use strict';

				/**
     * Creates a new URL by combining the specified URLs
     *
     * @param {string} baseURL The base URL
     * @param {string} relativeURL The relative URL
     * @returns {string} The combined URL
     */

				module.exports = function combineURLs(baseURL, relativeURL) {
					return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
				};

				/***/
			},
			/* 21 */
			/***/function (module, exports) {

				'use strict';

				/**
     * Syntactic sugar for invoking a function and expanding an array for arguments.
     *
     * Common use case would be to use `Function.prototype.apply`.
     *
     *  ```js
     *  function f(x, y, z) {}
     *  var args = [1, 2, 3];
     *  f.apply(null, args);
     *  ```
     *
     * With `spread` this example can be re-written.
     *
     *  ```js
     *  spread(function(x, y, z) {})([1, 2, 3]);
     *  ```
     *
     * @param {Function} callback
     * @returns {Function}
     */

				module.exports = function spread(callback) {
					return function wrap(arr) {
						return callback.apply(null, arr);
					};
				};

				/***/
			}
			/******/])
		);
	});
	;
	});

var axios$1 = interopDefault(axios);

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
  return axios$1({
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
var set$1 = function set(name, value) {
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
var get$1 = function get(name) {
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
  var auth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : get$1('auth');
  var store = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : get$1('store');
  var version = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : get$1('version');
  var token = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : get$1('token');

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
    url: get$1('protocol') + '://' + store + '.' + get$1('apiURL') + '/' + version + path + qs,
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
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : get$1('store');
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : get$1('version');
  var token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : get$1('token');

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
    req.headers['Authorization'] = 'Bearer ' + get$1('authToken');

    //
    fetch(req.method, req.url, req.data, req.contentType, req.headers).then(res).catch(rej);
  };
  return new Promise(function (resolve, reject) {
    //
    if (req.name !== '' && (get$1('expireAt') === undefined || get$1('expireAt') > Date.now())) {
      // authenticate
      authenticate().then(function (res) {
        // res.token
        set$1('authToken', res.token);
        // res.expire_at
        set$1('expireAt', res.expire_at);
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
exports.set = set$1;
exports.unset = unset;
exports.get = get$1;
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

Object.defineProperty(exports, '__esModule', { value: true });

})));