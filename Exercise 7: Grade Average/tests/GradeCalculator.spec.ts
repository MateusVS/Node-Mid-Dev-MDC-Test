import { expect, describe, it, beforeAll } from 'vitest';
import { GradeCalculator } from '../src/class/GradeCalculator';
import { IGradeCalculator } from '../src/interfaces/IGradeCalculator';

let gradeCalculator: IGradeCalculator;

beforeAll(() => {
  gradeCalculator = new GradeCalculator();
});

describe('GradeCalculator class spec', () => {
  it('should calculate average of grades for positive numbers', () => {
    const grades = [80, 90, 70];
    const average = gradeCalculator.calculateAverage(grades);
    expect(average).toBe(80);
  });

  it('should calculate average of grades for negative numbers', () => {
    const grades = [-80, -90, -70];
    const average = gradeCalculator.calculateAverage(grades);
    expect(average).toBe(-80);
  });

  it('should calculate average of grades for mixed numbers', () => {
    const grades = [90, -80, 100, 70];
    const average = gradeCalculator.calculateAverage(grades);
    expect(average).toBe(45);
  });

  it('should throw error for empty grades array', () => {
    expect(() => gradeCalculator.calculateAverage([])).toThrowError(
      'Grades array must not be empty.'
    );
  });
});
