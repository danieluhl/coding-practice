//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  // num = sums ** len
  const arr = Array.from('' + num).map((x) => parseInt(x, 10));
  const { length: exp } = arr;
  return num === arr.reduce((sum, digit) => sum + digit ** exp, 0);
};
