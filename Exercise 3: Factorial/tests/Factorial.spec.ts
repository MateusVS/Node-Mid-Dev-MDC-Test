import { expect, describe, it, beforeAll } from 'vitest';
import { Factorial } from '../src/class/Factorial';
import { IFactorial } from '../src/interfaces/IFactorial';

describe('Factorial class spec', () => {
  let factorial: IFactorial

  beforeAll(() => {
    factorial = new Factorial();
  });

  it('should calculate factorial of 0', () => {
    expect(factorial.calculateFactorial(0)).toBe(1);
  });

  it('should calculate factorial of 1', () => {
    expect(factorial.calculateFactorial(1)).toBe(1);
  });

  it('should calculate factorial of positive number', () => {
    expect(factorial.calculateFactorial(5)).toBe(120);
  });

  it('should throw error for negative number', () => {
    expect(() => factorial.calculateFactorial(-1)).toThrowError(
      'Factorial is not defined for negative numbers.'
    );
  });
});
