import { IPrimeChecker } from './interfaces/IPrimeChecker';
import { IPrimesFinder } from './interfaces/IPrimesFinder';

export class PrimesFinder implements IPrimesFinder {
  private primeChecker: IPrimeChecker;

  constructor(primeChecker: IPrimeChecker) {
    this.primeChecker = primeChecker;
  }

  findFirstNumberPrimes(count: number): number[] {
    const primes: number[] = [];
    let num = 2;

    while (primes.length < count) {
      if (this.primeChecker.isPrime(num)) {
        primes.push(num);
      }
      num++;
    }

    return primes;
  }
}
