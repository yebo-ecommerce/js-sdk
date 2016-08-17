/**
 * This module is the lowest level between the connection
 * with Yebo API
 *
 * @TODO Better support to jsonp
 */

// Dependencies
import axios from 'axios';
// import assing from 'lodash';

/**
 * General purpose fetch, could be used by anyone
 */
export const fetch = function(method, url, data, token, options) {
  // Create the request
  return axios({
    url: url,
    method: method,
    contentType: '',
    crossOrigin: true,
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
