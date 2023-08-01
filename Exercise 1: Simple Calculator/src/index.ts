import Calculator from './calculator/Calculator';
import { AppError } from './errors/AppError';
import { Operator } from './types/Operator';
import { closeReadline, getUserInput, getValidNumberInput } from './utils/userInput';

async function main() {
  try {
    const firstNumStr = await getValidNumberInput('Enter the first number: ');
    const firstNum = firstNumStr;

    const secondNumStr = await getValidNumberInput('Enter the second number: ');
    const secondNum = secondNumStr;

    const operator = await getUserInput('Enter the operator (+, -, *, /): ');

    const calculator = new Calculator(firstNum, secondNum, operator as Operator);
    const result = calculator.calculate();

    console.log('Result:', result);
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
