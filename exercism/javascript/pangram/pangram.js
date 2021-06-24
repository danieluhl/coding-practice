//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (word) => {
  word = word.toLowerCase();
  const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
  let len = word.length;
  while (len-- && alphabet.size) {
    alphabet.delete(word[len]);
  }
  return !alphabet.size;
};
