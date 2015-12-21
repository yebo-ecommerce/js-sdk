//
// require('babelify/polyfill');

// Config
require('./yebo_sdk/core/config.js')();

// Import the config
// import { Config } from '../index';
var Config = YeboSDK.Config;

// Set the config for the tests
// Config.set('store:url', 'http://vivreshop.azsale.com.br/api');
Config.set('store:url', 'http://diario.azsale.com.br/api');
Config.set('store:api:version', 'v2');

// Core
require('./yebo_sdk/core/request.js')();
require('./yebo_sdk/core/store.js')();

// Query
require('./yebo_sdk/core/query.js')();
require('./yebo_sdk/query/products.js')();

//
require('./yebo_sdk/cart.js')();
