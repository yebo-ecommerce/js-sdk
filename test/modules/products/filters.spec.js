// Helper
const h = require('./../../helpers');

// Include the filters module
import * as m from 'src/modules/products/filters';

// Products Module!
describe('Products module filters', () => {
  //
  it('should create filters for searching', () => {
    //
    let filter = m.createFilter('cor', undefined, 'fixed', ['azul', 'vermelho', 'verde']);

    //
    h.expect(filter).to.have.property('name');
    h.expect(filter).to.have.property('field');
    h.expect(filter).to.have.property('type');
    h.expect(filter).to.have.property('values');
  });
});
