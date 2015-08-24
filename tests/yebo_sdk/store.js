// Testing requests
import Store from '../../lib/yebo_sdk/store';

//
var expect = require('chai').expect,
    should = require('chai').should();

module.exports = function() {
  describe('Store', () => {
    // IT template
    // it('', (done) => {
    //
    // });

    it('should be authenticated by Yebo', (done) => {
      Store.auth('http://vivreshop.yebo.me:3000/v3/').then((token) => {
        // Done!
        done();
      });
    });

    it('should be authenticated by cache', (done) => {
      Store.auth('http://vivreshop.yebo.me:3000/v3/').then((token) => {
        // Done!
        done();
      });
    });
  });
};
