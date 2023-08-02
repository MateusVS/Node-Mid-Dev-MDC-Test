import { Factorial } from './class/Factorial';
import { closeReadline, getValidNumberInput } from './utils/userInput';
import { AppError } from './errors/AppError';

const factorial = new Factorial();

async function main() {
  try {
    const number = await getValidNumberInput('Enter a number to calculate its factorial: ');
    const factorialResult = factorial.calculateFactorial(number);
    console.log(`The factorial of ${number} is: ${factorialResult}`);
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
