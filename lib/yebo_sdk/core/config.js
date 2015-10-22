// Dependencies
import capitalize from 'lodash/string/capitalize';

/**
 * Config basic keys
 */
var configKeys = ['store', 'internal'],
    key;

/**
 * Config Class
 * This class is reponsible to store all the configurations from the SDK
 * The specified keys are:
 *   - 'store:*' - Values related to the store. Ex: 'store:url' - Set the store URL.
 *   - 'internal:*' - Values related to the SDK itself.
 *     - 'internal:resp:*' - Values related to the SDK responsibilities. Ex: 'internal:resp:user:session' - Set if the sdk will be responsible for creating the user session.
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

/**
 * Define shortcuts to the basic keys
 */
for( key of configKeys ) {
  // Format the key
  let formattedKey = capitalize(key);

  // Get alias
  Config[`get${formattedKey}`] = (prefix, ...opts) => {
    return Config.get(`internal:${prefix}`, ...opts);
  }

  // Get alias
  Config[`set${formattedKey}`] = (prefix, ...opts) => {
    return Config.set(`internal:${prefix}`, ...opts);
  }
}
