import { analyzeArray } from './analyzeArray';

test('empty array', () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: null,
  });
});

test('array with one element', () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test('array with two elements', () => {
  expect(analyzeArray([1, 2])).toEqual({
    average: 1.5,
    min: 1,
    max: 2,
    length: 2,
  });
});

test('array with multiple elements', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('array with multiple negative elements', () => {
  expect(analyzeArray([1, 8, 3, -4, -2, -6])).toEqual({
    average: 0,
    min: -6,
    max: 8,
    length: 6,
  });
});
