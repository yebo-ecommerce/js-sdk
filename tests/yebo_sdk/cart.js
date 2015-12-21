//
import chai from 'chai';

//
var Cart = YeboSDK.Cart,
    expect = chai.expect,
    should = chai.should();

module.exports = function() {
  describe('Cart', function() {
    // Set no timeout
    this.timeout(0);

    // Initialize a cart
    let cart = new YeboSDK.Cart();

    // Cart items
    it('should return the items', (done) => {
      // Get the items
      cart.items.then((res) => {
        // Assertions
        expect(res.items.length).to.be.equal(0);
        expect(cart._number).to.be.equal(res.order.number);

        // Done!!
        done();
      })
    });
  });
};
