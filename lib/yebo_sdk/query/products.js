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
  }

  /**
   * Helper with all the possible rules for this query
   */
  static get Rules() {
    return Rules;
  }

  /**
   * Price range filter
   * @example
   * query.price(0, 15);
   * // or...
   * query.price(15, 30);
   * // or...
   * query.price(30);
   */
  // price(...values) {
  //   if( values.length > 2 )
  //     throw 'price range just accept two values';

  //   // Generate the filter
  //   this._generateFilter(
  //     this._format('price', values, '', 'range')
  //   );

  //   // Return the instance
  //   return this;
  // }

  // /**
  //  * Make an query in the taxonomies
  //  * @param {array} values Array that will be searched
  //  * @param {string} field The field that the values will match
  //  * @param {string} execution The execution value
  //  * @example
  //  * query.taxonomy(['camisetas', 'promocao']);
  //  */
  // taxonomy(values, field = 'permalink', execution = 'and') {
  //   // Generate the filter
  //   this._generateFilter(
  //     this._format('taxonomy', values, field, 'fixed', execution)
  //   );

  //   // Return the instance
  //   return this;
  // }

  // /**
  //  * Make an query in Yebo Filters
  //  * @param {string} name Filter name
  //  * @param {array} values Array with the values that will be searched
  //  * @param {string} execution The execution value
  //  * @example
  //  * query.filter('cor', ['azul', 'amarelo']);
  //  */
  // filter(name, values, execution = 'and') {
  //   // Generate the filter
  //   this._generateFilter(
  //     this._format(name, values, '', 'fixed', execution)
  //   );

  //   // Return the instance
  //   return this;
  // }

  // /**
  //  * Set the search page
  //  * @param {integer} page Page number
  //  */
  // page(page) {
  //   //
  //   this._attrs.page = page;

  //   // Return the instance
  //   return this;
  // }

  // /**
  //  * Set the per page results
  //  * @param {integer} perPage Per page number
  //  */
  // perPage(perPage) {
  //   //
  //   this._attrs.perPage = perPage;

  //   // Return the instance
  //   return this;
  // }

  // /**
  //  * Change the current operator to `or`
  //  */
  // or() {
  //   // Set the current operator
  //   this._attrs.currentOperator = 'or';

  //   // Return the instance
  //   return this;
  // }

  // /**
  //  * Change the current operator to `and`
  //  */
  // and() {
  //   // Set the current operator
  //   this._attrs.currentOperator = 'and';

  //   // Return the instance
  //   return this;
  // }

  // /**
  //  * Search products by the name
  //  * @param {string} name Name that will be searched
  //  * @example
  //  * query.search('product-name');
  //  */
  // search(name) {
  //   // Set the search
  //   this._attrs.search = name;

  //   // Return the instance
  //   return this;
  // }

  // /**
  //  * Sort the search by a specific field and order
  //  * @param {string} field Field that will be used to order. Suported: `name`, `price`
  //  * @param {string} order `asc` or `desc`
  //  * @example
  //  * query.sort('price', 'asc');
  //  */
  // sort(field, order = 'asc') {
  //   // Set sort
  //   this._attrs.sort = {
  //     field: field,
  //     order: order
  //   };

  //   // Return the instance
  //   return this;
  // }

  // /**
  //  * Will generate the object that will be sent to Yebo
  //  * @example
  //  * query.build();
  //  */
  // build() {
  //   // Create result
  //   let result = {
  //     page: this._attrs.page,
  //     per_page: this._attrs.perPage
  //   };

  //   // Check if filters are empty
  //   //
  //   let filters = {};

  //   // Check `or` filters
  //   if( ! isEmpty(this._attrs.filter.or) )
  //     filters.or = this._attrs.filter.or;

  //   // Check `and` filters
  //   if( ! isEmpty(this._attrs.filter.and) )
  //     filters.and = this._attrs.filter.and;

  //   // Set filters if it is not empty
  //   if( ! isEmpty(filters) )
  //     result.filters = filters;

  //   //
  //   if( this._attrs.search !== '' )
  //     result.name = this._attrs.search;

  //   //
  //   if( !isEmpty(this._attrs.sort) )
  //     result.sort = this._attrs.sort;

  //   // Return the result
  //   return result;
  // }

  // /*
  //  * Get the number of products based on the query
  //  * @param {integer} priceInterval The interval that will be used to generate tha price ranges
  //  * @param {boolean} execute If its false the method return the params used to get the aggs
  //  * @return {Object} The result of the aggregations
  //  */
  // aggregations(priceInterval = 50, execute = true) {
  //   // Create the aggs params
  //   let params = assign({ price_interval: priceInterval }, this.build());

  //   // Check if its necessary to execute the aggs
  //   if( !execute )
  //     return params;

  //   // Return the Fetch!
  //   return Store.fetch(`${this.endPoint}/aggs`, params);
  // }

  // /**
  //  * Generate the filter with the _currentOperator
  //  */
  // _generateFilter(filter) {
  //   this._attrs.filter[this._attrs.currentOperator].push(filter);
  // }

  // /**
  //  * Generate an API like data structure
  //  * @param {string} name The name of the filter
  //  * @param {array} values The group of values
  //  * @param {string} field The field that will be searched
  //  * @param {string} execution How the `values` are related. `or` `and`
  //  */
  // _format(name, values, field = '', type = 'fixed', execution = 'and') {
  //   // Checks the
  //   if( !isArray(values) )
  //     throw 'values must be an array';

  //   let result = {
  //     name: name,
  //     values: values,
  //     field: field,
  //     type: type,
  //     execution: execution
  //   };

  //   //
  //   return result;
  // }
}
