import { expect, describe, it, beforeAll } from 'vitest';
import { Palindrome } from '../src/class/Palindrome';
import { IPalindrome } from '../src/interface/IPalindrome';

let palindrome: IPalindrome;

beforeAll(() => {
  palindrome = new Palindrome();
});

describe('Palindrome class spec', () => {
  it('should identify a single character as palindrome', () => {
    expect(palindrome.isPalindrome('a')).toBe(true);
  });

  it('should identify a palindrome word', () => {
    expect(palindrome.isPalindrome('level')).toBe(true);
    expect(palindrome.isPalindrome('deified')).toBe(true);
    expect(palindrome.isPalindrome('rotor')).toBe(true);
  });

  it('should identify a non-palindrome word', () => {
    expect(palindrome.isPalindrome('hello')).toBe(false);
    expect(palindrome.isPalindrome('world')).toBe(false);
    expect(palindrome.isPalindrome('node')).toBe(false);
  });

  it('should ignore case and non-alphabetic characters', () => {
    expect(palindrome.isPalindrome('Racecar')).toBe(true);
    expect(palindrome.isPalindrome('A man, a plan, a canal, Panama')).toBe(
      true
    );
  });
});
