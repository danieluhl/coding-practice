//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (factors, n) => {
  let sum = 0;
  while (n--) {
    if (factors.some((f) => n % f === 0)) {
      sum += n;
    }
  }
  return sum;
};
