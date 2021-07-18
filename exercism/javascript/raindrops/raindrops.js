//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*

- has 3 as a factor, add 'Pling' to the result.
- has 5 as a factor, add 'Plang' to the result.
- has 7 as a factor, add 'Plong' to the result.
- _does not_ have any of 3, 5, or 7 as a factor, the result should be the digits of the number.

## Examples

- 28 has 7 as a factor, but not 3 or 5, so the result would be "Plong".
- 30 has both 3 and 5 as factors, but not 7, so the result would be "PlingPlang".
- 34 is not factored by 3, 5, or 7, so the result would be "34".


*/

const factorWords = [
  [3, 'Pling'],
  [5, 'Plang'],
  [7, 'Plong'],
];

const isFactor = (num, factor) => num % factor === 0;

export const convert = (num) => {
  let result = factorWords.reduce(
    (acc, [factor, word]) => (isFactor(num, factor) ? acc + word : acc),
    ''
  );
  return result || num + '';
};
