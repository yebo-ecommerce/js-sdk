// Testing requests
// import { Config } from '../../index';
import chai from 'chai';

//
var Config = YeboSDK.Config,
    expect = chai.expect,
    should = chai.should();

module.exports = function() {
  describe('Config', () => {
    // IT template
    // it('', (done) => {
    //
    // });

    it('should store a value', () => {
      // Store the value
      Config.set('key', 123);

      // Assertions
      expect(Config._store).to.have.property('key');
    });

    it('should get a key from the store', () => {
      // Store the value
      Config.set('newKey', 'Some important value');

      // Assertions
      expect(Config._store).to.have.property('newKey');
      expect(Config.get('newKey')).to.equal('Some important value');
    });
  });
};
