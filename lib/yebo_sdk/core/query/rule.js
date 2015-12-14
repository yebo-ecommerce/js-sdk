// Dependencies
import isArray from 'lodash/lang/isArray';

/**
 * Rule class
 *
 */
export class QueryRule {
  /**
   * Creates a new rule to be used in some of the Yebo Queries
   * @param [...any] args That will be always as the 1st argument the rule name
   * the values(that are always an Array) could be on the 2nd or the
   * 3rd position in the array. The 2nd argument can be the sub-name(property), and
   * the last(3rd or 4th one) will be the internal condition(that is the rule
   * between the values).
   *
   * @example
   * // Rule with name and values
   * let rule = new QueryRule('taxonomy', ['marcas']);
   *
   * // Rule with name, sub-name (sometimes property) and the values.
   * let rule new QueryRule('taxonomy', 'id', ['1']);
   *
   * // Rule with name, sub-name (sometimes property), the values and the internal condition.
   * let rule new QueryRule('taxonomy', 'id', ['1'], 'or');
   *
   * // Rule with name, values and the internal condition
   * let rule new QueryRule('taxonomy', ['marcas'], 'or');
   */
  constructor(...args) {
    // Rule name
    this.name = args[0];

    // Just to know what index are the values
    let valuesIndex;

    // Check if the second args is the rule values
    if( isArray(args[1]) ) {
      // Rule values
      this.values = args[1];

      // Set the index
      valuesIndex = 1;
    } else if( isArray(args[2]) ) {
      // Rule sub name
      this.subName = args[1];

      // Rule values
      this.values = args[2];

      // Set the index
      valuesIndex = 2;
    } else
      throw 'Rule values have to be an Array.';

    // Set the internal conditional
    if( args[valuesIndex + 1] === undefined )
      this.internalCond = 'and';
    else
      this.internalCond = args[valuesIndex + 1];

    // Store the intial values to enable the user to reset them
    this._resetValues = this.values;
  }

  /**
   * Set the rule values
   * @param [array] values The array that will be defined as the rule values
   */
  set values(values) {
    // Check if the values are an array
    if( !isArray(values) )
      throw 'Rule values have to be an Array.';

    // Set it
    this._values = values;
  }

  /**
   * Get the rule values
   */
  get values() {
    // Just return the private value
    return this._values;
  }

  /**
   * Clean the rule values
   * Set an empty array as the rule values
   */
  clean() {
    // Set an empty array to the values
    this.values = [];
  }

  /**
   * Reset the rule values to the default
   */
  reset() {
    // Reset the rule values
    this.values = this._resetValues;
  }
}
