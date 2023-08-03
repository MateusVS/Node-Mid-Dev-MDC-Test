import { GradeCalculator } from './class/GradeCalculator';
import { AppError } from './errors/AppError';
import { closeReadline, getValidNumberInput } from './utils/userInput';

const gradeCalculator = new GradeCalculator();

async function main (): Promise<void> {
  try {
    const grades: number[] = [];

    for (let i = 1; i <= 3; i++) {
      const grade = await getValidNumberInput(`Enter the grade for subject ${i}: `);
      grades.push(grade);
    }

    const average = gradeCalculator.calculateAverage(grades);
    console.log(`The average grade is: ${average.toFixed(2)}`);
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
