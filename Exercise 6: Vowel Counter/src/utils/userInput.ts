import * as readline from 'node:readline';

const readlineConfig = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function getUserInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    readlineConfig.question(question, (answer: string) => {
      const word = answer.trim();
      if (word.length === 0) {
        throw new Error('Invalid input. Please enter a valid word.');
      }
      resolve(answer);
    });
  });
}

export function closeReadline(): void {
  readlineConfig.close();
}
