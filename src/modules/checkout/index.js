// Dependencies
import { buildRequest, executeRequest } from './../../core/api'


/**
 * Returns the address
 * Same params as `getOrderAddress`
 * @return {Object} Request
 */
export const buildGetOrderAddress = function (number, userToken, kind) {
  // Build the request.
  return buildRequest('GET', `/address/${number}/${kind}`, { user_token: userToken });
}

/**
 * Returns the address
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
export const getOrderAddress = function (number, userToken, kind) {
  // Build the request.
  let req = buildGetOrderAddress(number, userToken, kind);

  // Return the execution
  return excuteRequest(req);
}


/**
 * Create the address of the Order
 * Same params as `createOrderAddress`
 * @return {Object} Request
 */
export const buildCreateOrderAddress = function (number, userToken, kind) {
  // Build the request.
  return buildRequest('POST', `/address/${number}/${kind}`, { user_token: userToken });
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
  let req = buildCreateOrderAddress(number, userToken, kind);

  // Return the execution
  return excuteRequest(req);
}

/**
 * Remove the address of the Order
 * Same params as `removeOrderAddress`
 * @return {Object} Request
 */
export const buildRemoveOrderAddress = function (number, userToken, kind) {
  // Build the request.
  return buildRequest('POST', `/address/${number}/${kind}`, { user_token: userToken });
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
  let req = buildRemoveAddress(number, userToken, kind);

  // Return the execution
  return excuteRequest(req);
}

/**
 * Update the address of the Order
 * Same params as `updateOrderAddress`
 * @return {Object} Request
 */
export const buildUpdateOrderAddress = function (number, userToken, kind) {
  // Build the request.
  return buildRequest('POST', `/address/${number}/${kind}`, { user_token: userToken });
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
  let req = buildUpdateOrderAddress(number, userToken, kind);

  // Return the execution
  return excuteRequest(req);
}

/**
 * Returns / estimated delivery methods for Order
 * Same params as `getOrderShipments`
 * @return {Object} Request
 */
export const buildGetOrderShipments = function (number, userToken, calculate) {
  // Build the request.
  return buildRequest('POST', `/shipments/${number}/${kind}`, { user_token: userToken, calculate: calculate });
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
  let req = buildGetOrderShipments(number, userToken, calculate);

  // Return the execution
  return excuteRequest(req);
}

/**
 * Defines a delivery method for a package
 * Same params as `setOrderShipment`
 * @return {Object} Request
 */
export const buildSetOrderShipment = function (number, userToken, pkg, rate) {
  // Build the request.
  return buildRequest('POST', `/shipments/${number}/${kind}`, { user_token: userToken, rate: rate, package: pkg });
}

/**
 * Defines a delivery method for a package
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Integer} pkg ID Package
 * @param {Integer} rate delivery ID to the package
 * @return
 */
export const setOrderShipment = function (number, userToken, pkg, rate) {
  // Build the request.
  let req = buildSetOrderShipment(number, userToken, pkg, rate);

  // Return the execution
  return excuteRequest(req);
}

/**
 * Returns payment methods for Order
 * Same params as `getOrderPayments`
 * @return {Object} Request
 */
export const buildGetOrderPayments = function (number, userToken, subscription) {
  // Build the request.
  return buildRequest('GET', `/pay/${number}`, { user_token: userToken, subscription: subscription });
}

/**
 * Returns payment methods for Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Boolean} subscription Return type recurrence payment methods
 * @return
 */
export const getOrderPayments = function (number, userToken, subscription) {
  // Build the request.
  let req = buildGetOrderPayments(number, userToken, subscription);

  // Return the execution
  return excuteRequest(req);
}

/**
 * Making the payment
 * Same params as `orderPay`
 * @return {Object} Request
 */
export const buildOrderPay = function (number, userToken, methodId, source) {
  // Build the request.
  return buildRequest('POST', `/pay/${number}`, { user_token: userToken, method_id: methodId, source: source });
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
  let req = buildOrderPay(number, userToken, methodId, source);

  // Return the execution
  return excuteRequest(req);
}
