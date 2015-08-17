// Testing requests
import req from '../../lib/yebo_sdk/request';

//
var expect = require('chai').expect,
    should = require('chai').should();

module.exports = function() {
  describe('Request', () => {
    // IT template
    // it('', (done) => {
    //
    // });

    it('should make a VALID request', (done) => {
      new req('http://vivreshop.yebo.me:3000/v3').then((result, xhr) => {
        // Assert
        result.should.be.a('object');

        // Done the test
        done();
      });
      // done();
    });
  });
};
