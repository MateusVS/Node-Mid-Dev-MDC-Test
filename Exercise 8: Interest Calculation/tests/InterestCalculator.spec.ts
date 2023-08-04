import { expect, describe, it, beforeAll } from 'vitest';
import { InterestCalculator } from '../src/class/InterestCalculator';
import { IInterestCalculator } from '../src/interfaces/IInterestCalculator';

let interestCalculator: IInterestCalculator;

beforeAll(() => {
  interestCalculator = new InterestCalculator();
});

describe('InterestCalculator class spec', () => {
  it('should calculate final value with positive values', () => {
    const initialCapital = 1000;
    const interestRate = 5;
    const investmentTimeMonths = 12;
    const finalValue = interestCalculator.calculateFinalValue(
      initialCapital,
      interestRate,
      investmentTimeMonths
    );
    expect(finalValue).toBe(1051.16);
  });

  it('should calculate final value with negative interest rate', () => {
    const initialCapital = 1500;
    const interestRate = -3;
    const investmentTimeMonths = 6;
    const finalValue = interestCalculator.calculateFinalValue(
      initialCapital,
      interestRate,
      investmentTimeMonths
    );
    expect(finalValue).toBe(1452.92);
  });

  it('should calculate final value with zero initial capital', () => {
    const initialCapital = 0;
    const interestRate = 10;
    const investmentTimeMonths = 24;
    const finalValue = interestCalculator.calculateFinalValue(
      initialCapital,
      interestRate,
      investmentTimeMonths
    );
    expect(finalValue).toBe(0);
  });
});
