/**
 * Create Filter for Products
 * @param {String} name The name of filter
 * @param {String} field The field of filter ( )
 * @param {String} type The type of filter (has two type, range and fixed)
 * @param {Array[String/Object]} values The values of filter
 * @return {Object} The API formatted filter
 */
export const createFilter = function(name, field, type, values) {
  return {
    name: name,
    field: field,
    type: type,
    values: values
  };
}

/**
 * Shortcut to directly create a `taxons` filter
 * @param {Array[String/Number] values This could the taxons `permalinks` or `ids`
 * @return {Object} The API formatted filter
 */
export const createTaxonsFilter = function(values, permalink = true) {
  // Field of the filter
  let field;

  // Check the type of values
  if (isNaN(values[0])) {
    field = 'permalink';
  } else {
    field = 'id';
  }

  // Return the creation
  return createFilter('taxons', field, 'fixed', values);
}
