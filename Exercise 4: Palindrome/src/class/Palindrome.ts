import { IPalindrome } from '../interface/IPalindrome';

export class Palindrome implements IPalindrome {
  isPalindrome(word: string): boolean {
    const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, "");
    const reversedWord = cleanedWord.split("").reverse().join("");
    return cleanedWord === reversedWord;
  }
}
