/**
 * Create type search
 * @param {Object} search Parameters used in the search for products
 */
export const Search = function() {
  // Query will live here
  this.query = { };
};

/**
 * Will search pages
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
Search.prototype.and = function(filters) {
  // Set to query the filters search
  this.query.and = filters;

  //
  return this;
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
