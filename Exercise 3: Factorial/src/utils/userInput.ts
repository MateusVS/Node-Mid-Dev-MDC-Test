import * as readline from 'node:readline';

const readlineConfig = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function getUserInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    readlineConfig.question(question, (answer: string) => {
      resolve(answer);
    });
  });
}

export async function getValidNumberInput(question: string): Promise<number> {
  let userInput: string;
  let isValidNumber = false;

  do {
    userInput = await getUserInput(question);
    const numberValue = parseFloat(userInput);

    if (!isNaN(numberValue)) {
      isValidNumber = true;
      return numberValue;
    } else {
      console.error('Invalid input. Please enter a valid number.');
    }
  } while (!isValidNumber);

  throw new Error('This should not happen. Error handling for invalid number input failed.');
}

export function closeReadline(): void {
  readlineConfig.close();
}
