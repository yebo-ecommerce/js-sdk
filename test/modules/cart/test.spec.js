// Include the index module
import * as m from 'src/modules/cart/index';

// Module Cart
describe('modules cart index', () => {
  //
  it('create carts', () {
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

// Return all items from the cart
describe('return items from the cart', () => {
  //
  it('return items ', () {
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

// Remove all items from the cart
describe('remove all items from the cart', () => {
  //
  it('remove items', () {
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

// Return the execution
describe('', () => {
  //
  it('', () {
  //
    let  = m.()
  //
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
  });
});

//
describe('', () => {
  //
  it('', () {
  //
    let  = m.()
  //
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
  });
});

//
describe('', () => {
  //
  it('', () {
  //
    let  = m.()
  //
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
  });
});
