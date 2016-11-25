/**
 * Create type search
 */
export const Search = function() {
  // Query will live here
  this.query = {};
};

/**
 * Will search page
 * @param {Number} page Page number of the product listing
 * @return {Search} Current Search
 */
Search.prototype.page = function(page) {
  // Set to query the number search
  this.query.page = page;

  //
  return this;
}

/**
 * Will search products by name
 * @param {String} name Search by product name
 * @return {Search} Current Search
 */
Search.prototype.byName = function(name) {
  // Set to query the name search
  this.query.name = name;

  //
  return this;
}

/**
 * Will search perPage
 * @param {Number} Quantity of products per page
 * @return {Search} Current Search
 */
Search.prototype.perPage = function(perPage) {
  // Set to query the number search
  this.query.per_page = perPage;

  //
  return this;
}
/**
 * Create Search
 * @return {Search} Current Search
 */
export const createSearch = function() {
  // Initial state
  return new Search();
}

/**
 * Will search for Filters
 * @param {Array[Object]} and Filters that relates 'and'
 * @return {Search} Current Search
 */
Search.prototype.and = function(...filters) {
  //
  if (this.query.and === undefined)
    this.query.and = []

  // Set to query the filters search
  if (filters[0] instanceof Array)
    this.query.and.push(filters);
  else
    this.query.and.push(...filters);

  //
  return this;
}

/**
 * Build the search
 * @return {Object} The internal query
 */
Search.prototype.build = function() {
  // Result
  let res = {};

  //
  if (this.query.page !== undefined)
    res.page = this.query.page;

  //
  if (this.query.name !== undefined)
    res.name = this.query.name;

  //
  if (this.query.perPage !== undefined)
    res.per_page = this.query.perPage;

  //
  if (this.query.and !== undefined || this.query.or !== undefined)
    res.filters = {};

  //
  if (this.query.and !== undefined)
    res.filters.and = this.query.and;

  //
  if (this.query.or !== undefined)
    res.filters.or = this.query.or;

  // Returning
  return res;
}

//
// getProdutcs(search)
// { } => Inicial
// { name } => searchByName
// { name, order } => setOrder
// { name, order, page } => setPage
//
// // Create Rules
// let rules = [
//   createFilter('taxons', 'permalink', ['merceria/peixes', 'marcas/...'], 'fixed')
// ]
// // name: taxons(Categorias) - filter(Filtros) - price(Preço)
// // type: fixed(Fixo) - range(Intervalo - só para preço)
//
// // Create search
// let busca = createSearch()
// busca.byName('manteiga')
//      .orderBy('name', 'asc')
//      .and(rules)
//      .or(fltrs)
//      .page(2)
