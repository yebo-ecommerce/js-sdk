/**
 * Create type search
 * @param {Object} search Parameters used in the search for products
 * @return {Object} The search of API
 */
export const Search = function() {
  // Query will live here
  this.query = { };
};

/**
 * Will search products by name
 * @param {String} name Search by product name
 * @return {Object} The name
 */
Search.prototype.byName = function(name) {
  // Set to query the name search
  this.query.name = name;

  //
  return this;
}

/**
 * Will search pages
 *@param {}
 *@return {Object}
 */
Search.prototype.page = function(number) {
  // Set to query the name search
  this.query.page = number;

  //
  return this;
}

/**
 * Will search for Filters
 * @param {Array[Object]} and Filters that relates 'and'
 * @return {Object} The API formatted filters
 */
Search.prototype.and = function(filters) {
  // Set to query the name search
  this.query.and = filters;

  //
  return this;
}

/**
 * Create Search
 *@param
 *@return
 */
export const createSearch = function() {
  // Initial state
  return new Search();
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
