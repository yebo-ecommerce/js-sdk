// Testing requests
// import { Products } from '../../../index';
import chai from 'chai';

//
var Products = YeboSDK.Products,
    Rules = Products.Rules,
    expect = chai.expect,
    should = chai.should(),
    assert = chai.assert;

module.exports = function() {
  describe('Products Query', () => {
    describe('Rules', () => {
      it('taxonomy rule should be generated', () => {
        // Generate the Rule
        let rule = Rules.taxonomy(['marcas', 'sony']);

        // Assertions
        expect(rule.name).to.equal('taxons');
      });

      it('price rule should be generated', () => {
        // Generate the Rule
        let rule = Rules.price(15, 25);

        // Assertions
        expect(rule.name).to.equal('price');
      });

      it('filter rule should be generated', () => {
        // Generate the Rule
        let rule = Rules.filter('cor', ['azul', 'amarelo']);

        // Assertions
        expect(rule.name).to.equal('cor');
        expect(rule.type).to.equal('filter');
      });
    });

    //
    it('should be created', () => {
      // Create new products query
      let query = new Products();

      // Assertions
      expect(query._rules.or).to.be.a('array');
      expect(query._rules.and).to.be.a('array');

      expect(query._options.search).to.equal('');
      expect(query._options.sort).to.be.a('object');
      expect(query._options.page).to.equal(1);
      expect(query._options.perPage).to.equal(15);
    });

    //
    describe('Options aliases', () => {
      // Define a general query
      let query = new Products();

      //
      it('should define the search option', () => {
        // Add the option
        query.search('some text...');

        // Assertions
        expect(query._options.search).to.equal('some text...');
      });

      //
      it('should define the sortBy option', () => {
        // Add the option
        query.sortBy('price', 'desc');

        // Assertions
        expect(query._options.sort.field).to.equal('price');
        expect(query._options.sort.order).to.equal('desc');
      });

      //
      it('should define the perPage option', () => {
        // Add the option
        query.perPage(15);

        // Assertions
        expect(query._options.perPage).to.equal(15);
      });

      //
      it('should define the page option', () => {
        // Add the option
        query.page(2);

        // Assertions
        expect(query._options.page).to.equal(2);
      });
    });

    //
    it('should build the query', () => {
      // Create new products query
      let query = new Products();

      // Generate the Rule
      let rules = [
        Rules.filter('cor', ['azul', 'amarelo']),
        Rules.price(15, 25),
        Rules.taxonomy(['marcas', 'sony'])
      ];

      // Add the rules using `and` condition
      query.and(rules);

      // Add some options
      query.page(5);
      query.sortBy('price');

      // Build the query
      let buildResult = query.build();

      // Assertions
      expect(buildResult.filters.and[0].name).to.equal('cor');
      expect(buildResult.filters.and[0].values[0]).to.equal('azul');
      expect(buildResult.filters.and[0].values[1]).to.equal('amarelo');
      expect(buildResult.filters.and[0].field).to.equal('');
      expect(buildResult.filters.and[0].type).to.equal('filter');
      expect(buildResult.filters.and[0].execution).to.equal('or');

      expect(buildResult.filters.and[1].name).to.equal('price');
      expect(buildResult.filters.and[1].values[0]).to.equal(15);
      expect(buildResult.filters.and[1].values[1]).to.equal(25);
      expect(buildResult.filters.and[1].field).to.equal('');
      expect(buildResult.filters.and[1].type).to.equal('range');
      expect(buildResult.filters.and[1].execution).to.equal('and');

      expect(buildResult.filters.and[2].name).to.equal('taxons');
      expect(buildResult.filters.and[2].values[0]).to.equal('marcas');
      expect(buildResult.filters.and[2].values[1]).to.equal('sony');
      expect(buildResult.filters.and[2].field).to.equal('permalink');
      expect(buildResult.filters.and[2].type).to.equal('fixed');
      expect(buildResult.filters.and[2].execution).to.equal('and');

      expect(buildResult.sort.field).to.equal('price');
      expect(buildResult.sort.order).to.equal('asc');
      expect(buildResult.page).to.equal(5);
    });

    //
    it('should generate the aggregations params', () => {
      // Create new products query
      let query = new Products();

      // Set the price ranges
      let ranges = [
        { to: 49.99 },              // $0 to $49.99
        { from: 50, to: 99.99 },    // $50 to $99.99
        { from: 100 },              // $100 to undefined(infinity)
      ];

      // Generate the aggregations
      let params = query.aggregations('brands/current-brand', ranges, false);

      // Assertions
      expect(params.root).to.equal('brands/current-brand');

      expect(params.ranges[0]).to.have.property('from');
      expect(params.ranges[0].to).to.equal(49.99);

      expect(params.ranges[1].from).to.equal(50);
      expect(params.ranges[1].to).to.equal(99.99);

      expect(params.ranges[2].from).to.equal(100);
      expect(params.ranges[2]).to.have.property('to');
    });
  });
};
