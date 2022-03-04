import { assert } from 'chai';
import casual from 'casual';
import geometric from '../../src/algorithms/geometric';

describe('New algorithm', () => {
  it('should have inverse functions for getPosition and getValue', () => {
    const min = casual.integer(0, 100);
    const max = casual.integer(900, 1000);
    const originalPosition = casual.integer(100, 900);
    const value = geometric.getValue(originalPosition, min, max);
    const positionFromValue = geometric.getPosition(value, min, max);
    assert.equal(Math.round(positionFromValue), originalPosition);
    
    
  });
});



