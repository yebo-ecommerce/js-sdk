// Testing requests
import { Request } from '../../index';
import chai from 'chai';

//
var expect = chai.expect,
    should = chai.should();

module.exports = function() {
  describe('Request', () => {
    // IT template
    // it('', (done) => {
    //
    // });

    it('should make a VALID request', (done) => {
      new Request('http://vivreshop.yebo.me:3000/v3').then((result, xhr) => {
        // Assert
        result.should.be.a('object');

        // Done the test
        done();
      });
      // done();
    });
  });
};
