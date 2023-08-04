import { AppError } from './errors/AppError';
import { InterestCalculator } from '../class/InterestCalculator';
import { closeReadline, getValidNumberInput } from './utils/userInput';

const interestCalculator = new InterestCalculator();

async function main(): Promise<void> {
  try {
    const initialCapital = await getValidNumberInput('Enter the initial capital: ');
    const interestRate = await getValidNumberInput('Enter the interest rate (%): ');
    const investmentTimeMonths = await getValidNumberInput('Enter the investment time (in months): ');

    const finalValue = interestCalculator.calculateFinalValue(
      initialCapital,
      interestRate,
      investmentTimeMonths,
    );

console.log(`The final value of the investment is: ${ finalValue.toFixed(2)}`);
  } catch (error) {
    if (error instanceof AppError) {
      console.error('App Error:', error.message);
    } else {
      console.error('Error:', error);
    }
  } finally {
    closeReadline();
    process.exit(0);
  }
}

main();
