/**
 * User Registration
 * @param {String} email User Email
 * @param {String} password User Password
 * @param {String} passwordConfirmation User Password confirmation
 * @return
 */
export const registerUser = function (email, password, passwordConfirmation) {
  // Build the request.
  let req = buildRequest('POST', '/user', { email: email, password: password, password_confirmation: passwordConfirmation });

  // Return the execution
  return excuteRequest(req);
}

/**
 * User Login
 * @param {String} email User Email
 * @param {String} password User Password
 * @return
 */
export const loginUser = function (email, password) {
  // Build the request.
  let req = buildRequest('POST', '/user/login', { email: email, password: password });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Calls password change
 * @param {String} email User Email
 * @param {String} storeUrl The URL of recovery that will be sent by email
 * @return
 */
export const resetUser = function (email, storeUrl) {
  // Build the request.
  let req = buildRequest('POST', '/user/reset', { email: email, store_url: storeUrl });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Change User Password
 * @param {String} token Token that was sent by email
 * @param {String} email User Email
 * @param {String} password User Password
 * @param {String} passwordConfirmation User Password confirmation
 * @return
 */
export const resetUserReset = function (token, email, password, passwordConfirmation) {
  // Build the request.
  let req = buildRequest('POST', '/user/reset/reset', { token: token, email: email, password: password, password_confirmation: passwordConfirmation });

  // Return the execution
  return excuteRequest(req);
}
