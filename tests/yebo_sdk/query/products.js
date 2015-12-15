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
        expect(rule.name).to.equal('filter');
        expect(rule.subName).to.equal('cor');
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
  });
};
