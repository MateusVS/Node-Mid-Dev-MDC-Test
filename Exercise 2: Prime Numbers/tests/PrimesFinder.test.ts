import { PrimesFinder } from "../src/PrimesFinder";
import { PrimeChecker } from "../src/PrimeChecker";
import { IPrimeChecker } from "../src/interfaces/IPrimeChecker";
import { IPrimesFinder } from "../src/interfaces/IPrimesFinder";
import { beforeEach, expect, describe, it } from "vitest";

describe("PrimesFinder", () => {
  let primesFinder: IPrimesFinder;

  beforeEach(() => {
    const primeChecker: IPrimeChecker = new PrimeChecker();
    primesFinder = new PrimesFinder(primeChecker);
  });

  it("should find the first 10 prime numbers", () => {
    const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    const actualPrimes = primesFinder.findFirstNumberPrimes(10);
    expect(actualPrimes).toEqual(expectedPrimes);
  });

  it("should find the first 5 prime numbers", () => {
    const expectedPrimes = [2, 3, 5, 7, 11];
    const actualPrimes = primesFinder.findFirstNumberPrimes(5);
    expect(actualPrimes).toEqual(expectedPrimes);
  });
});
