// Dependencies
import { buildRequest, executeRequest } from './../../core/api'

/**
 * User Registration
 * Same params as `registerUser`
 * @return {Object} Request
 */
export const buildRegisterUser = function (email, password, passwordConfirmation) {
  // Build the request.
  return buildRequest('POST', '/users', { user: { email: email, password: password, password_confirmation: passwordConfirmation } });
}

/**
 * User Registration
 * @param {String} email User Email
 * @param {String} password User Password
 * @param {String} passwordConfirmation User Password confirmation
 * @return
 */
export const registerUser = function (email, password, passwordConfirmation) {
  // Build the request.
  let req = buildRegisterUser(email, password, passwordConfirmation);

  // Return the execution
  return executeRequest(req);
}

/**
 * User Login
 * Same params as `loginUser`
 * @return {Object} Request
 */
export const buildLoginUser = function (email, password) {
  // Build the request.
  return buildRequest('POST', '/users/login', { user: email, password: password });
}

/**
 * User Login
 * @param {String} email User Email
 * @param {String} password User Password
 * @return
 */
export const loginUser = function (email, password) {
  // Build the request.
  let req = buildLoginUser(email, password);

  // Return the execution
  return executeRequest(req);
}

/**
 * Calls password change
 * Same params as `requireResetUser`
 * @return {Object} Request
 */
export const buildRequireResetUser = function (email, storeUrl) {
  // Build the request.
  return buildRequest('POST', '/users/reset', { email: email, store_url: storeUrl });
}

/**
 * Calls password change
 * @param {String} email User Email
 * @param {String} storeUrl The URL of recovery that will be sent by email
 * @return
 */
export const requireResetUser = function (email, storeUrl) {
  // Build the request.
  let req = buildRequireResetUser(email, storeUrl);

  // Return the execution
  return executeRequest(req);
}

/**
 * Change User Password
 * Same params as `userReset`
 * @return {Object} Request
 */
export const buildResetUser = function (token, email, password, passwordConfirmation) {
  // Build the request.
  return buildRequest('POST', '/users/reset/reset', { token: token, email: email, password: password, password_confirmation: passwordConfirmation });
}

/**
 * Change User Password
 * @param {String} token Token that was sent by email
 * @param {String} email User Email
 * @param {String} password User Password
 * @param {String} passwordConfirmation User Password confirmation
 * @return
 */
export const resetUser = function (token, email, password, passwordConfirmation) {
  // Build the request.
  let req = buildResetUser(token, email, password, passwordConfirmation);

  // Return the execution
  return executeRequest(req);
}
