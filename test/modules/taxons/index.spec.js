// Helper
const h = require('./../../helpers');

// Include the product module
import * as m from 'src/modules/taxons';

// Products Module!
describe('Products module', () => {
  // getTaxons
  it('should return taxons', () => {
    //
    let  = m.getTaxons()
    //
    h.expect().to.have.property('ids');
    h.expect().to.have.property('taxons');
    h.expect().to.have.property('taxonomyId');
    h.expect().to.have.property('page');
    h.expect().to.have.property('perPage');
  });

  // getTaxonId
  it('should return a single taxon', () => {
    //
    let  = m.getTaxonId()
    //
    h.expect().to.have.property('');
  });

  // getTaxonomies
  it('should return taxonomies', () => {
    //
    let  = m.getTaxonomies()
    //
    h.expect().to.have.property('page');
    h.expect().to.have.property('perPage');
  });

  // getTaxonomyId
  it('should return a single taxonomy', () => {
    //
    let  = m.getTaxonomyId()
    //
    h.expect().to.have.property('');
  });
});
