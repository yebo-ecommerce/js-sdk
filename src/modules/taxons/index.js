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
  // Build the request.
  let req = buildRequest('GET', '/taxons', { ids: ids, taxons: taxons, taxonomy_id: taxonomyId, page: page, per_page: perPage });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Returns information from a single taxon
 * @return
 */
export const getTaxonId = function () {
  // Build the request.
  let req = buildRequest('GET', `/taxon/${id}`, {});

  // Return the execution
  return excuteRequest(req);
}

/**
 * Method responsible for seeking taxonomies
 * @param {Integer} page Current search page
 * @param {Integer} perPage Taxons amount per page
 * @return
 */
export const getTaxonomies = function (page = 1, perPage = 25) {
  // Build the request.
  let req = buildRequest('GET', '/taxonomies', { page: page, per_page: perPage });

  // Return the execution
  return excuteRequest(req);
}

/**
 * Returns information from a single taxonomy
 * @param
 * @return
 */
export const getTaxonomyId = function () {
  // Build the request.
  let req = buildRequest('GET', `/taxonomy/${id}`, {});

  // Return the execution
  return excuteRequest(req);
}
