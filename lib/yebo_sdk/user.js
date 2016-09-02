// Dependencies
import RSVP from 'rsvp';
// import { Config } from './core/config';
import { Store } from './core/store';

/**
 * User Class
 */
export class User {
  /**
   * Login the user
   * @param {String} username Username used to login
   * @param {String} password Password used to login
   * @param {String} orderToken If there is an order related to the token without an user, it will relate it to the current user
   */
  static login(username, password, orderToken) {
    // Action options
    let options = {
      user: username,
      password: password
    };

    // Check if the orderToken is defined
    if( orderToken !== undefined )
      options['order_token'] = orderToken;

    // Return a promise
    return new RSVP.Promise((resolve, reject) => {
      // Resquest it
      Store.fetch('users/login', options, 'POST').then((res) => {
        // Everything ok
        resolve(new this(res.user.email, res.user.token));
      }).catch(reject);
    });
  }

  /**
   * Register a new user
   * @param {String} email Email that will be created
   * @param {String} password Password for the user that will be created
   * @param {String} confPassword Password confirmation, it should be the same as the password
   * @param {String} orderToken If there is an order related to the token without an user, it will relate it to the current user
   */
  static register(email, password, confPassword, orderToken) {
    // Action options
    let options = {
      email: email,
      password: password,
      password_confirmation: confPassword
    };

    // Check if the orderToken is defined
    if( orderToken !== undefined )
      options['order'] = orderToken;

    // Return a promise
    return new RSVP.Promise((resolve, reject) => {
      // Resquest it
      Store.fetch('users/create', options, 'POST').then((res) => {
        // Everything ok
        resolve(new this(res.user.email, res.user.token));
      }).catch(reject);
    });
  }

  /**
   * Initialize an user
   */
  constructor(email, token) {
    // Set the arguments to the class
    this.email = email;
    this.token = token;
  }
}
