//
var isArray = require('lodash/lang/isArray'),
    isEmpty = require('lodash/lang/isEmpty');

/**
 * Product Query class
 * @example
 * var query = new ProductQuery();

 * query
 *   .search('camiseta')
 *   .filter('cor', ['azul', 'amarelo'])
 *   .and()
 *   .taxonony(['marcas', 'camisetas'])
 *   .or()
 *   .taxonomy(['promocao'])
 *   .and()
 *   .price(15, 25)
 *   .run(function(err, result) {
 *    console.log(err, result);
 *   })
 */
export default class ProductQuery {
  /**
   * @todo Create a new query based in other
   */
  constructor() {
    // Initialize
    this._search = '';
    this._filter = {
      and: [],
      or: []
    };
    this._sort = {};

    this._page = 1;
    this._perPage = 15;

    this._currentOperator = 'or';
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
  price(...values) {
    if( values.length > 2 )
      throw 'price range just accept two values';

    // Generate the filter
    this._generateFilter(
      this._format('price', values, '', 'range')
    );

    // Return the instance
    return this;
  }

  /**
   * Make an query in the taxonomies
   * @param {array} values Array that will be searched
   * @param {string} field The field that the values will match
   * @param {string} execution The execution value
   * @example
   * query.taxonomy(['camisetas', 'promocao']);
   */
  taxonomy(values, field = 'permalink', execution = 'and') {
    // Generate the filter
    this._generateFilter(
      this._format('taxonomy', values, field, 'fixed', execution)
    );

    // Return the instance
    return this;
  }

  /**
   * Make an query in Yebo Filters
   * @param {string} name Filter name
   * @param {array} values Array with the values that will be searched
   * @param {string} execution The execution value
   * @example
   * query.filter('cor', ['azul', 'amarelo']);
   */
  filter(name, values, execution = 'and') {
    // Generate the filter
    this._generateFilter(
      this._format(name, values, '', 'fixed', execution)
    );

    // Return the instance
    return this;
  }

  /**
   * Set the search page
   * @param {integer} page Page number
   */
  page(page) {
    //
    this._page = page;

    // Return the instance
    return this;
  }

  /**
   * Set the per page results
   * @param {integer} perPage Per page number
   */
  perPage(perPage) {
    //
    this._perPage = perPage;

    // Return the instance
    return this;
  }

  /**
   * Change the current operator to `or`
   */
  or() {
    // Set the current operator
    this._currentOperator = 'or';

    // Return the instance
    return this;
  }

  /**
   * Change the current operator to `and`
   */
  and() {
    // Set the current operator
    this._currentOperator = 'and';

    // Return the instance
    return this;
  }

  /**
   * Search products by the name
   * @param {string} name Name that will be searched
   * @example
   * query.search('product-name');
   */
  search(name) {
    // Set the search
    this._search = name;

    // Return the instance
    return this;
  }

  /**
   * Sort the search by a specific field and order
   * @param {string} field Field that will be used to order. Suported: `name`, `price`
   * @param {string} order `asc` or `desc`
   * @example
   * query.sort('price', 'asc');
   */
  sort(field, order = 'asc') {
    // Set sort
    this._sort = {
      field: field,
      order: order
    };

    // Return the instance
    return this;
  }

  /**
   * Will generate the object that will be sent to Yebo
   * @example
   * query.build();
   */
  build() {
    // Create result
    let result = {
      page: this._page,
      per_page: this._perPage,
      filters: this._filter
    };

    //
    if( this._search !== '' )
      result.name = this._search;

    //
    if( !isEmpty(this._sort) )
      result.sort = this._sort;

    // Return the result
    return result;
  }

  /**
   * Generate the filter with the _currentOperator
   */
  _generateFilter(filter) {
    this._filter[this._currentOperator].push(filter);
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
      type: type,
      execution: execution
    };

    //
    return result;
  }
}
