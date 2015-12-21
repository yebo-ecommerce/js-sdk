// Testing requests
// import { Store } from '../../index';
import chai from 'chai';

//
var Store = YeboSDK.Store,
    expect = chai.expect,
    should = chai.should();

module.exports = function() {
  describe('Store', function() {
    // Set no timeout
    this.timeout(0);

    // Setting the URL that will be used in this test
    const url = 'http://diario.azsale.com.br/api'

    it('should be authenticated by Yebo', (done) => {
      Store.auth(`${url}/v2`).then((token) => {
        // Done!
        done();
      });
    });

    it('should be authenticated by cache', (done) => {
      Store.auth(`${url}/v2`).then((token) => {
        // Done!
        done();
      });
    });

    // IT template
    it('should request an Yebo URL passing through the JWT authentication', (done) => {
      Store.fetch('products').then(() => {
        // Done!
        done();
      });
    });
  });
};
