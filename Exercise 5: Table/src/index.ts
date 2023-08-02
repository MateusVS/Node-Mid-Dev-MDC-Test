import { MultiplicationTable } from './class/MultiplicationTable';
import { getValidNumberInput } from './utils/userInput';

const multiplicationTable = new MultiplicationTable();

async function main(): Promise<void> {
  const number = await getValidNumberInput('Enter a number to display its multiplication table: ');
  const table = multiplicationTable.generateTable(number);
  console.log(`Multiplication table of ${number}:\n${table}`);
}

main();
