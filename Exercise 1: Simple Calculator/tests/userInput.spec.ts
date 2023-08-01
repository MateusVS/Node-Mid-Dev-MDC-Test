import { describe, it, expect } from 'vitest';
import { mockStdin, mockStdout } from 'mock-stdin';
import { getUserInput, getValidNumberInput } from '../src/utils/userInput';

describe('getUserInput', () => {
  it('should resolve with user input', async () => {
    const input = mockStdin();
    const output = mockStdout();

    const question = 'What is your name? ';
    const userInput = 'John Doe';

    setTimeout(() => {
      input.send(userInput);
      input.end();
    }, 10);

    const result = await getUserInput(question);

    expect(result).toBe(userInput);

    output.cleanUp();
    input.cleanUp();
  });
});

describe('getValidNumberInput', () => {
  it('should resolve with a valid number', async () => {
    const input = mockStdin();
    const output = mockStdout();

    const question = 'Enter a number: ';
    const userInput = '42';

    setTimeout(() => {
      input.send(userInput);
      input.end();
    }, 10);

    const result = await getValidNumberInput(question);

    expect(result).toBe(parseFloat(userInput));

    output.cleanUp();
    input.cleanUp();
  });

  it('should reject invalid input and ask for a valid number', async () => {
    const input = mockStdin();
    const output = mockStdout();

    const question = 'Enter a number: ';
    const invalidUserInput = 'Not a number';
    const validUserInput = '42';

    let invalidInputSent = false;

    setTimeout(() => {
      input.send(invalidUserInput);
      invalidInputSent = true;
    }, 10);

    const result = await getValidNumberInput(question);

    expect(invalidInputSent).toBe(true);
    expect(result).toBe(parseFloat(validUserInput));

    output.cleanUp();
    input.cleanUp();
  });
});
