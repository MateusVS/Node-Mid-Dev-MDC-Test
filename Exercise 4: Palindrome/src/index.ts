import { Palindrome } from './class/Palindrome';
import { AppError } from './errors/AppError';
import { closeReadline, getUserInput } from './utils/userInput';

const palindrome = new Palindrome();

async function main(): Promise<void> {
  try {
    const word = await getUserInput('Enter a word to check if it`s a palindrome: ');

    const isPalindrome = palindrome.isPalindrome(word);
    console.log(
      `The word "${word}" ${
        isPalindrome ? "is" : "is not"
      } a palindrome.`
    );
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
