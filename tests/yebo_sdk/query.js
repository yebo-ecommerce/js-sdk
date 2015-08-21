// Testing requests
import Query from '../../lib/yebo_sdk/query';

//
var expect = require('chai').expect,
    should = require('chai').should();

module.exports = function() {
  describe('Query', () => {
    // IT template
    // it('', (done) => {
    //
    // });

    it('should create a query', () => {
      let query = new Query();
    });

    it('should create a query based in another one', () => {
      // Create the parent query
      let parentQuery = new Query();

      // Add some attributes
      parentQuery._attrs = {
        string: 'Sample',
        number: 123
      };

      // Create a new query
      let query = new Query(parentQuery);

      // Assertions
      expect(query._attrs.string).to.equal('Sample');
      expect(query._attrs.number).to.equal(123);
    });
  });
};
