import { expect, describe, it, beforeAll } from 'vitest';
import { VowelCounter } from '../src/class/VowelCounter';
import { IVowelCounter } from '../src/interface/IVowelCounter';

let vowelCounter: IVowelCounter;

beforeAll(() => {
  vowelCounter = new VowelCounter();
});

describe('VowelCounter class spec', () => {
  it('should count vowels in sentence with lowercase and uppercase vowels', () => {
    const sentence = 'Hello, World!';
    const vowelCount = vowelCounter.countVowels(sentence);
    expect(vowelCount).toBe(3);
  });

  it('should count vowels in sentence with only lowercase vowels', () => {
    const sentence = 'this is a test';
    const vowelCount = vowelCounter.countVowels(sentence);
    expect(vowelCount).toBe(4);
  });

  it('should count vowels in sentence with only uppercase vowels', () => {
    const sentence = 'THE QUICK BROWN FOX';
    const vowelCount = vowelCounter.countVowels(sentence);
    expect(vowelCount).toBe(5);
  });

  it('should count vowels in empty sentence', () => {
    const sentence = '';
    const vowelCount = vowelCounter.countVowels(sentence);
    expect(vowelCount).toBe(0);
  });
});
