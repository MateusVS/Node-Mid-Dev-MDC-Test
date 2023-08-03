import { IVowelCounter } from '../interface/IVowelCounter';

export class VowelCounter implements IVowelCounter {
  countVowels(sentence: string): number {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;

    for (const char of sentence) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }

    return vowelCount;
  }
}
