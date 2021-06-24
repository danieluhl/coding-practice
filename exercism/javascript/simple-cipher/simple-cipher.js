//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const letterToAscii = (letter) => letter.charCodeAt(0);
const LOWER_A_ASCII = letterToAscii('a');
const LOWER_Z_ASCII = letterToAscii('z');
const getDistanceFromA = (letter) => letterToAscii(letter) - LOWER_A_ASCII;
const bumpLetter = (letter, keyChar) => {
  const result = letterToAscii(letter) + getDistanceFromA(keyChar);
  // check upper bound
  const charCode =
    result > LOWER_Z_ASCII
      ? (result % LOWER_Z_ASCII) + LOWER_A_ASCII - 1
      : result;
  return String.fromCharCode(charCode);
};
const reverseBumpLetter = (letter, keyChar) => {
  const result = letterToAscii(letter) - getDistanceFromA(keyChar);
  // check lower bound
  const charCode =
    result < LOWER_A_ASCII
      ? LOWER_Z_ASCII - (result - LOWER_A_ASCII + 1)
      : result;

  return String.fromCharCode(charCode);
};

export class Cipher {
  constructor(input) {
    this.input = input ? Array.from(input) : new Array(99).fill('a');
    this.value = '';
  }

  encode(str) {
    this.value = Array.from(str)
      .map((char, i) => bumpLetter(char, this.key[i % this.key.length]))
      .join('');
    return this.value;
  }

  decode(value) {
    const result = Array.from(value)
      .map((char, i) => reverseBumpLetter(char, this.key[i % this.key.length]))
      .join('');
    return result;
  }

  get key() {
    return this.input.join('');
  }
}

// const cipher = new Cipher('abcdefghij');
// console.log(cipher.encode('zzzzzzzzzz'));
