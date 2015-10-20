// Testing requests
// import { Query } from '../../index';
import chai from 'chai';

//
var Query = YeboSDK.Query,
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
