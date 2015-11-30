// Dependencies
import { Config } from './core/config';
import { Store } from './core/store';
import assign from 'lodash/object/assign';
import RSVP from 'rsvp';

/**
 * Cart
 */
export class Cart {
  /**
   * Initialize a new cart
   */
  constructor(number, userToken) {
    // Define the order prefix
    const prefix = 'R';

    // Define basic infos for the cart
    this._number = number;
    this._userToken = userToken;
  }

  /**
   *
   */
  get _requestProperties() {
    // Request options
    let options = {};

    // Try to use the order number
    if( this._number !== undefined )
      options['number'] = this._number;

    // Try to use the order number
    if( this._userToken !== undefined )
      options['user_token'] = this._userToken;

    // Return!
    return options;
  }

  /**
   * Look for the cart items
   */
  get items() {
    // Send the request
    return this._cartRequest('cart/items', {}, 'GET');
  }

  /**
   * Return the order information
   */
  get order() {
    // Send the request
    return this._cartRequest('cart', {}, 'POST', 'order');
  }

  /**
   * Empty the cart
   * This action removes all the items from the cart
   * @return {Promise}
   */
  empty() {
    // Send the request
    return this._cartRequest('cart/items/empty', {}, 'POST');
  }

  /**
   * Add a variant to the cart
   * @param {Integer} variantID The variant that will be added to the cart
   * @param {Integer} qty The quantity of the variant that will be added
   * @return {Promise}
   */
  add(variantID, qty = 1) {
    // Generate the action options
    let options = { variant: variantID, qty: qty };

    // Send the request
    return this._cartRequest('cart/items/add', options, 'POST');
  }

  /**
   * Remove the item from the cart based on its variant
   * @param {Integer} variantID The variant that will be removed to the cart
   * @param {Integer} qty The quantity of the variant that will be added
   * @return {Promise}
   */
  removeVariant(variantID, qty) {
    // Generate the promise
    return this._remove({variant: variantID}, qty);
  }

  /**
   * Remove the item from the cart based on its id
   * @param {Integer} lineItemI The line item that will be removed to the cart
   * @param {Integer} qty The quantity of the variant that will be added
   * @return {Promise}
   */
  removeItem(lineItemID, qty) {
    // Generate the promise
    return this._remove({line_item: lineItemID}, qty);
  }

  /**
   * General purpose remove a product form the cart
   * @param {Object} options Object that containes the identificator used to find the lineItem
   * @param {Integer} qty Quantity to be removed - If its undefined the full product will be removed
   * @return {Promise}
   */
  _remove(options, qty) {
    // Check if the quantity was not defined
    if( qty !== undefined )
      options['qty'] = qty;

    // Return the request
    return this._cartRequest('cart/items/remove', options, 'POST');
  }

  /**
   * Set the quantity of an cart item
   * @param {Integer} variantID The variant that will be updated
   * @param {Integer} qty The quantity that will be setted for the cart item
   * @return {Promise}
   */
  updateVariant(variantID, qty) {
    // Generate the promise
    return this._update({variant: variantID}, qty);
  }

  /**
   * Set the quantity of an cart item
   * @param {Integer} lineItemID The cart item that will be updated
   * @param {Integer} qty The quantity that will be setted for the cart item
   * @return {Promise}
   */
  updateItem(lineItemID, qty) {
    // Generate the promise
    return this._update({line_item: lineItemID}, qty);
  }

  /**
   * General purpose update a product form the cart
   * @param {Object} options Object that containes the identificator used to find the lineItem
   * @param {Integer} qty Quantity to be removed - If its undefined the full product will be removed
   * @return {Promise}
   */
  _update(options, qty) {
    // Check if the quantity was not defined
    if( qty !== undefined )
      options['qty'] = qty;

    // Return the request
    return this._cartRequest('cart/items/update', options, 'POST');
  }

  /**
   * Responsible to execute all the cart requests
   * It also set the instance variables
   */
  _cartRequest(path, options, method, prop) {
    // Return a promisse
    return new RSVP.Promise((resolve, reject) => {
      Store.fetch(path, assign(this._requestProperties, options), method).then((res) => {
        // Store the order number
        if( res.order.real )
          this._number = res.order.number;

        // Store the token
        this._token = res.order.number;

        // Send it to the public Promise
        if( prop !== undefined )
          resolve(res[prop]);
        else
          resolve(res);
      }).catch(reject);
    });
  }
}
