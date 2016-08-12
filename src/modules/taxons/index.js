/**
 * Method responsible for seeking taxons
 * @param {Array[Number]} ids
 * @param {String} ranges A list of slugs
 * @param {Integer} page Current search page
 * @param {Integer} perPage Number of taxons per page
 * @param {Integer} taxonomyId Just back taxons that belong to specified taxonomy
 * @return
 */
export const getTaxons = function (ids, taxons, taxonomyId, page = 1, perPage = 25) {
  // ...
}

/**
 * Returns information from a single taxon
 * @return
 */
export const getTaxonId = function () {
  // ...
}

/**
 * Method responsible for seeking taxonomies
 * @param {Integer} page Current search page
 * @param {Integer} perPage Taxons amount per page
 * @return
 */
export const getTaxonomies = function (page = 1, perPage = 25) {
  // ...
}

/**
 * Returns information from a single taxonomy
 * @param
 * @return
 */
export const getTaxonomyId = function () {
  // ...
}
