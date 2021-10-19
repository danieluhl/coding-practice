//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (str, count) => {
  if (count > str.length) {
    throw new Error('Span must be smaller than string length');
  }
  if (count < 0) {
    throw new Error('Span must be greater than zero');
  }
  if (count === 0) {
    return 1;
  }
  if (isNaN(Number(str))) {
    throw new Error('Digits input must only contain digits');
  }

  const nums = Array.from(str);
  const { max } = Math;
  let largest = 0;
  for (let i = 0; i < nums.length - count + 1; i++) {
    const cur = nums.slice(i, i + count).reduce((a, b) => a * b);
    largest = max(largest, cur);
  }
  return largest;
};
