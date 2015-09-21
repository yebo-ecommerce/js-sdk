/*! cacheJS 06-05-2015 */
!function(a,b){"use strict";var c=function(){var a="localStorage";return{init:function(a){this.localStorageProvider=new e(a),this.arrayProvider=new f(a)},use:function(b){a=b},getProvider:function(b){var c=b||a;switch(c){case"localStorage":return this.localStorageProvider;case"array":return this.arrayProvider}}}},d=function(){var a={prefix:"_cache",ttl:604800},b={cacheAdded:[],cacheRemoved:[]},d={generateKey:function(b){var c=a.prefix+"_",d=[];for(var e in b)b.hasOwnProperty(e)&&d.push(e);d.sort();for(var f=0;f<d.length;f++)c+=d[f]+"_"+b[d[f]],f!==d.length-1&&(c+="__");return c},generateContextKey:function(b,c){return a.prefix+"_context_"+b+"_"+c},getCurrentTime:function(){var a=(new Date).getTime();return Math.floor(a/1e3)},getDefault:function(){return a},getEventSubscribers:function(){return b},dispatchEvent:function(a,c){var e=b[a];if(!(e.length<1))for(var f=0;f<e.length;f++)"undefined"!=typeof e[f]&&d.isFunction(e[f])&&e[f](c)},isFunction:function(a){return"[object Function]"==Object.prototype.toString.call(a)}},e=new c;return e.init(d),{use:function(a){return e.use(a),this},get:function(a){return e.getProvider().get(a)},set:function(a,b,c,d){return e.getProvider().set(a,b,c,d),this},setPrefix:function(b){return a.prefix=b,this},getPrefix:function(){return a.prefix},removeByKey:function(a){return e.getProvider().removeByKey(a),this},removeByContext:function(a){return e.getProvider().removeByContext(a),this},on:function(a,c){b[a].push(c)},unsubscribe:function(a,c){for(var d=b[a],e=0;e<d.length;e++)if(d[e]===c){delete d[e];break}}}},e=function(a){return{get:function(b){var c=a.generateKey(b),d=localStorage.getItem(c);return null!==d?(d=JSON.parse(d),a.getCurrentTime()-d.createdAt>=d.ttl?(localStorage.removeItem(c),null):d.data):null},set:function(b,c,d,e){d=d||a.getDefault().ttl;var f=a.generateKey(b);localStorage.setItem(f,JSON.stringify({data:c,ttl:d,createdAt:a.getCurrentTime()}));for(var g in e)if(e.hasOwnProperty(g)){var h=a.generateContextKey(g,e[g]),i=localStorage.getItem(h);if(null!==i){i=JSON.parse(i);var j=!1;if(Array.prototype.indexOf)j=i.indexOf(f)>=0;else for(var k=0;k<i.length;k++)if(i[k]==f){j=!0;break}j||i.push(f)}else i=[f];localStorage.setItem(h,JSON.stringify(i))}a.dispatchEvent("cacheAdded",{key:b,value:c,ttl:d,contexts:e||null})},removeByKey:function(b){var c=a.generateKey(b),d=localStorage.getItem(c);null!==d&&(d=JSON.parse(d),localStorage.removeItem(c),a.dispatchEvent("cacheRemoved",{generatedKey:c,value:d.data,ttl:d.ttl}))},removeByContext:function(b){for(var c in b)if(b.hasOwnProperty(c)){var d=a.generateContextKey(c,b[c]),e=localStorage.getItem(d);if(null===e)return;for(var f=JSON.parse(e),g=0;g<f.length;g++){var h=JSON.parse(localStorage.getItem(f[g]));localStorage.removeItem(f[g]),a.dispatchEvent("cacheRemoved",{generatedKey:f[g],value:h.data,ttl:h.ttl})}localStorage.removeItem(d)}}}},f=function(a){var b={},c={};return{get:function(c){var d=a.generateKey(c);if(b.hasOwnProperty(d)){var e=b[d];return a.getCurrentTime()-e.createdAt>=e.ttl?(delete b[d],null):e.data}return null},set:function(d,e,f,g){var h=a.generateKey(d);f=null===f||"undefined"==typeof f?a.getDefault().ttl:f,b[h]={data:e,ttl:f,createdAt:a.getCurrentTime()};for(var i in g)if(g.hasOwnProperty(i)){var j=a.generateContextKey(i,g[i]),k=c.hasOwnProperty(j)?c[j]:null;if(null!==k){var l=!1;if(Array.prototype.indexOf)l=k.indexOf(h)>=0;else for(var m=0;m<k.length;m++)if(k[m]==h){l=!0;break}l||k.push(h)}else k=[h];c[j]=k}a.dispatchEvent("cacheAdded",{key:d,value:e,ttl:f,contexts:g||null})},removeByKey:function(c){var d=a.generateKey(c);if(b.hasOwnProperty(d)){var e=b[d];delete b[d],a.dispatchEvent("cacheRemoved",{generatedKey:d,value:e.data,ttl:e.ttl})}},removeByContext:function(d){for(var e in d)if(d.hasOwnProperty(e)){var f=a.generateContextKey(e,d[e]),g=c.hasOwnProperty(f)?c[f]:null;if(null===g)return;for(var h=0;h<g.length;h++){var i=b[g[h]];delete b[g[h]],a.dispatchEvent("cacheRemoved",{generatedKey:g[h],value:i.data,ttl:i.ttl})}delete c[f]}}}};d.VERSION="1.1.1",a.cacheJS=new d}(this);

