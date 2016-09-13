fa// Helper
const h = require('./../../helpers');

// Include the search module
import * as m from 'src/modules/products/search';

// Include filters
import { createFilter } from 'src/modules/products/filters';

// Search Page!
describe('Search Module', () => {
//
  it('should create search', () => {
    //
    let newSearch = m.createSearch();

    h.expect(newSearch).to.have.property('query')
  });

  //
  it('should search page', () => {
    //
    let search = m.createSearch();

    // Set Page
    search.page(55);

    //
    h.expect(search.query).to.have.property('page');
  });

  //
  it('should search by name', () => {
    //
    let search = m.createSearch();

    // Set Name
    search.byName('Arroz');

    //
    h.expect(search.query).to.have.property('name');
  });

  it('should search perPage', () => {
    //
    let search = m.createSearch();

    // Set perPage
    search.perPage(78);

    //
    h.expect(search.query).to.have.property('per_page');
  });

  it('should search for filters', () => {
    //
    let search = m.createSearch();

    // Set and
    search.and([createFilter('cor', 'field', 'fixed', ['azul'])]);

    //
    h.expect(search.query).to.have.property('and');
  });
});
