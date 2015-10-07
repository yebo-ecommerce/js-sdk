/**
 * Config Class
 * This class is reponsible to store all the configurations from the SDK
 * @todo Store the config in the Browser Cache also
 */
export class Config {
  /**
   * This variable is where all the config are stored
   */
  static get _store() {
    // Check if __store exists
    if( this.__store === undefined )
      this.__store = {  };

    // Return the __store value
    return this.__store;
  }

  /**
   * Set
   * @param {String} key The key of the value that will be stored
   * @param {Any} value The value to be stored
   * @param {Object} options Options for the storage
   */
  static set(key, value, options = {}) {
    // Set the new value to store
    this._store[key] = value;

    // Default return
    return true;
  }

  /**
   * Get - Retrieve the stored info
   * @param {String} key The same key used to store the value
   * @param {Boolean} required If this flag is true, when get the key if the value is undefined it throw an error
   */
  static get(key, required = false) {
    // Get the key value
    let value = this._store[key];

    // If its required and it is undefined throw an error
    if( require === true && value === undefined  )
      throw `The key ${key} is not defined and its required.`

    // Return the value
    return this._store[key];
  }
}
