// Dependencies
import { Store } from './store';
import { Rule } from './query/rule';
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

    // Set the rules
    this._rules = {};

    // Set the options
    this._options = {};

    // Query endpoint
    this.endPoint = undefined;

    // Is there any parentQuery?
    if( parentQuery !== undefined ) {
      // Check the queryName
      if( this.queryName === parentQuery.queryName ) {
        this._rules = parentQuery._rules;
        this._options = parentQuery._options;
      }
    }
  }

  /**
   * Add rules to the query
   * @param [string] name The internal rule name
   * @param [QueryRule[]] rules Rules that will be added to the Query
   * rules or the rules itself.
   */
  addRules(name, rules) {
    // Find the rule
    let rule = this._rules[name];

    // Check if the rule exits
    if( rule === undefined )
      return false;

    //
    if( !isArray(rule) ) {
      // Set the rule
      this._rules[name] = rules[0];

      // Return!
      return true;
    }

    // Push all the rules
    for( let i = 0; i < rules.length; i++ )
      rule.push(rules[i]);

    // Return!
    return true;
  }

  /**
   * Add options to the query
   * @param [string] name The option name
   * @param [any] value The option value
   */
  addOption(name, value) {
    // Check if the rule exits
    if( this._options[name] === undefined )
      return false;

    // Set it
    this._options[name] = value;

    // Return it
    return true;
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
