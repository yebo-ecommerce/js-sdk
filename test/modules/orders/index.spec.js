// Helper
const h = require('./../../helpers');

// Include the product module
import * as m from 'src/modules/orders';

// Products Module!
describe('Products module', () => {
  // getOrders
  it('should return all a user Orders', () => {
    //
    let  = m.getOrders()
    //
    h.expect().to.have.property('token');
    h.expect().to.have.property('complete');
    h.expect().to.have.property('incomplete');
    h.expect().to.have.property('page');
    h.expect().to.have.property('perPage');
  });

  // getOrdersNumber
  it('should return a user Order', () => {
    //
    let  = m.getOrdersNumber()
    //
    h.expect().to.have.property('token');
    h.expect().to.have.property('number');
    h.expect().to.have.property('complete');
    h.expect().to.have.property('incomplete');
  });
});
