import { add } from '../utils.js';
import { describe, it, expect } from '@jest/globals';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
