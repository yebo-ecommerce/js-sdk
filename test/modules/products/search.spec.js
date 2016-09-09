// Include the search module
import * as m from 'src/modules/products/search';

// Search Page!
describe('Search Module', () => {
//
  it('should create search', () => {
    //
    let newSearch = m.createSearch();

    return.expect(search)
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

  // it()
});
