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

    it('with name and values should be created', () => {
      // Create the rule
      let rule = new Rule('taxons', ['marcas']);

      // Assertions
      expect(rule.name).to.equal('taxons');
      expect(rule.values[0]).to.equal('marcas');
      expect(rule._resetValues[0]).to.equal('marcas');
      expect(rule.subName).to.equal(undefined);
      expect(rule.internalCond).to.equal('and');
    });

    it('with name, sub-name (sometimes property) and the values should be created', () => {
      // Create the rule
      let rule = new Rule('taxons', 'id', ['1']);

      // Assertions
      expect(rule.name).to.equal('taxons');
      expect(rule.values[0]).to.equal('1');
      expect(rule._resetValues[0]).to.equal('1');
      expect(rule.subName).to.equal('id');
      expect(rule.internalCond).to.equal('and');
    });

    it('with name, sub-name, the values and the internal condition should be created', () => {
      // Create the rule
      let rule = new Rule('taxons', 'id', ['1'], 'or');

      // Assertions
      expect(rule.name).to.equal('taxons');
      expect(rule.values[0]).to.equal('1');
      expect(rule._resetValues[0]).to.equal('1');
      expect(rule.subName).to.equal('id');
      expect(rule.internalCond).to.equal('or');
    });

    it('with name, values and the internal condition should be created', () => {
      // Create the rule
      let rule = new Rule('taxons', ['marcas'], 'or');

      // Assertions
      expect(rule.name).to.equal('taxons');
      expect(rule.values[0]).to.equal('marcas');
      expect(rule._resetValues[0]).to.equal('marcas');
      expect(rule.subName).to.equal(undefined);
      expect(rule.internalCond).to.equal('or');
    });

    it('should have the values updated', () => {
      // Create the rule
      let rule = new Rule('taxons', ['tax_one', 'tax_two']);

      // Set new values to the rule
      rule.values = ['tax_three', 'tax_four'];

      // Assertions
      expect(rule.values[0]).to.equal('tax_three');
      expect(rule.values[1]).to.equal('tax_four');
    });

    it('values should be reseted', () => {
      // Create the rule
      let rule = new Rule('taxons', ['tax_one', 'tax_two']);

      // Set new values to the rule
      rule.values = ['tax_three', 'tax_four'];

      // Reset the values
      rule.reset();

      // Assertions
      expect(rule.values[0]).to.equal('tax_one');
      expect(rule.values[1]).to.equal('tax_two');
    });

    it('values should be cleaned', () => {
      // Create the rule
      let rule = new Rule('taxons', ['tax_one', 'tax_two']);

      // Clean the rule values
      rule.clean();

      // Assertions
      expect(rule.values[0]).to.equal(undefined);
    });
  });
}
