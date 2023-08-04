import { IInterestCalculator } from '../interfaces/IInterestCalculator';

export class InterestCalculator implements IInterestCalculator {
  calculateFinalValue(
    initialCapital: number,
    interestRate: number,
    investmentTimeMonths: number
  ): number {
    const interestRateDecimal = interestRate / 100;
    const compoundInterest = Math.pow(1 + interestRateDecimal, investmentTimeMonths);
    const finalValue = initialCapital * compoundInterest;
    return finalValue;
  }
}
