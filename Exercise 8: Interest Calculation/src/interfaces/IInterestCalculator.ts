export interface IInterestCalculator {
  calculateFinalValue(
    initialCapital: number,
    interestRate: number,
    investmentTimeMonths: number
  ): number;
}
