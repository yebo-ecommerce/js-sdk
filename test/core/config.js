// Helper
const h = require('./../helpers');

// Include the product module
import * as m from 'src/core/config';

// Products Module!
describe('Config', () => {
  //
  it('should set a value', () => {
    // Some values
    let key = 'testKey',
        val = 'sample value',
        newVal = 'another value';

    // Assertions
    h.expect(m.set(key, val)).to.be.true;
    h.expect(m.set(key, newVal, false)).to.be.false;
    h.expect(m.set(key, newVal)).to.be.true;
  });

  //
  it('should get a value', () => {
    // Some values
    let key = 'testKey',
        anotherKey = 'anotherTestKey',
        val = 'sample value',
        anotherVal = 'random value';

    // Set the values
    m.set(key, val);

    // Assertions
    h.expect(m.get(key)).to.be.equal(val);
    h.expect(m.get(anotherKey, anotherVal)).to.be.equal(anotherVal);
  });

  //
  it('should check if a value exists', () => {
    // Some values
    let key = 'testKey',
        anotherKey = 'anotherTestKey',
        val = 'sample value';

    // Set the value
    m.set(key, val);

    // Assertions
    h.expect(m.exists(key)).to.be.true;
    h.expect(m.exists(anotherKey)).to.be.false;
  });

  //
  it('should unset a value', () => {
    // Some values
    let key = 'testKey',
        anotherKey = 'anotherTestKey',
        val = 'sample value';

    // Set the value
    m.set(key, val);

    // Assertions
    h.expect(m.unset(anotherKey)).to.be.false;
    h.expect(m.unset(key)).to.be.true;
  });
});
