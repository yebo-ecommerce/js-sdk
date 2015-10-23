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
  constructor(identificator) {
    // Define the order prefix
    const prefix = 'R';

    // Define basic infos for the cart
    this._number = undefined;
    this._token = undefined;
    this._user = undefined;

    // Check if the cart is already initialized
    if( identificator !== undefined ) {
      if( identificator[0] === prefix )
        this._number = identificator;
      else
        this._token = identificator;
    }
  }

  /**
   *
   */
  get _requestProperties() {
    // Try to use the order number
    if( this._number !== undefined )
      return { number: this._number };

    // Try to use the guestToken
    if( this._token !== undefined )
      return { token: this._token };

    // Use nothing (this is a new cart)
    return {};
  }

  /**
   * Look for the cart items
   */
  get items() {
    // Return a promisse
    return new RSVP.Promise((resolve, reject) => {
      Store.fetch('cart/items', this._requestProperties).then((res) => {
        // Store the order number
        if( res.order.real )
          this._number = res.order.number;

        // Store the token
        this._token = res.order.number;

        // Send it to the public Promise
        resolve(res);
      }).catch(reject);
    });
  }

  /**
   * Return the order information
   */
  get order() {
    // Return a promisse
    return new RSVP.Promise((resolve, reject) => {
      Store.fetch('cart', this._requestProperties).then((res) => {
        // Store the order number
        if( res.order.real )
          this._number = res.order.number;

        // Store the token
        this._token = res.order.number;

        // Send it to the public Promise
        resolve(res.order);
      }).catch(reject);
    });
  }

  /**
   * Add a variant to the cart
   * @param {Integer} variantID The variant that will be added to the cart
   * @param {Integer} qty The quantity of the variant that will be added
   * @return {Promise}
   */
  add(variantID, qty = 1) {
    // Generate the action options
    let options = assign(this._requestProperties, { variant: variantID, qty: qty });

    // Send the request
    return Store.fetch('cart/items/add', options, 'POST');
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
    // Properties
    let properties = this._requestProperties;

    // Check if the quantity was not defined
    if( qty !== undefined )
      options['qty'] = qty;

    // Generate the action options
    options = assign(properties, options);

    // Return the request
    return Store.fetch('cart/items/remove', options, 'POST');
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
    // Properties
    let properties = this._requestProperties;

    // Check if the quantity was not defined
    if( qty !== undefined )
      options['qty'] = qty;

    // Generate the action options
    options = assign(properties, options);

    // Return the request
    return Store.fetch('cart/items/update', options, 'POST');
  }
}
