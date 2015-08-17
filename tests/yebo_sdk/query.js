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
    it('should format the filter correctly', () => {
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
  });
};
