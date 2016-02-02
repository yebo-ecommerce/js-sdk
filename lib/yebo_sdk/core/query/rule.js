// Dependencies
import isArray from 'lodash/lang/isArray';

/**
 * Rule class
 */
export class QueryRule {
  /**
   * Creates a new rule to be used in the Yebo Queries
   *
   * @param {string} name The query name
   * @param {string} field The field that is going to be queried.
   *                       In some cases the field is not necessary, in this case
   *                       you can pass `undefined` or an empty string (`''`)
   * @param {array} values Values used in the query
   * @param {string} type Values type. Currenty support `fixed`, `range` and `filter`
   * @param {string} condition The condition between the values. This can be `and` or `or`.
   *
   * @example
   * // Rule for taxon.permalink
   * let rule = new QueryRule('taxon', 'permalink', ['brands']);
   *
   * // Rule for taxon.id
   * let rule new QueryRule('taxonomy', 'id', [1, 2, 3]);
   *
   * // Rule for price (that does not have a `field`)
   * let rule new QueryRule('price', undefined, [15.00, 30.00], 'range');
   *
   * // Rule for taxon.permalink with the condition or
   * let rule new QueryRule('taxonomy', 'permalink', ['brands/nice-brand', 'brands/another-brand'], 'fixed', 'or');
   */
  constructor(name, field, values = [], type = 'fixed', condition = 'and') {
    // Rule name
    this.name = name;

    // Rule field
    this.subName = field;

    // Rule values
    this.values = values;

    // Rule type
    this.type = type;

    // Set the internal conditional
    this.internalCond = condition;

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
