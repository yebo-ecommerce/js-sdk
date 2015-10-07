//
// require('babelify/polyfill');

// Config
require('./yebo_sdk/config.js')();

// Import the config
import { Config } from '../index';

// Set the config for the tests
// Config.set('store:url', 'http://vivreshop.azsale.com.br/api');
Config.set('store:url', 'http://vivreshop.yebo.me/api');
Config.set('store:api:version', 'v2');

// Core
require('./yebo_sdk/request.js')();
require('./yebo_sdk/store.js')();

// Query
require('./yebo_sdk/query.js')();
require('./yebo_sdk/query/products.js')();
