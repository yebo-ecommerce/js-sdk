// Dependencies
import { Request } from './request';
import { Config } from './config';
import RSVP from 'rsvp';
// import cacheJS from 'cacheJS';

/**
 * This class will be the bridge between the Yebo and the SDK
 * Always using the class Request as a connection interface
 */
export class Store {
  /**
   * Authenticate the current sessions
   */
  static auth() {
    // Define the cache expire time
    const EXPIRE_TIME = 1800;

    // Define the store url
    const url = Config.get('store:url', true);

    // Define the API version
    const apiVersion = Config.get('store:api:version', true);

    // Define the full fetch url
    const fullURL = `${url}/${apiVersion}`;

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
        new Request(fullURL)
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
    const url = Config.get('store:url', true);

    // Define the API version
    const apiVersion = Config.get('store:api:version', true);

    // Define the full fetch url
    const fullPath = `${url}/${apiVersion}/${path}`;

    // Return a fetch promise
    return new RSVP.Promise((resolve, reject) => {
      // Auth the connection
      this.auth().then((token) => {
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
