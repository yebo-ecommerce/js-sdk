// Dependencies
import { Store } from './store';
import isArray from 'lodash/lang/isArray';
import isObject from 'lodash/lang/isObject';
import map from 'lodash/collection/map';

/**
 * Abstract query class
 */
export class Query {
  /**
   * Create a new Query
   * @param {any} parentQuery Base query that will be exetend
   */
  constructor(parentQuery) {
    // Set query name
    this.queryName = 'abstract';

    // Set attributes
    this._attrs = {};

    // Query endpoint
    this.endPoint = undefined;

    // Is there any parentQuery?
    if( parentQuery !== undefined ) {
      // Check the queryName
      if( this.queryName === parentQuery.queryName )
        this._attrs = parentQuery._attrs;
    }
  }

  /**
   * Build the query
   * @return {Object} The object that will be passed to the run as `data`
   */
  build() {
    // Warn!
    console.warn('This method should be implemented in the Query class.');

    // Return nothing
    return {  };
  }

  /**
   * Transform the query build into query string
   */
  toParams() {
    // The query params
    let data = this.build();

    // Transform it to params
    return Store.toParam(data);
  }

  /**
   * Execute the query using Store#fetch
   * @return {Object} The result of the query
   */
  execute() {
    // Check if the endpoint is defined
    if( this.endPoint === undefined  )
      throw 'The query endpoint must be defined';

    // Return the Fetch!
    return Store.fetch(this.endPoint, this.build());
  }
}
