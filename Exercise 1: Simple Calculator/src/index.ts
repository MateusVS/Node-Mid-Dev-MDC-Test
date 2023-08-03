import Calculator from './class/Calculator';
import { AppError } from './errors/AppError';
import { Operator } from './types/Operator';
import { closeReadline, getUserInput, getValidNumberInput } from './utils/userInput';

async function main() {
  try {
    const firstNum = await getValidNumberInput('Enter the first number: ');
    const secondNum = await getValidNumberInput('Enter the second number: ');
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
