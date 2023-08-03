import { VowelCounter } from './class/VowelCounter';
import { closeReadline, getUserInput } from './utils/userInput';

const vowelCounter = new VowelCounter();

async function main(): Promise<void> {
  let sentence =  await getUserInput('Enter a sentence to count its vowels');
  sentence = sentence.trim();
  const vowelCount = vowelCounter.countVowels(sentence);
  console.log(`The sentence "${sentence}" has ${vowelCount} vowels.`);
  closeReadline();
  process.exit(0);
}

main();
