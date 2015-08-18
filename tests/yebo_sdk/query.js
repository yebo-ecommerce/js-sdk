// Testing requests
import Query from '../../lib/yebo_sdk/query';

//
var assert = require('chai').assert,
    expect = require('chai').expect,
    should = require('chai').should();

module.exports = function() {
  describe('Query', () => {
    // IT template
    // it('', (done) => {
    //
    // });

    //
    it('should format the filter', () => {
      // Create new query
      let query = new Query();

      // Format
      let formatted = query._format('color', ['blue', 'red']);

      // Assertions
      expect(formatted).to.have.property('name');
      expect(formatted).to.have.property('values');
      expect(formatted).to.have.property('field');
      expect(formatted).to.have.property('type');
      expect(formatted).to.have.property('execution');
    });

    //
    it('should generate the filter', () => {
      // Create new query
      let query = new Query();

      // Do the query
      query
        .filter('color', ['blue', 'red']);

      // Assertions
      expect(query._filter.or).to.have.length(1);
    });

    //
    it('should generate two filters with `and` operator', () => {
      // Create new query
      let query = new Query();

      // Do the query
      query
        .filter('color', ['blue', 'red'])
        .and()
        .filter('size', ['s', 'm', 'l']);

      // Assertions
      expect(query._filter.or).to.have.length(1);
      expect(query._filter.and).to.have.length(1);
    });

    //
    it('should generate a taxonomy filter', () => {
      // Create new query
      let query = new Query();

      // Do the query
      query
        .taxonomy(['camisetas', 'promocao']);

      // Assertions
      expect(query._filter.or).to.have.length(1);

      expect(query._filter.or[0].name).to.equal('taxonomy');
      expect(query._filter.or[0].field).to.equal('permalink');

      expect(query._filter.or[0]).to.have.property('values');
      expect(query._filter.or[0]).to.have.property('type');
      expect(query._filter.or[0]).to.have.property('execution');
    });

    //
    it('should generate a price filter with two values', () => {
      // Create new query
      let query = new Query();

      // Do the query
      query
        .price(0, 15);

      // Assertions
      expect(query._filter.or).to.have.length(1);

      expect(query._filter.or[0].name).to.equal('price');
      expect(query._filter.or[0].values).to.be.a('array');
      expect(query._filter.or[0].values).to.have.length(2);

      expect(query._filter.or[0].values[0]).to.equal(0);
      expect(query._filter.or[0].values[1]).to.equal(15);
    });

    //
    it('should generate a price filter with one value', () => {
      // Create new query
      let query = new Query();

      // Do the query
      query
        .price(30);

      // Assertions
      expect(query._filter.or).to.have.length(1);

      expect(query._filter.or[0].name).to.equal('price');
      expect(query._filter.or[0].values).to.be.a('array');
      expect(query._filter.or[0].values).to.have.length(1);

      expect(query._filter.or[0].values[0]).to.equal(30);
    });

    //
    it('should generate a sort', () => {
      // Create new query
      let query = new Query();

      // Do the query
      query
        .sort('price', 'asc');

      // Assertions
      expect(query._sort).to.have.property('field');
      expect(query._sort).to.have.property('order');
    });

    //
    it('should generate a search', () => {
      // Create new query
      let query = new Query();

      // Do the query
      query
        .search('product-name');

      // Assertions
      expect(query._search).to.equal('product-name');
    });

    //
    it('should generate page', () => {
      // Create new query
      let query = new Query();

      // Do the query
      query
        .page(1);

      // Assertions
      expect(query._page).to.equal(1);
    });

    //
    it('should generate per page', () => {
      // Create new query
      let query = new Query();

      // Do the query
      query
        .perPage(15);

      // Assertions
      expect(query._perPage).to.equal(15);
    });

    it('should build the query', () => {
      // Create new query
      let query = new Query();

      // Do the query
      query
        .search('product-name')
        .and()
        .taxonomy(['camisetas', 'promocao'])
        .and()
        .filter('color', ['blue', 'red'])
        .and()
        .price(0, 30);

      // Build it
      let build = query.build();

      // Assertions
      expect(build).to.have.property('page');
      expect(build).to.have.property('per_page');
      expect(build).to.have.property('filters');
      expect(build).to.have.property('name');
    });
  });
};
