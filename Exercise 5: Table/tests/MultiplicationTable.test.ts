import { expect, describe, it, beforeAll } from 'vitest';
import { MultiplicationTable } from '../src/class/MultiplicationTable';
import { IMultiplicationTable } from '../src/interface/IMultiplicationTable';

let table: IMultiplicationTable;

beforeAll(() => {
  table = new MultiplicationTable();
});

describe('Palindrome class spec', () => {
  it('should generate multiplication table for number 5', () => {
    const expectedTable =
      '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50\n';
    const actualTable = table.generateTable(5);
    expect(actualTable).toBe(expectedTable);
  });

  it('should generate multiplication table for number 7', () => {
    const expectedTable =
      '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70\n';
    const actualTable = table.generateTable(7);
    expect(actualTable).toBe(expectedTable);
  });
});
