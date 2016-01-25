// Testing requests
// import { Query } from '../../index';
import chai from 'chai';

//
var Query = YeboSDK.Query,
    Rule = YeboSDK.QueryRule,
    expect = chai.expect,
    should = chai.should();

module.exports = function() {
  describe('Query', () => {
    // IT template
    // it('', (done) => {
    //
    // });

    it('should create a query', () => {
      let query = new Query();
    });

    it('should be built', () => {
      // Create a new query
      let query = new Query();

      // Build it
      let build = query.build();

      // Assertions
      expect(build).to.be.a('object');
    });

    it('should not execute the query, because the endpoint is not defined', () => {
      // Create a new query
      let query = new Query();

      // Try to execute the query
      // should.Throw(query.execute());
      expect(query.endPoint).to.equal(undefined);
    });

    it('should create a query based in another one', () => {
      // Create the parent query
      let parentQuery = new Query();

      // Add some attributes
      parentQuery._rules = {
        string: 'Sample',
        number: 123
      };

      // Add some options
      parentQuery._options = {
        string: 'Sample',
        number: 123
      };

      // Create a new query
      let query = new Query(parentQuery);

      // Assertions
      expect(query._rules.string).to.equal('Sample');
      expect(query._rules.number).to.equal(123);

      expect(query._options.string).to.equal('Sample');
      expect(query._options.number).to.equal(123);
    });

    it('should recieve query rules', () => {
      // Create new products query
      let query = new Query();

      // Create some rules
      let rules = [
        new Rule('firstRule', 'field', ['firstValue', 'secondValue']),
        new Rule('secondRule', 'field', ['thirdValue', 'fourthValue'])
      ];

      // Define some temporary rules
      query._rules = {
        single: null,
        multiple: []
      };

      // Add the rules
      query.addRules('single', rules);
      query.addRules('multiple', rules);

      // Assertions
      expect(query._rules.single).to.be.an.instanceof(Rule);
      expect(query._rules.single.values[0]).to.equal('firstValue');
      expect(query._rules.single.values[1]).to.equal('secondValue');

      expect(query._rules.multiple).to.be.an('array');

      expect(query._rules.multiple[0]).to.be.an.instanceof(Rule);
      expect(query._rules.multiple[0].values[0]).to.equal('firstValue');
      expect(query._rules.multiple[0].values[1]).to.equal('secondValue');

      expect(query._rules.multiple[1]).to.be.an.instanceof(Rule);
      expect(query._rules.multiple[1].values[0]).to.equal('thirdValue');
      expect(query._rules.multiple[1].values[1]).to.equal('fourthValue');
    });

    //
    it('should recieve query options', () => {
      // Create new products query
      let query = new Query();

      // Define some temporary rules
      query._options = {
        single: null,
        multiple: null
      };

      // Add options
      query.addOption('single', 'someSingleValue');
      query.addOption('multiple', 'someMultipleValue');

      // Assertions
      expect(query._options.single).to.equal('someSingleValue');
      expect(query._options.multiple).to.equal('someMultipleValue');
    });

    //
    it('should build the rules', () => {
      // Create new products query
      let query = new Query();

      // Create some rules
      let rules = [
        new Rule('firstRule', 'field', []),
        new Rule('secondRule', 'field', ['thirdValue', 'fourthValue'])
      ];

      // Define some temporary rules
      query._options = {
        single: null,
        multiple: null,
        notDefined: null
      };

      // Define some temporary rules
      query._rules = {
        single: null,
        multiple: []
      };

      // Add options
      query.addOption('single', 'someSingleValue');
      query.addOption('multiple', 'someMultipleValue');

      // Add the rules
      query.addRules('single', rules);
      query.addRules('multiple', rules);

      // Build the query
      let buildResult = query.build();

      // Change some values
      rules[0].values = ['firstValue', 'secondValue'];
      query.addOption('single', undefined);

      // Build it again
      let buildResultChanged = query.build();

      // Assertions for the first build
      expect(buildResult.rules.single).to.equal(undefined);

      expect(buildResult.rules.multiple[0].name).to.equal('secondRule');
      expect(buildResult.rules.multiple[0].values[0]).to.equal('thirdValue');
      expect(buildResult.rules.multiple[0].values[1]).to.equal('fourthValue');

      expect(buildResult.options.single).to.equal('someSingleValue');
      expect(buildResult.options.multiple).to.equal('someMultipleValue');
      expect(buildResultChanged.options.notDefined).to.equal(undefined);

      // Assertions for the second build
      expect(buildResultChanged.rules.single.name).to.equal('firstRule');
      expect(buildResultChanged.rules.single.values[0]).to.equal('firstValue');
      expect(buildResultChanged.rules.single.values[1]).to.equal('secondValue');

      expect(buildResultChanged.rules.multiple[0].name).to.equal('firstRule');
      expect(buildResultChanged.rules.multiple[0].values[0]).to.equal('firstValue');
      expect(buildResultChanged.rules.multiple[0].values[1]).to.equal('secondValue');

      expect(buildResultChanged.rules.multiple[1].name).to.equal('secondRule');
      expect(buildResultChanged.rules.multiple[1].values[0]).to.equal('thirdValue');
      expect(buildResultChanged.rules.multiple[1].values[1]).to.equal('fourthValue');

      expect(buildResultChanged.options.single).to.equal(undefined);
      expect(buildResultChanged.options.multiple).to.equal('someMultipleValue');
      expect(buildResultChanged.options.notDefined).to.equal(undefined);
    });
  });
};
