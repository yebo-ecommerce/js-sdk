/**
 * This module is the lowest level between the connection
 * with Yebo API
 *
 * @TODO Better support to jsonp
 */

// Dependencies
import axios from 'axios';

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
export const fetch = function(method, url, data, contentType, headers) {
  // Create the request
  return axios({
    url: url,
    method: method,
    contentType: contentType,
    crossOrigin: true,
    headers: headers,
    data:data
  });
}

/**
 *
 */
export const get = function() {}

/**
 *
 */
export const post = function() {}
