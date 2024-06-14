import { caesarCipher } from './caesarCipher';

test('correct shift', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('from end to start shift', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
