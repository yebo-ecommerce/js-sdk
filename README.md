# Yebo SDK (1.0) [![Build Status](https://travis-ci.org/yebo-ecommerce/js-sdk.svg?branch=develop)](https://travis-ci.org/yebo-ecommerce/js-sdk)
This library is the easiest way to connect with [Yebo API](http://yebo.com.br/), it intends to be more functional as possible.

**IMPORTANT: If you were using the older versions(v0) this is a complete rewrite of the library.**

**OBS: This SDK is not complete and it is under a heavy development, some resources are not ready yet.**

## Documentation
Its planned to create a simple guide website (like [Vue.js](http://vuejs.org/guide/) one)

## Usage
First, install the NPM package with `npm i --save yebo_sdk`, after install you could follow two ways (depending in your project structure):

* If you're using ES6 transpilers(like Babel) you could just import the SDK functions and starts using it:
  * Example: `import { getProducts } from 'yebo_sdk'`;
* If your project is simple ES5 there are two files in the `dist/` folder that you will add to your project.

The module functions exports to types of methods: a `build` and a `execution`, the first is followed by the prefix `buildGetProducts`, and the second does not have any prefix `getProducts`.
The difference between them is that the `build` will just generate an Object with the request options, while the second will generate these options and execute the request.
```javascript
// Import
import { getProducts } from 'yebo_sdk';

// Getting products
getProducts({}).then((res) => {
  // Print the response
  console.log(res);
});
```

## Architecture
This library is divided in two parts the **core** and the **modules**:

### Core
Common funcitons and (literally) the connection with Yebo, with this part is possible to make any
interaction with the API.

### Modules
These part is more developer friendly, its idea is to provide a transparent and easy way to access
the API resources(like: products, orders, etc...).

**CURRENT MODULES**:

* `Products`
* `Orders`
* `Users`
* `Checkout`
* `Cart`
* `Taxons`

**PLANNED MODULES**:

* `Addresses`
  * `Countries`
  * `States`
* `Plugins`
  * Plugins will, probably, live in different repositories.

## Development
This library does not have any native dependency, so its possible to just clone, install the
dependencies(with `npm install`) and starts developing.

**Important scripts:**

* `npm install`
* `npm test` - Test the library
* `npm build` - Generate the `dist/` folder with the compiled files.
