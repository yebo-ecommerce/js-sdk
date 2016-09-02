// Helper
const h = require('./../../helpers');

// Include the product module
import * as m from 'src/modules/cart';

// Products Module!
describe('Cart module', () => {
  // createCart
  it('should return valid cart', () => {
    //
      let testcarts = m.createCart('token', '10', true, false, 'user_token')
    //
      h.expect(testcarts).to.have.property('token');
      h.expect(testcarts).to.have.property('number');
      h.expect(testcarts).to.have.property('last');
      h.expect(testcarts).to.have.property('create');
      h.expect(testcarts).to.have.property('user_token');
    });
  });

  // getCartItems
  it('should return all items from the cart', () => {
    //
      let returnitem = m.cartItems('tokens', '15', false, true, 'usertoken')
    //
      h.expect(returnitem).to.have.property('token');
      h.expect(returnitem).to.have.property('number');
      h.expect(returnitem).to.have.property('last');
      h.expect(returnitem).to.have.property('create');
      h.expect(returnitem).to.have.property('userToken');
    });
  });

  // emptyCartItems
  it('should return all items from the cart', () => {
    //
      let cartitem = m.cart_item('tokens', '54', false, true, 'usertoken')
    //
      h.expect(cartitem).to.have.property('token');
      h.expect(cartitem).to.have.property('number');
      h.expect(cartitem).to.have.property('last');
      h.expect(cartitem).to.have.property('create');
      h.expect(cartitem).to.have.property('userToken');
    });
  });

  // addCartItems
  it('should return all items cart', () => {
    // ...
  });

  // removeCartItems
  it('should return all items cart', () => {
    // ...
  });

  // updateCartItems
  it('should return all items cart', () => {
    // ...
  });
});
