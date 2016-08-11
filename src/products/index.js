/**
 * List of Products
 * @param {Object} search Parameters used in the products search
 * @return
 */
export const getProducts = function (search) {
  // ...
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
