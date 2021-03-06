//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*

A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10

*/

const scoresMap = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

const scores = [
  '',
  'AEIOULNRST',
  'DG',
  'BCMP',
  'FHVWY',
  'K',
  '',
  '',
  'JX',
  '',
  'QZ',
];

// export const score = (word) =>
//   [...word.toUpperCase()].reduce(
//     (acc, letter) =>
//       (acc += scores.findIndex((score) => score.includes(letter))),
//     0
//   );

// export const score = (word) => {
//   let sum = 0;
//   word = word.toUpperCase();
//   for (let i = 0; i < word.length; i++) {
//     sum += scoresMap[word[i]];
//   }
//   return sum;
// };

// export const score = (word) =>
//   [...word.toUpperCase()]
//     .map((letter) => scoresMap[letter])
//     .reduce((a, b) => a + b, 0);

export const score = (word) =>
  [...word.toUpperCase()].reduce(
    (acc, letter) => (acc += scoresMap[letter]),
    0
  );
