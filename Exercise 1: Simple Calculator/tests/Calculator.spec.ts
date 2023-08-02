import { expect, describe, it } from 'vitest';
import { Operator } from '../src/types/Operator';
import Calculator from '../src/calculator/Calculator';

describe('Calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator(5, 3, Operator.ADD);
    expect(calculator.calculate()).toBe(8);
  });

  it('should subtract two numbers', () => {
    const calculator = new Calculator(5, 3, Operator.SUBTRACT);
    expect(calculator.calculate()).toBe(2);
  });

  it('should multiply two numbers', () => {
    const calculator = new Calculator(5, 3, Operator.MULTIPLY);
    expect(calculator.calculate()).toBe(15);
  });

  it('should divide two numbers', () => {
    const calculator = new Calculator(6, 3, Operator.DIVIDE);
    expect(calculator.calculate()).toBe(2);
  });

  it('should throw an error when dividing by zero', () => {
    const calculator = new Calculator(6, 0, Operator.DIVIDE);
    expect(() => calculator.calculate()).toThrowError('Division by zero is not allowed.');
  });
});
