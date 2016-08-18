/**
 *
 *
 * @TODO Better support to the others HTTP verbs
 */

/**
 * Yebo Configurations
 */
export const yeboDomain = 'yebo-api.com.br/api';

/**
 * Generate the options to make a request
 *
 * @param {String} method The HTTP method (mainly GET or POST)
 * @param {String} url The url that will be used as base
 * @param {Object} data Data passed in the request
 * @param {String} name Store name
 * @param {String} version The API version
 * @param {String} auth The API token (previsouly queried)
 * @param {String} token The API token
 * @return {Object} Base configuration for the request
 */
export const buildRequest = function(method, path, data, name, version, auth, token) {
  // Query String
  let qs = '';

  // Generate the QueryString if its necessary
  if( method === 'GET' && data !== undefined )
    qs = buildParams(data);

  // Request Headers
  let headers = {};

  // Check if the authentication token is passed
  if( auth !== undefined )
    headers['Authentication'] = `Bearer ${auth}`

  // Check if a token is passed to be used
  if( token !== undefined )
    headers['Yebo-Token'] = token;

  // Return the request options
  return {
    method: method,
    url: `https://${name}.${yeboDomain}/${version}${path}${qs}`,
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
  return buildRequest('GET', '/', {}, name, version, undefined, token);
};

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
