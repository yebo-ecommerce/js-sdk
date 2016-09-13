// Dependencies
import {buildRequest, executeRequest} from './../../core/api'

/**
 * Build Request Get Products
 * @param {Object} search Parameters used in the products search
 * @return {Object} request
 */
export const buildGetProducts = function (search) {
  // Build Get Products
  return buildRequest('GET', '/products', { search: search });
}

/**
 * List of Products
 * @param {Object} search Parameters used in the products search
 * @return
 */
export const getProducts = function (search) {
  // Build the request.
  let req = buildGetProducts(search);

  // Return the execution
  return executeRequest(req);
}

/**
 * Build Request Get Products Aggs
 * @param {String} root Category base
 * @param {Array[Object]} ranges Price Range
 * @param {Object} search Parameters used in the products search
 * @return {Object} request
 */
export const buildGetProductsAggs = function (root, ranges, search) {
  // Build the request.
  return buildRequest('GET', '/products/aggs', { root: root, ranges: ranges, search: search });
}

/**
 * Aggregations
 * @param {String} root Category base
 * @param {Array[Object]} ranges Price Range
 * @param {Object} search Parameters used in the products search
 * @return
 */
export const getProductsAggs = function (root, ranges, search) {
  // Build the request.
  let req = buildGetProductsAggs(root, ranges, search);

  // Return the execution
  return executeRequest(req);
}

/**
 * Build Get Products Id
 * @param {Integer} id Product ID
 * @return
 */
export const buildGetProductsId = function (id) {
  // Build the request.
  return buildRequest('GET', `/product/${id}`, {});
}

/**
 * Information from a single product
 * @param {Integer} id Product ID
 * @return
 */
export const getProductsId = function (id) {
  // Build the request.
  let req = buildGetProductsId(id);

  // Return the execution
  return executeRequest(req);
}
