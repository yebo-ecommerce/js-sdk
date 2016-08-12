/**
 * Returns all a user Orders
 * @param {String} token Token user, owner of Orders
 * @param {Boolean} complete Returns only complete Orders
 * @param {Boolean} incomplete Returns only incomplete Orders
 * @return
 */
export const getOrders = function (token, complete, incomplete, page = 1, perPage = 25) {
  // ...
}

/**
 * Returns a user Order
 * @param {String} token Token user, owner of Orders
 * @param {String} number Order's number
 * @param {Boolean} complete Returns only if the Order is complete
 * @param {Boolean} incomplete Returns only if the Order is incomplete
 * @return
 */
export const getOrdersNumber = function (token, number, complete, incomplete) {
  // ...
}
