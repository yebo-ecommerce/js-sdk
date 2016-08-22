/**
 * Returns the address
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
export const getOrderAddress = function (number, userToken, kind) {
  // Build the request.
  let req = buildRequest('GET', `/address/${number}/${kind}`, { user_token: userToken });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Create the address of the Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
export const createOrderAddress = function (number, userToken, kind) {
  // Build the request.
  let req = buildRequest('POST', `/address/${number}/${kind}`, { user_token: userToken });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Remove the address of the Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
export const removeOrderAddress = function (number, userToken, kind) {
  // Build the request.
  let req = buildRequest('POST', `/address/${number}/${kind}`, { user_token: userToken });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Update the address of the Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
export const updateOrderAddress = function (number, userToken, kind) {
  // Build the request.
  let req = buildRequest('POST', `/address/${number}/${kind}`, { user_token: userToken });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Returns / estimated delivery methods for Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Boolean} calculate Deliveries will be recalculated
 * @return
 */
export const getOrderShipments = function (number, userToken, calculate) {
  // Build the request.
  let req = buildRequest('POST', `/shipments/${number}/${kind}`, { user_token: userToken, calculate: calculate });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Defines a delivery method for a package
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Integer} package ID Package
 * @param {Integer} rate delivery ID to the package
 * @return
 */
export const setOrderShipment = function (number, userToken, package, rate) {
  // Build the request.
  let req = buildRequest('POST', `/shipments/${number}/${kind}`, { user_token: userToken, rate: rate });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Returns payment methods for Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Boolean} subscription Return type recurrence payment methods
 * @return
 */
export const getOrderPay = function (number, userToken, subscription) {
  // Build the request.
  let req = buildRequest('GET', `/pay/${number}`, { user_token: userToken, subscription: subscription });

  // Return the execution
}

/**
 * Making the payment
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Integer} methodId ID payment method
 * @param {String} source Information used for payment
 * @return
 */
export const orderPay = function (number, userToken, methodId, source) {
  // Build the request.
  let req = buildRequest('POST', `/pay/${number}`, { user_token: userToken, method_id: methodId, source: source });

  // Return the execution
}
