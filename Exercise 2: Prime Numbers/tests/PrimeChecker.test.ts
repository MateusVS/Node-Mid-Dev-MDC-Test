import { IPrimeChecker } from 'src/interfaces/IPrimeChecker';
import { PrimeChecker } from '../src/class/PrimeChecker';
import { beforeEach, expect, describe, it } from 'vitest';

describe('PrimeChecker', () => {
  let primeChecker: IPrimeChecker;

  beforeEach(() => {
    primeChecker = new PrimeChecker();
  });

  it('should return true for prime numbers', () => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19];
    primes.forEach((num) => {
      expect(primeChecker.isPrime(num)).toBe(true);
    });
  });

  it('should return false for non-prime numbers', () => {
    const nonPrimes = [0, 1, 4, 6, 8, 9, 10, 12, 14, 15];
    nonPrimes.forEach((num) => {
      expect(primeChecker.isPrime(num)).toBe(false);
    });
  });
});
