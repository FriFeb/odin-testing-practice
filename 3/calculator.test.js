import { Calculator } from './calculator';

test('is calculator object', () => {
  expect(new Calculator()).toBeInstanceOf(Calculator);
});

test('add zeros', () => {
  expect(Calculator.add(0, 0)).toBe(0);
});

test('add two numbers', () => {
  expect(Calculator.add(1, 4)).toBe(5);
});

test('add two floating point numbers', () => {
  expect(Calculator.add(0.2, 0.1)).toBeCloseTo(0.3);
});

test('subtract zeros', () => {
  expect(Calculator.subtract(0, 0)).toBe(0);
});

test('subtract negative with positive', () => {
  expect(Calculator.subtract(-3, 4)).toBe(-7);
});

test('subtract positive with negative', () => {
  expect(Calculator.subtract(4, -3)).toBe(7);
});

test('multiply zeros', () => {
  expect(Calculator.multiply(0, 0)).toBe(0);
});

test('multiply two numbers', () => {
  expect(Calculator.multiply(3, 4)).toBe(12);
});

test('multiply two negative numbers', () => {
  expect(Calculator.multiply(-3, -4)).toBe(12);
});

test('divide zeros', () => {
  expect(Calculator.divide(0, 0)).toBeNaN();
});

test('divide two numbers', () => {
  expect(Calculator.divide(6, 3)).toBe(2);
});

test('divide two numbers with remainder', () => {
  expect(Calculator.divide(10, 3)).toBeCloseTo(3.33);
});
