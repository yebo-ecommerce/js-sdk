/**
 * Returns all a user Orders
 * @param {String} token Token user, owner of Orders
 * @param {Boolean} complete Returns only complete Orders
 * @param {Boolean} incomplete Returns only incomplete Orders
 * @return
 */
export const getOrders = function (token, complete, incomplete, page = 1, perPage = 25) {
  //
  if (complete === true && incomplete === true)
    throw 'A order could not be complete and incomplete at same time.'

  // Build the request.
  let req = buildRequest('GET', `/orders`, { token: token, complete: complete, incomplete: incomplete, page: page, per_page: perPage  });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Returns a user Order
 * @param {String} token Token user, owner of Orders
 * @param {String} number Order's number
 * @param {Boolean} complete Returns only if the Order is complete
 * @param {Boolean} incomplete Returns only if the Order is incomplete
 * @return
 */
export const getOrderNumber = function (token, number, complete = false, incomplete = false) {
  //
  if (complete === true && incomplete === true)
    throw 'A order could not be complete and incomplete at same time.'

  // Build the request.
  let req = buildRequest('GET', `/orders/${number}`, { token: token, complete: complete, incomplete: incomplete });

  // Return the execution
  return excuteRequest(req);
}
