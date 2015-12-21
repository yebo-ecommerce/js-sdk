// Utils
import assign from 'lodash/object/assign';
import isEmpty from 'lodash/lang/isEmpty';
import isArray from 'lodash/lang/isArray';
import includes from 'lodash/collection/includes';

// Dependencies
import { Store } from '../core/store';

// Import parent class
import { Query } from '../core/query';

// Import the Products rules
import { Rules } from './products/rules';

/**
 * Product Query class
 * @example
 * // Defining the variables
 * var query = new ProductQuery(),
 *     rules = [
 *       new QueryRule('taxons', ['marcas', 'camiseta']),
 *       new QueryRule('filter', 'cor', ['azul', 'amarelo']),
 *       new QueryRule('price', [15, 25])
 *     ];
 *
 * // Add a text search
 * query.search('camisetas');
 *
 * // Add it to the query
 * query.and(rules);
 *
 * // Define the how the products will be sorted
 * query.sortBy('price', 'asc');
 *
 * // Set the limit per page
 * query.perPage(15);
 *
 * // And... the page number
 * query.page(5);
 */
export class Products extends Query {
  /**
   *
   */
  constructor(parentQuery) {
    // Parent call
    super(parentQuery);

    // Set the query name
    this.queryName = 'product';

    // Set the endpoint
    this.endPoint = 'products';

    // Default Rules
    let defaultRules = {
      and: [],
      or: []
    };

    // Default options
    let defaultOptions = {
      search: '',
      sort: {},
      page: 1,
      perPage: 15,
    }

    // Merge the rules
    this._rules = assign(defaultRules, this._rules);

    // Merge the options
    this._options = assign(defaultOptions, this._options);
  }

  /**
   * Alias to the search option
   * @param [string] text The text that will be used to search in the products names
   */
  search(text) {
    return this.addOption('search', text);
  }

  /**
   * Alias to the sortBy option
   * @param [string] field The product field that will be used to sort the list
   * @param [string] order The order that will be used. Can be just `asc` or `desc`
   */
  sortBy(field, order = 'asc') {
    // Verify the order
    if( !includes(['asc', 'desc'], order) )
      throw 'the sort orders are `asc` and `desc`';

    // Add the option
    return this.addOption('sort', { field: field, order: order });
  }

  /**
   * Alias to the perPage option
   * @param [number] n The number of result per page
   */
  perPage(n = 15) {
    return this.addOption('perPage', n);
  }

  /**
   * Alias to the page option
   * @param [number] n The page of the list
   */
  page(n = 1) {
    return this.addOption('page', n);
  }

  /**
   * Add rules to the `and` condition
   * @param [...QueryRule] rules The rules can be passed as an unique array
   * or all the rules.
   */
  and(...rules) {
    // Check if there is just one array
    if( isArray(rules[0]) )
      rules = rules[0];

    // Add the rules
    return this.addRules('and', rules);
  }

  /**
   * Add rules to the `or` condition
   * @param [...QueryRule] rules The rules can be passed as an unique array
   * or all the rules.
   */
  or(...rules) {
    // Check if there is just one array
    if( isArray(rules[0]) )
      rules = rules[0];

    // Add the rules
    return this.addRules('or', rules);
  }

  /**
   * Build the Query
   */
  build() {
    // Call the base build
    let buildResult = super.build();

    // Create result
    let result = {
      page: buildResult.options.page,
      per_page: buildResult.options.perPage
    };

    // Check if filters are empty
    let filters = {};

    // Check `or` filters
    if( !isEmpty(buildResult.rules.or) )
      filters.or = buildResult.rules.or;

    // Check `and` filters
    if( !isEmpty(buildResult.rules.and) )
      filters.and = buildResult.rules.and;

    // Set filters if it is not empty
    if( !isEmpty(filters) )
      result.filters = filters;

    //
    if( !isEmpty(buildResult.options.search) )
      result.name = buildResult.options.search;

    //
    if( !isEmpty(buildResult.options.sort) )
      result.sort = buildResult.options.sort;

    // Return the result
    return result;
  }

  /**
   * Build the rule
   */
  buildRule(rule) {
    // Check if the rule has any value
    if( isEmpty(rule.values) )
      return undefined;

    // The result of the rule build
    let result = {
      name: rule.name,
      values: rule.values,
      field: rule.subName,
      // @todo Maybe find a way to define it in the rule
      type: rule.name === 'price' ? 'range' : 'fixed',
      execution: rule.internalCond
    }

    // Return the result
    return result;
  }

  /**
   * Helper with all the possible rules for this query
   */
  static get Rules() {
    return Rules;
  }

  /*
   * Get the number of products based on the query
   * @param {integer} priceInterval The interval that will be used to generate tha price ranges
   * @param {boolean} execute If its false the method return the params used to get the aggs
   * @return {Object} The result of the aggregations
   */
  aggregations(priceInterval = 50, execute = true) {
    // Create the aggs params
    let params = assign({ price_interval: priceInterval }, this.build());

    // Check if its necessary to execute the aggs
    if( !execute )
      return params;

    // Return the Fetch!
    return Store.fetch(`${this.endPoint}/aggs`, params);
  }
}
