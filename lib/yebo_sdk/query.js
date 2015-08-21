/**
 * Abstract query class
 */
export default class Query {
  /**
   * @todo Create a new query based in other
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
}
