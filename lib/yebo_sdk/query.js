//
var isArray = require('lodash/lang/isArray');

/**
 * Query class
 * @example
 * var query = new Query();

 * query
 *   .filter('cor', ['azul', 'amarelo'])
 *   .and()
 *   .taxonony(['marcas', 'camisetas'])
 *   .or()
 *   .taxonomy(['promocao'])
 *   .and()
 *   .price(15, 25)
 */
export default class Query {
  /**
   * @example
   * query.filter()
   */
  filter() {

  }

  /**
   * Generate an API like data structure
   * @param {string} name The name of the filter
   * @param {array} values The group of values
   * @param {string} field The field that will be searched
   * @param {string} execution How the `values` are related. `or` `and`
   */
  _format(name, values, field = '', type = 'fixed', execution = 'and') {
    // Checks the
    if( !isArray(values) )
      throw 'values must be an array';

    let result = {
      name: name,
      values: values,
      field: field,
      type: fixed,
      execution: execution
    };

    //
    return result;
  }
}
