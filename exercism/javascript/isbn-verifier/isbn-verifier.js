//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const INVALID_CHARS_REGEX = /[^\dX]/g;
const NON_DIGIT_REGEX = /[^\d]/g;

export const isValid = (isbn, nbsi = isbn.replaceAll('-', '')) =>
  !(
    !nbsi ||
    INVALID_CHARS_REGEX.test(nbsi) ||
    NON_DIGIT_REGEX.test(nbsi.slice(0, -1)) ||
    nbsi.length !== 10
  ) &&
  Array.from(nbsi)
    .reverse()
    .map((x) => (x === 'X' ? 10 : x))
    .reduce((total, num, i) => (total = total + num * (i + 1)), 0) %
    11 ===
    0;
