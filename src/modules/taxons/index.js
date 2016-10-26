// Dependencies
import { buildRequest, executeRequest } from './../../core/api'

/**
 * Method responsible for seeking taxons
 * Same params as `getTaxons`
 * @return {Object} Request
 */
export const buildGetTaxons = function (ids, taxons, taxonomyId, page = 1, perPage = 25) {
  // Build the request.
  return buildRequest('GET', '/taxons', { ids: ids, taxons: taxons, taxonomy_id: taxonomyId, page: page, per_page: perPage });
}

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
  let req = buildGetTaxons(ids, taxons, taxonomyId, page, perPage);

  // Return the execution
  return executeRequest(req);
}

/**
 * Returns information from a single taxon
 * Same params as `getTaxonId`
 * @return {Object} Request
 */
export const buildGetTaxonId = function () {
  // Build the request.
  return buildRequest('GET', `/taxon/${id}`, {});
}

/**
 * Returns information from a single taxon
 * @return
 */
export const getTaxonId = function () {
  // Build the request.
  let req = buildGetTaxonId();

  // Return the execution
  return executeRequest(req);
}

/**
 * Method responsible for seeking taxonomies
 * Same params as `getTaxonomies`
 * @return {Object} Request
 */
export const buildGetTaxonomies = function (page = 1, perPage = 25) {
  // Build the request.
  return buildRequest('GET', '/taxonomies', { page: page, per_page: perPage });
}

/**
 * Method responsible for seeking taxonomies
 * @param {Integer} page Current search page
 * @param {Integer} perPage Taxons amount per page
 * @return
 */
export const getTaxonomies = function (page = 1, perPage = 25) {
  // Build the request.
  let req = buildGetTaxonomies(page, perPage);

  // Return the execution
  return executeRequest(req);
}

/**
 * Returns information from a single taxonomy
 * Same params as `getTaxonomyId`
 * @return {Object} Request
 */
export const buildGetTaxonomyId = function () {
  // Build the request.
  return buildRequest('GET', `/taxonomy/${id}`, {});
}

/**
 * Returns information from a single taxonomy
 * @return
 */
export const getTaxonomyId = function () {
  // Build the request.
  let req = buildGetTaxonomyId();

  // Return the execution
  return executeRequest(req);
}
