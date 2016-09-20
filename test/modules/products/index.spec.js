// Helper
const h = require('./../../helpers');

// Include the product module
import * as m from 'src/modules/products';

// Products Module!
describe('Products module', () => {
  // getProducts
  it('should return a products list', () => {
    // m.getProducts();
    let products = m.getProducts([search]);

    //
    h.expect(products).to.have.property('search');
  });

  // getProductsAggs
  it('should return a group filters', () => {
    // ...
    let productsAggs = m.getProductsAggs('frutas',[{from: 10.0, to: 25.0}]);

    //
    h.expect(productsAggs).to.have.property('root');
    h.expect(productsAggs).to.have.property('ranges');
    h.expect(productsAggs).to.have.property('search');
  });

  // getProductsId
  it('should return a information', () => {
    // ...
    let productsId = m.getProductsId(76);

    //
    h.expect(productsId).to.have.property('id');
  });
});
