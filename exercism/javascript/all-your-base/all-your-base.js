//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// n*b**0

const getLargestPlacement = (n, b) => {
  let place = 1;
  while (n >= b ** place) {
    place++;
  }
  return place - 1;
};

const leadingZeros = (digits) => {
  return digits[0] === 0 && digits.length > 1;
};

const hasNegative = (digits) => {
  return digits.some((d) => d < 0);
};
const hasLargeDigits = (digits, b1) => {
  return digits.some((d) => d >= b1);
};

export const convert = (digits, b1, b2) => {
  if (b1 < 2) {
    throw new Error('Wrong input base');
  }
  if (b2 < 2) {
    throw new Error('Wrong output base');
  }

  if (
    digits.length === 0 ||
    leadingZeros(digits) ||
    hasNegative(digits) ||
    hasLargeDigits(digits, b1)
  ) {
    throw new Error('Input has wrong format');
  }

  // convert to decimal, then to the new base
  let dec = digits.reverse().reduce((acc, next, i) => {
    acc = acc + next * b1 ** i;
    return acc;
  }, 0);
  const placements = {};
  while (dec > 0) {
    // e.g. 100s would be 2
    const place = getLargestPlacement(dec, b2);
    placements[place] ??= 0;
    placements[place]++;
    dec = dec - b2 ** place;
  }
  const results = Array.from(
    {
      length:
        Object.keys(placements).reduce((acc, next) => {
          return Math.max(Number(acc), Number(next));
        }, 0) + 1,
    },
    (_, i) => placements[i] || 0
  ).reverse();
  return results;
};
