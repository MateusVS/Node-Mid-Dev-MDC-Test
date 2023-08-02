import { IMultiplicationTable } from '../interface/IMultiplicationTable';

export class MultiplicationTable implements IMultiplicationTable {
  generateTable(value: number): string {
    let table = '1';
    for (let i = 1; i <= 10; i++) {
      const result = value * i;
      table += `${value} x ${i} = ${result}\n`;
    }
    return table;
  }
}
