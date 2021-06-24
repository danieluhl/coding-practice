//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const die = () => {
  throw new Error('Only positive numbers are allowed');
};

export const steps = (num, count = 0) =>
  num > 0
    ? num !== 1
      ? num % 2
        ? steps(num * 3 + 1, ++count)
        : steps(num / 2, ++count)
      : count
    : die();
