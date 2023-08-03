import { Operator } from '../types/Operator';

export default class Calculator {
  constructor(private firstNum: number, private secondNum: number, private operator: Operator) {}

  public calculate(): number {
    switch(this.operator) {
      case Operator.ADD:
        return this.add(this.firstNum, this.secondNum);
      case Operator.SUBTRACT:
        return this.subtract(this.firstNum, this.secondNum);
      case Operator.MULTIPLY:
        return this.multiply(this.firstNum, this.secondNum);
      case Operator.DIVIDE:
        if (this.secondNum === 0) {
          throw new Error('Division by zero is not allowed.');
        }
        return this.divide(this.firstNum, this.secondNum);
      default:
        throw new Error('Invalid operator. Supported operators are +, -, *, /.');
    }
  }

  private add(firstNum: number, secondNum: number) {
    return firstNum + secondNum;
  }

  private subtract(firstNum: number, secondNum: number) {
    return firstNum - secondNum;
  }

  private multiply(firstNum: number, secondNum: number) {
    return firstNum * secondNum;
  }

  private divide(firstNum: number, secondNum: number) {
    return firstNum / secondNum;
  }
}
