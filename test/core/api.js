// Helper
const h = require('./../helpers');

// Include the product module
import * as m from 'src/core/api';

// Products Module!
describe('API core', () => {
  //
  it('should generate the params', () => {
    //
    let params = {search: 'Hello', prop: {detail: 'Thats a test', values: [1, 2, 3]}}

    // Generate the QueryString
    let qs = m.buildParams(params);
    // console.log(qs);

    // Assertions
    // helpers.expect(qs);
  });

  //
  it('should generate a request', () => {
    // Definitions
    let data = {
      search: 'Test'
    };

    // Authentication token
    let authToken = '';

    // Requests
    let getReq = m.buildRequest('GET', '/products', data, 'test', 'v2', authToken), 
        postReq = m.buildRequest('POST', '/products', data, 'test', 'v2', authToken); 

    // Assertions
    h.expect(getReq.method).to.not.equal(postReq.method);
    h.expect(getReq.url).to.not.equal(postReq.url);
    h.expect(getReq.url).to.equal(`${postReq.url}${m.buildParams(data)}`);
    h.expect(postReq.data).to.equal(data);
    h.expect(getReq.headers).to.deep.equal(postReq.headers);
  });
});
