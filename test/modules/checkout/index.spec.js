// Helper
const h = require('./../../helpers');

// Include the product module
import * as m from 'src/modules/checkout';

// Products Module!
describe('Products module', () => {
  // getOrderAddress
  it('should return a address', () => {
    //
    let  = m.getOrderAddress()
    //
    h.expect().to.have.property('number');
    h.expect().to.have.property('userToken');
    h.expect().to.have.property('kind');
  });

  // createOrderAddress
  it('should return a Create the address of the Order', () => {
    //
    let  = m.createOrderAddress()
    //
    h.expect().to.have.property('number');
    h.expect().to.have.property('userToken');
    h.expect().to.have.property('kind');
  });

  // removeOrderAddress
  it('should return a Remove the address of the Order', () => {
    //
    let  = m.removeOrderAddress()
    //
    h.expect().to.have.property('number');
    h.expect().to.have.property('userToken');
    h.expect().to.have.property('kind');
  });

  // updateOrderAddress
  it('should return a Update the address of the Order', () => {
    //
    let  = m.updateOrderAddress()
    //
    h.expect().to.have.property('number');
    h.expect().to.have.property('userToken');
    h.expect().to.have.property('kind');
  });

  // getOrderShipments
  it('should return a delivery methods for Order', () => {
    //
    let  = m.getOrderShipments()
    //
    h.expect().to.have.property('number');
    h.expect().to.have.property('userToken');
    h.expect().to.have.property('pkg');
    h.expect().to.have.property('rate');
  });

  // setOrderShipment
  it('should return a delivery method for a package', () => {
    //
    let  = m.getOrderPay()
    //
    h.expect().to.have.property('number');
    h.expect().to.have.property('userToken');
    h.expect().to.have.property('kind');
  });

  // getOrderPay
  it('should return a payment methods for Order', () => {
    //
    let  = m.()
    //
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
  });

  // orderPay
  it('should return a Making the payment', () => {
    //
    let  = m.()
    //
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
    h.expect().to.have.property('');
  });
});
