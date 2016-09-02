/**
 * This file will manage all the configurations used by
 * the hole SDK.
 */

/**
 * Configurations
 * Where all the configurations will live
 */
const config = {
  apiURL: 'yebo-api.com.br/api',
  version: 'v2',
  protocol: 'https'
};

/**
 * Set the configuration
 * @param {String} name Configuration name
 * @param {Any} value A value that will be stored
 * @param {Boolean} replace If the configuration is already setted
 *                          if will be replace with the new value?
 * @return {Boolean} Success or Not
 */
export const set = function(name, value, replace = true) {
  // Check if the value exists and if it will be replaced
  if( exists(name) && !replace)
    return false;

  // Set the value
  config[name] = value;

  // Return success
  return true;
}

/**
 * Unset a configuration
 * @param {String} name Configuration name
 * @return {Boolean} Success or Not
 */
export const unset = function(name) {
  // Check if the value exists
  if( !exists(name) )
    return false;

  // Delete from the object
  delete config[name];

  // Return success
  return true;
}

/**
 * Get the value of a configuration
 * @param {String} name The configuration name
 * @param {Any} value If there is no configuration return
 *                    the predefined value
 * @return {Any} The Configuration value or the default value
 */
export const get = function(name, value = undefined) {
  // Check if the config exists
  if( !exists(name) )
    return value;

  // Return the value itself
  return config[name];
}

/**
 * Check if the configuration is setted
 * @param {String} name The configuration name
 * @param {Boolean} Exists or not
 */
export const exists = function(name) {
  // Check if the config object has the property
  return config.hasOwnProperty(name);
}
