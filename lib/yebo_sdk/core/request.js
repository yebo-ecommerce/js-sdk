// Variables
import assign from 'lodash/object/assign';
import RSVP from 'rsvp';

/**
 * Request class
 * @example
 * let myClass = new Request('http://google.com');
 */
export class Request {
  /**
   * This method make a request
   * @param {string[]} url The url that will be requested
   * @param {string[]} method Method used to request
   * @param {object} data The content that will be sended
   * @param {object} header Request headers
   * @return {RVSP.Promise} Request promise
   */
  constructor(url, method = 'GET', data = {}, header = {}) {
    // Setting the class
    let xhrClass = XMLHttpRequest || ActiveXObject;

    // XHR Object
    let xhr = new xhrClass('MSXML2.XMLHTTP.3.0');

    // Define the headers
    let headers = assign({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-type': 'application/x-www-form-urlencoded'
    }, header);

    // Check if the method is POST
    if( method === 'POST' ) {
      // Set the header
      headers['Content-type'] = 'application/json';

      // Compile the data
      data = JSON.stringify(data);
    }

    // Return a Promise
    return new RSVP.Promise((resolve, reject) => {
      // Open the URL
      xhr.open(method, url, 1);

      // Set the headers
      for( let h in headers ) {
        xhr.setRequestHeader(h, headers[h]);
      }

      // Define the callback
      xhr.onreadystatechange = () => {
        // Checks if the ajax has ended
        if( xhr.readyState > 3 ) {
          // Check the request status
          if( xhr.status === 200 )
            resolve(this.parseResponse(xhr), xhr);
          else
            reject(xhr);
        }
      };

      // Send the data
      xhr.send(data);
    });
  }

  /**
   * Parse the XHR response according to the type
   * @param {XMLHttpRequest} xhr A request object
   * @return {object/string} The response foratted
   */
  parseResponse(xhr) {
    return JSON.parse(xhr.responseText);
  }
}
