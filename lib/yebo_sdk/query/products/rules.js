// Dependencies
import { QueryRule } from '../../core/query/rule';

/**
 * This class contains helpers to create the ProductQuery rules
 */
export class Rules {
  /**
   * Taxonomy Rule
   * @param [array] values The values used in the query
   * @param [string] field The field that the values will be matched
   * @param [string] cond The condition between the values
   * @return [Rule] The generated query rule
   */
  static taxonomy(values, field = 'permalink', cond = 'and') {
    return new QueryRule('taxons', field, values, cond);
  }

  /**
   * Price range Rule
   * @param [number] min The min price
   * @param [number] max The max price
   * @return [Rule] The generated query rule
   */
  static price(...values) {
    // Check the number of the args
    if( values.length > 2  )
      throw 'price range just accept two values';

    // Create a new Rule
    return new QueryRule('price', values);
  }

  /**
   * Filters Rule
   * @param [string] name The filter name
   * @param [array] values The values used in the query
   * @param [string] cond The condition between the values
   * @return [Rule] The generated query rule
   */
  static filter(name, values, cond = 'or') {
    return new QueryRule('filter', name, values, cond);
  }
}
