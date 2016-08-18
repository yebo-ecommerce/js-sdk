// Dependencies
import {buildRequest, executeRequest} from './../../core/api'

/**
 * List of Products
 * @param {Object} search Parameters used in the products search
 * @return
 */
export const getProducts = function (search) {
  // Build the request.
  let req = buildRequest('GET', '/products', search);

  // Return the execution
  return excuteRequest(req);
}

/**
 * Aggregations
 * @param {String} root Category base
 * @param {Array[Object]} ranges Price Range
 * @param {Object} search Parameters used in the products search
 * @return
 */
export const getProductsAggs = function (root, ranges, search) {
  // ...
}

/**
 * Information from a single product
 * @param {Integer} id Product ID
 * @return
 */
export const getProductsId = function (id) {
  // ...
}
