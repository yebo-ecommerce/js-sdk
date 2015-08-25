// Testing requests
import { Store } from '../../index';
import chai from 'chai';

//
var expect = chai.expect,
    should = chai.should();

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