'use strict';

var _get = function get(_x13, _x14, _x15) { var _again = true; _function: while (_again) { var object = _x13, property = _x14, receiver = _x15; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x13 = parent; _x14 = property; _x15 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.yebo_sdk = {});
})(undefined, function (exports) {
  'use strict';

  // Variables
  // var chunk = require('lodash');
  var _assign = require('lodash/object/assign');
  var _RSVP = require('rsvp');
  /**
   * Request class
   * @example
   * let myClass = new Request('http://google.com');
   */

  var Request = (function () {
    /**
     * This method make a request
     * @param {string[]} url The url that will be requested
     * @param {string[]} method Method used to request
     * @param {object} data The content that will be sended
     * @param {object} header Request headers
     * @return {RVSP.Promise} Request promise
     */

    function Request(url) {
      var method = arguments.length <= 1 || arguments[1] === undefined ? 'GET' : arguments[1];

      var _this = this;

      var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
      var header = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

      _classCallCheck(this, Request);

      // Setting the class
      var xhrClass = XMLHttpRequest || ActiveXObject;

      // XHR Object
      var xhr = new xhrClass('MSXML2.XMLHTTP.3.0');

      // Define the headers
      var headers = _assign({
        'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/x-www-form-urlencoded'
      }, header);

      // Return a Promise
      return new _RSVP.Promise(function (resolve, reject) {
        // Open the URL
        xhr.open(method, url, 1);

        // Set the headers
        for (var h in headers) {
          xhr.setRequestHeader(h, headers[h]);
        }

        // Define the callback
        xhr.onreadystatechange = function () {
          // Checks if the ajax has ended
          if (xhr.readyState > 3) {
            // Check the request status
            if (xhr.status === 200) resolve(_this.parseResponse(xhr), xhr);else reject(xhr);
          }
        };

        // Send the data
        xhr.send(data);
      });
    }

    /**
     * Abstract query class
     */

    /**
     * Parse the XHR response according to the type
     * @param {XMLHttpRequest} xhr A request object
     * @return {object/string} The response foratted
     */

    _createClass(Request, [{
      key: 'parseResponse',
      value: function parseResponse(xhr) {
        return JSON.parse(xhr.responseText);
      }
    }]);

    return Request;
  })();

  var Query = (function () {
    /**
     * Create a new Query
     * @param {any} parentQuery Base query that will be exetend
     */

    function Query(parentQuery) {
      _classCallCheck(this, Query);

      // Set query name
      this.queryName = 'abstract';

      // Set attributes
      this._attrs = {};

      // Is there any parentQuery?
      if (parentQuery !== undefined) {
        // Check the queryName
        if (this.queryName === parentQuery.queryName) this._attrs = parentQuery._attrs;
      }
    }

    // import cacheJS from 'cacheJS';

    //

    /**
     * Build the query
     * @return {Object} The object that will be passed to the run as `data`
     */

    _createClass(Query, [{
      key: 'build',
      value: function build() {
        // Warn!
        console.warn('This method should be implemented in the Query class.');

        // Return nothing
        return {};
      }
    }]);

    return Query;
  })();

  var RSVP = require('rsvp');

  /**
   * This class will be the bridge between the Yebo and the SDK
   * Always using the class Request as a connection interface
   */

  var Store = (function () {
    function Store() {
      _classCallCheck(this, Store);
    }

    //

    _createClass(Store, null, [{
      key: 'auth',

      /**
       * Authenticate the current sessions
       * @param {string} url The store URL
       */
      value: function auth(url) {
        // Define the cache expire time
        var EXPIRE_TIME = 1800;

        // Return the an auth Promise
        return new RSVP.Promise(function (resolve, reject) {
          // Get the cached key
          var cachedKey = cacheJS.get('yebo:auth');

          // Check if the auth key is cached
          if (cachedKey !== null) {
            // Resolve the promise
            resolve(cachedKey);
          } else {
            // Get a new key
            new Request(url).then(function (result) {
              // Insert into the cache
              cacheJS.set('yebo:auth', result.token, EXPIRE_TIME);

              // resolve the promise
              resolve(result.token);
            })['catch'](reject);
          }
        });
      }

      /**
       * Fetch any kind of data from Yebo
       * @todo A way to able the user to config the store URL
       * @todo Create a Result Object to make all the API returns the same
       * @param {url} path The path that will be requested
       * @param {object} data Data that will be sent to the URL
       * @param {string} method Method HTTP that will be used
       */
    }, {
      key: 'fetch',
      value: function fetch(path) {
        var _this2 = this;

        var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var method = arguments.length <= 2 || arguments[2] === undefined ? 'GET' : arguments[2];

        // Define the store url
        // const url = 'http://vivreshop.yebo.me:3000/v3/';
        var url = 'http://vivreshop.azsale.com.br/api/v3';

        // Define the full fetch url
        var fullPath = url + '/' + path;

        // Return a fetch promise
        return new RSVP.Promise(function (resolve, reject) {
          // Auth the connection
          _this2.auth(url).then(function (token) {
            // Auth header
            var authHeader = {
              'Authorization': 'Bearer ' + token
            };

            // Make the request
            new Request(fullPath, method, data, authHeader).then(function (result) {
              // resolve the promise
              resolve(result);
            })['catch'](reject);
          });
        });
      }
    }]);

    return Store;
  })();

  var isArray = require('lodash/lang/isArray');
  var isEmpty = require('lodash/lang/isEmpty');
  var assign = require('lodash/object/assign');
  /**
   * Product Query class
   * @example
   * var query = new ProductQuery();
    * query
   *   .search('camiseta')
   *   .filter('cor', ['azul', 'amarelo'])
   *   .and()
   *   .taxonony(['marcas', 'camisetas'])
   *   .or()
   *   .taxonomy(['promocao'])
   *   .and()
   *   .price(15, 25)
   *   .run(function(err, result) {
   *    console.log(err, result);
   *   })
   */

  var Products = (function (_Query) {
    _inherits(Products, _Query);

    /**
     *
     */

    function Products(parentQuery) {
      _classCallCheck(this, Products);

      // Parent call
      _get(Object.getPrototypeOf(Products.prototype), 'constructor', this).call(this, parentQuery);

      // Set the query name
      this.queryName = 'product';

      // Default attributes
      var defaultAttributes = {
        search: '',
        filter: {
          and: [],
          or: []
        },
        sort: {},
        page: 1,
        perPage: 15,
        currentOperator: 'or'
      };

      // Merge the values
      this._attrs = assign(defaultAttributes, this._attrs);
    }

    /**
     * Price range filter
     * @example
     * query.price(0, 15);
     * // or...
     * query.price(15, 30);
     * // or...
     * query.price(30);
     */

    _createClass(Products, [{
      key: 'price',
      value: function price() {
        for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        if (values.length > 2) throw 'price range just accept two values';

        // Generate the filter
        this._generateFilter(this._format('price', values, '', 'range'));

        // Return the instance
        return this;
      }

      /**
       * Make an query in the taxonomies
       * @param {array} values Array that will be searched
       * @param {string} field The field that the values will match
       * @param {string} execution The execution value
       * @example
       * query.taxonomy(['camisetas', 'promocao']);
       */
    }, {
      key: 'taxonomy',
      value: function taxonomy(values) {
        var field = arguments.length <= 1 || arguments[1] === undefined ? 'permalink' : arguments[1];
        var execution = arguments.length <= 2 || arguments[2] === undefined ? 'and' : arguments[2];

        // Generate the filter
        this._generateFilter(this._format('taxonomy', values, field, 'fixed', execution));

        // Return the instance
        return this;
      }

      /**
       * Make an query in Yebo Filters
       * @param {string} name Filter name
       * @param {array} values Array with the values that will be searched
       * @param {string} execution The execution value
       * @example
       * query.filter('cor', ['azul', 'amarelo']);
       */
    }, {
      key: 'filter',
      value: function filter(name, values) {
        var execution = arguments.length <= 2 || arguments[2] === undefined ? 'and' : arguments[2];

        // Generate the filter
        this._generateFilter(this._format(name, values, '', 'fixed', execution));

        // Return the instance
        return this;
      }

      /**
       * Set the search page
       * @param {integer} page Page number
       */
    }, {
      key: 'page',
      value: function page(_page) {
        //
        this._attrs.page = _page;

        // Return the instance
        return this;
      }

      /**
       * Set the per page results
       * @param {integer} perPage Per page number
       */
    }, {
      key: 'perPage',
      value: function perPage(_perPage) {
        //
        this._attrs.perPage = _perPage;

        // Return the instance
        return this;
      }

      /**
       * Change the current operator to `or`
       */
    }, {
      key: 'or',
      value: function or() {
        // Set the current operator
        this._attrs.currentOperator = 'or';

        // Return the instance
        return this;
      }

      /**
       * Change the current operator to `and`
       */
    }, {
      key: 'and',
      value: function and() {
        // Set the current operator
        this._attrs.currentOperator = 'and';

        // Return the instance
        return this;
      }

      /**
       * Search products by the name
       * @param {string} name Name that will be searched
       * @example
       * query.search('product-name');
       */
    }, {
      key: 'search',
      value: function search(name) {
        // Set the search
        this._attrs.search = name;

        // Return the instance
        return this;
      }

      /**
       * Sort the search by a specific field and order
       * @param {string} field Field that will be used to order. Suported: `name`, `price`
       * @param {string} order `asc` or `desc`
       * @example
       * query.sort('price', 'asc');
       */
    }, {
      key: 'sort',
      value: function sort(field) {
        var order = arguments.length <= 1 || arguments[1] === undefined ? 'asc' : arguments[1];

        // Set sort
        this._attrs.sort = {
          field: field,
          order: order
        };

        // Return the instance
        return this;
      }

      /**
       * Will generate the object that will be sent to Yebo
       * @example
       * query.build();
       */
    }, {
      key: 'build',
      value: function build() {
        // Create result
        var result = {
          page: this._attrs.page,
          per_page: this._attrs.perPage,
          filters: this._attrs.filter
        };

        //
        if (this._attrs.search !== '') result.name = this._attrs.search;

        //
        if (!isEmpty(this._attrs.sort)) result.sort = this._attrs.sort;

        // Return the result
        return result;
      }

      /**
       * Generate the filter with the _currentOperator
       */
    }, {
      key: '_generateFilter',
      value: function _generateFilter(filter) {
        this._attrs.filter[this._attrs.currentOperator].push(filter);
      }

      /**
       * Generate an API like data structure
       * @param {string} name The name of the filter
       * @param {array} values The group of values
       * @param {string} field The field that will be searched
       * @param {string} execution How the `values` are related. `or` `and`
       */
    }, {
      key: '_format',
      value: function _format(name, values) {
        var field = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
        var type = arguments.length <= 3 || arguments[3] === undefined ? 'fixed' : arguments[3];
        var execution = arguments.length <= 4 || arguments[4] === undefined ? 'and' : arguments[4];

        // Checks the
        if (!isArray(values)) throw 'values must be an array';

        var result = {
          name: name,
          values: values,
          field: field,
          type: type,
          execution: execution
        };

        //
        return result;
      }
    }]);

    return Products;
  })(Query);

  exports.Request = Request;
  exports.Query = Query;
  exports.Store = Store;
  exports.Products = Products;
});