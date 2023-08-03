import { IGradeCalculator } from '../interfaces/IGradeCalculator';

export class GradeCalculator implements IGradeCalculator {
  calculateAverage(grades: number[]): number {
    if (grades.length === 0) {
      throw new Error('Grades array must not be empty.');
    }

    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
  }
}
