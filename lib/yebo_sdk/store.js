// Dependencies
import { Request } from './request';
// import cacheJS from 'cacheJS';

//
var RSVP = require('rsvp');

/**
 * This class will be the bridge between the Yebo and the SDK
 * Always using the class Request as a connection interface
 */
export class Store {
  /**
   * Authenticate the current sessions
   * @param {string} url The store URL
   */
  static auth(url) {
    // Define the cache expire time
    const EXPIRE_TIME = 1800;

    // Return the an auth Promise
    return new RSVP.Promise((resolve, reject) => {
      // Get the cached key
      let cachedKey = cacheJS.get('yebo:auth');

      // Check if the auth key is cached
      if( cachedKey !== null ) {
        // Resolve the promise
        resolve(cachedKey);
      } else {
        // Get a new key
        new Request(url)
          .then((result) => {
            // Insert into the cache
            cacheJS.set('yebo:auth', result.token, EXPIRE_TIME);

            // resolve the promise
            resolve(result.token);
          })
          .catch(reject);
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
  static fetch(path, data = {}, method = 'GET') {
    // Define the store url
    const url = 'http://vivreshop.yebo.me:3000/v3/';

    // Auth header
    let authHeader = {
      'Authorization': 'Bearer'
    };
    // Define the full fetch url
    const fullPath = `${url}/${path}`;

    // Return a fetch promise
    return new RSPV.Promise((resolve, reject) => {
    return new RSVP.Promise((resolve, reject) => {
      // Auth the connection
      this.auth(url).then((token) => {
        // Auth header
        let authHeader = {
          'Authorization': `Bearer ${token}`
        };

        // Make the request
        new Request(fullPath, method, data, authHeader)
          .then((result) => {
            // resolve the promise
            resolve(result);
          })
          .catch(reject);
      });
    });
  }
}
