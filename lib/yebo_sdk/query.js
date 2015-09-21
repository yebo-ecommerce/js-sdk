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

}
