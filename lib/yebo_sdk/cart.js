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
    return Store.fetch('cart/items', this._requestProperties);
  }

  /**
   * Add a variant to the cart
   * @param {Integer} variantID The variant that will be added to the cart
   * @param {Integer} qty The quantity of the variant that will be added
   * @return {Promise}
   */
  addItem(variantID, qty = 1) {
    // Generate the action options
    let options = assing(this._requestProperties, { variant: variantID, qty: qty });

    // Send the request
    return Store.fetch('cart/items/add', options, 'POST');
  }

  /**
   * Remove the item from the cart
   * If its not specified the quantity to be removed, remove all of them
   * @param {Integer} variantID The variant that will be added to the cart
   * @param {Integer} qty The quantity of the variant that will be added
   * @return {Promise}
   */
  removeItem(variantID, qty) {
    // Properties
    let properties = this._requestProperties;

    // Check if the quantity was not defined
    if( qty === undefined ) {
      // Generate the action options
      let options = assing(properties, { variant: variantID });

      // Return the request
      return Store.fetch('cart/items/remove', options, 'POST');
    }

    // Create a new promise
    return new RSVP.Promise((resolve, reject) => {
      // Get the lineItems
      Store.fetch(`cart/items/${variantID}`, properties).then((lineItem) => {
        // Update based on its quantity
        this.update(variantID, lineItem.qty - qty).then(resolve).catch(reject);
      }).catch(reject);
    });
  }

  /**
   * Set the quantity of an cart item
   * @param {Integer} variantID The variant that will be updated
   * @param {Integer} qty The quantity that will be setted for the cart item
   * @return {Promise}
   */
  updateItem(variantID, qty) {
    // Generate the action options
    let options = assing(this._requestProperties, { variant: variantID, qty: qty });

    // Send the request
    return Store.fetch('cart/items/update', options, 'POST');
  }
}
