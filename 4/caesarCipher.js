const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const punctuation = [' ', ',', '.', '!', '?', "'", '"'];

function isLetter(character) {
  return punctuation.includes(character) ? false : true;
}

export function caesarCipher(string, shift) {
  return string
    .split('')
    .map((character) => {
      let isUpperCase = false;

      if (!isLetter(character)) return character;

      if (!alphabet.includes(character)) {
        isUpperCase = true;
        character = character.toLowerCase();
      }

      const currentIndex = alphabet.findIndex((letter) => letter === character);

      let newIndex = currentIndex + shift;
      if (newIndex >= alphabet.length) newIndex -= alphabet.length;

      let newCharacter = alphabet.find((_, index) => index === newIndex);
      if (isUpperCase) newCharacter = newCharacter.toUpperCase();

      return newCharacter;
    })
    .join('');
}
