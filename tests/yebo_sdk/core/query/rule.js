// Testing requests
import chai from 'chai';

//
var Rule = YeboSDK.QueryRule,
    expect = chai.expect,
    should = chai.should();

module.exports = function() {
  describe('Rule', () => {
    // IT template
    // it('', (done) => {
    //
    // });

    it('should be created', () => {
      // Create the rule
      let rule = new Rule('taxons', 'permalink', ['brands']);

      // Assertions
      expect(rule.name).to.equal('taxons');
      expect(rule.values[0]).to.equal('brands');
      expect(rule._resetValues[0]).to.equal('brands');
      expect(rule.subName).to.equal('permalink');
      expect(rule.internalCond).to.equal('and');
    });

    it('with type `range` should be created', () => {
      // Create the rule
      let rule = new Rule('price', undefined, [15.00, 30.00], 'range');

      // Assertions
      expect(rule.name).to.equal('price');
      expect(rule.values[0]).to.equal(15.00);
      expect(rule.values[1]).to.equal(30.00);
      expect(rule._resetValues[0]).to.equal(15.00);
      expect(rule._resetValues[1]).to.equal(30.00);
      expect(rule.subName).to.equal(undefined);
    });

    it('with `or` condition should be created', () => {
      // Create the rule
      let rule = new Rule('taxons', 'permalink', ['brands'], 'fixed', 'or');

      // Assertions
      expect(rule.name).to.equal('taxons');
      expect(rule.values[0]).to.equal('brands');
      expect(rule._resetValues[0]).to.equal('brands');
      expect(rule.subName).to.equal('permalink');
      expect(rule.internalCond).to.equal('or');
    });

    it('should have the values updated', () => {
      // Create the rule
      let rule = new Rule('taxons', 'permalink', ['taxOne', 'taxTwo']);

      // Set new values to the rule
      rule.values = ['taxThree', 'taxFour'];

      // Assertions
      expect(rule.values[0]).to.equal('taxThree');
      expect(rule.values[1]).to.equal('taxFour');
    });

    it('values should be reseted', () => {
      // Create the rule
      let rule = new Rule('taxons', 'permalink', ['taxOne', 'taxTwo']);

      // Set new values to the rule
      rule.values = ['taxThree', 'taxFour'];

      // Reset the values
      rule.reset();

      // Assertions
      expect(rule.values[0]).to.equal('taxOne');
      expect(rule.values[1]).to.equal('taxTwo');
      expect(rule.values[2]).to.equal(undefined);
      expect(rule.values[3]).to.equal(undefined);
    });

    it('values should be cleaned', () => {
      // Create the rule
      let rule = new Rule('taxons', 'permalink', ['taxOne', 'taxTwo']);

      // Clean the rule values
      rule.clean();

      // Assertions
      expect(rule.values[0]).to.equal(undefined);
    });
  });
}
