/**
 * User Registration
 * @param {String} email User Email
 * @param {String} password User Password
 * @param {String} passwordConfirmation User Password confirmation
 * @return
 */
export const registerUser = function (email, password, passwordConfirmation) {
  // ...
}

/**
 * User Login
 * @param {String} email User Email
 * @param {String} password User Password
 * @return
 */
export const loginUser = function (email, password) {
  // ...
}

/**
 * Calls password change
 * @param {String} email User Email
 * @param {String} storeUrl The URL of recovery that will be sent by email
 * @return
 */
export const resetUser = function (email, storeUrl) {
  // ...
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
  // ...
}
