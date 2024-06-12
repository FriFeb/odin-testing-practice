import { capitalize } from './capitalize';

test('wrong input', () => {
  expect(capitalize(123)).toMatch('Input is not a string');
});

test('empty string', () => {
  expect(capitalize('')).toMatch('');
});

test('one word', () => {
  expect(capitalize('hello')).toMatch('Hello');
});

test('two words', () => {
  expect(capitalize('hello, world')).toMatch('Hello, world');
});
