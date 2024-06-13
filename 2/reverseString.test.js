import { reverseString } from './reverseString';

test('empty string', () => {
  expect(reverseString('')).toBe('');
});

test('one word', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

test('two words', () => {
  expect(reverseString('Hello, world!')).toBe('!dlrow ,olleH');
});
