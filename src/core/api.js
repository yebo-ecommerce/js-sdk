/**
 *
 *
 * @TODO Better support to the others HTTP verbs
 */

// Dependencies
import { fetch } from './request';

// Configurations
import { get, set } from './config';

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
export const buildRequest = function(method, path, data, auth = get('auth'), store = get('store'), version = get('version'), token = get('token')) {
  // Query String
  let qs = '';

  // Generate the QueryString if its necessary
  if( method === 'GET' && data !== undefined )
    qs = buildParams(data);

  // Request Headers
  let headers = {};



  // Check if a token is passed to be used
  if( token !== undefined )
    headers['Yebo-Token'] = token;

  // Return the request options
  return {
    name: path.split('/').join('-').substring(1),
    method: method,
    url: `${get('protocol')}://${store}.${get('apiURL')}/${version}${path}${qs}`,
    data: method === 'GET' ? {} : data,
    headers: headers,
    content_type: method === 'GET' ? 'application/x-www-form-urlencoded' : 'application/json'
  };
}

/**
 * Build the request that will get the authentication token
 *
 * @param {String} name Store name
 * @param {String} version The API version
 * @param {String} token The API token
 * @return {Object} Request that will return the authentication token
 */
export const buildAuthentication = function(name, version, token) {
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
export const authenticate = function(name = get('store'), version = get('version'), token = get('token')) {
  return executeRequest(buildAuthentication(name, version, token));
}

/**
 * Based on an array generate
 *
 * @param {Object/Array} value Values that will be mapped to QueryString
 * @return {String} QueryString itself
 */
export const buildParams = function(value) {
  return _recBuildParams('', value, true, '?').slice(0, -1);
}

/**
 * Execute the generated requestç
 *
 * @param {Object} req Generated request
 * @return {Promise} The HTTP request Promise
 */
export const executeRequest = function(req) {
  const resolver = (res, rej) => {
    // Check if the authentication token is passed
    req.headers['Authorization'] = `Bearer ${get('authToken')}`

    //
    fetch(req.method, req.url, req.data, req.contentType, req.headers).then(res).catch(rej);
  }
  return new Promise((resolve, reject) => {
    //
    if (req.name !== '' && get('expireAt') > Date.now()) {
      // authenticate
      authenticate().then((res) => {
        // res.token
        set('authToken', res.token)

        // res.expire_at
        set('expireAt', res.expire_at)
        // resolver reolve and reject
        resolver(resolve, reject)
      })
    } else {
      resolver(resolve, reject)
    }
  })
}

/**
 * Generate (recursively) the params
 *
 * @param {String} prefix The param prefix
 * @param {Object/Array} value Values that will be mapped to params
 * @param {Boolean} top Check if the value is at top level
 * @param {String} acc Accumulate the result
 * @return {String} The full QueryString (just remember that a last '&' will not be removed)
 */
const _recBuildParams = function(prefix, value, top, acc) {
  // Different treatment to array sources
  if( typeof value === 'object') {
    // Each the value
    for( let i in value ) {
      // Check if its a number
      let nan = isNaN(i);

      // Build the recursion again, setting the accumulator
      acc = _recBuildParams(`${(nan && top) ? i : prefix}${(nan && !top) ? '[' + i + ']' : nan ? '' : '[]'}`, value[i], false, acc);
    }
  } else {
    // Aggregate to the accumulator
    // acc += `${encodeURIComponent(prefix)}=${encodeURIComponent(value)}&`;
    acc += `${prefix}=${encodeURIComponent(value)}&`;
  }

  // Return the accumlator
  return acc;
}
