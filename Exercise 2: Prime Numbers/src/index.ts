import { PrimesFinder } from './PrimesFinder';
import { PrimeChecker } from './PrimeChecker';

const numberOfPrimesToFind = 10;
const primeChecker = new PrimeChecker();
const primesFinder = new PrimesFinder(primeChecker);
const primes = primesFinder.findFirstNumberPrimes(numberOfPrimesToFind);
console.log(`The first ${numberOfPrimesToFind} prime numbers are:`, primes);
