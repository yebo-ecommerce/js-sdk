# Yebo SDK (1.0)
This library is the easiest way to connect with [Yebo API](http://yebo.com.br/), it intends to be more functional as possible.

**IMPORTANT: If you were using the older versions(v0) this is a complete rewrite of the library.**
**OBS: This SDK is not complete and it is under a heavy development, some resources are not ready yet.**

## Documentation
Its planned to create a simple guide website (like [Vue.js](http://vuejs.org/guide/) one)

## Archtecture
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
  * Pluging will, probably, live in different repositories.

## Development
This library does not have any native dependency, so its possible to just clone, install the
dependencies(with `npm install`) and starts developing.

**Important scripts:**
* `npm install`
* `npm test` - Test the library
* `npm build` - Generate the `dist/` folder with the compiled files.
