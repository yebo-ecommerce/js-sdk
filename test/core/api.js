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
    let getReq = m.buildRequest('GET', '/products', data, authToken, 'test', 'v2'),
        postReq = m.buildRequest('POST', '/products', data, authToken, 'test', 'v2');

    // Assertions
    h.expect(getReq.method).to.not.equal(postReq.method);
    h.expect(getReq.url).to.not.equal(postReq.url);
    h.expect(getReq.url).to.equal(`${postReq.url}${m.buildParams(data)}`);
    h.expect(postReq.data).to.equal(data);
    h.expect(getReq.headers).to.deep.equal(postReq.headers);

    h.expect(getReq.url).to.match(/^https:\/\//);
    h.expect(postReq.url).to.match(/^https:\/\//);
  });

  //
  it('should build the authentication request', () => {
    // Request
    let req = m.buildAuthentication('test', 'v2');

    // Assertions
    h.expect(req.method).to.equal('GET');
    h.expect(req.headers).to.not.have.ownProperty('Authorization');
    h.expect(req.url).to.match(/\/$/);
  });
});
