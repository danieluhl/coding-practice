//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
let i = dna1.length;
  if (i !== dna2.length) {
    if (!dna1) {
      throw new Error('left strand must not be empty');
    }
    if (!dna2) {
      throw new Error('right strand must not be empty');
    }
    throw new Error('left and right strands must be of equal length');
  }
  let hamming = 0;
  while (i--) {
    if (dna1[i] !== dna2[i]) {
      hamming++;
    }
  }
  return hamming;

*/

const validate = (dna1, dna2) => {
  if (dna1.length !== dna2.length) {
    if (!dna1) {
      throw new Error('left strand must not be empty');
    }
    if (!dna2) {
      throw new Error('right strand must not be empty');
    }
    throw new Error('left and right strands must be of equal length');
  }
  return true;
};

export const compute = (dna1, dna2) =>
  validate(dna1, dna2) &&
  [...dna1].filter((char, i) => char !== dna2[i]).length;
