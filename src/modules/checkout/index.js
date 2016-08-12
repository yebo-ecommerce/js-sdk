/**
 * Returns the address
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
export const getOrderAddress = function (number, userToken, kind) {
  // ...
}

/**
 * Create the address of the Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
export const createOrderAddress = function (number, userToken, kind) {
  // ...
}

/**
 * Remove the address of the Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
export const removeOrderAddress = function (number, userToken, kind) {
  // ...
}

/**
 * Update the address of the Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {String} kind Address Type
 * @return
 */
export const updateOrderAddress = function (number, userToken, kind) {
  // ...
}

/**
 * Returns / estimated delivery methods for Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Boolean} calculate Deliveries will be recalculated
 * @return
 */
export const getOrderShipments = function (number, userToken, calculate) {
  // ...
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
  // ...
}

/**
 * Returns payment methods for Order
 * @param {String} number Order's number
 * @param {String} userToken User token to validate the Order
 * @param {Boolean} subscription Return type recurrence payment methods
 * @return
 */
export const getOrderPay = function (number, userToken, subscription) {
  // ...
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
  // ...
}
