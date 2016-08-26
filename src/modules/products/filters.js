/**
 * Create Filter
 * @param {String} name The name of filter
 * @param {String} field The field of filter
 * @param {String} type The type of filter
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
