//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPalindrome = (num) => {
  if (num < 10) {
    return true;
  }
  // cut in half, reverse one side, then compare
  // asdfjfdsa length 9 half size is floor of length/2
  const stringNum = String(num);
  const halfLength = Math.floor(stringNum.length / 2);
  const firstHalf = stringNum.slice(0, halfLength);
  const lastHalf = stringNum.slice(-halfLength).split('').reverse().join('');
  return firstHalf === lastHalf;
};

export class Palindromes {
  static generate({ maxFactor, minFactor }) {
    if (maxFactor < minFactor) {
      throw new Error('min must be <= max');
    }
    const smallest = { value: null, factors: [] };
    const largest = { value: null, factors: [] };
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        let product = i * j;
        if (isPalindrome(product)) {
          if (!largest.value || product > largest.value) {
            largest.value = product;
            largest.factors = [[i, j]];
          } else if (product === largest.value) {
            largest.factors.push([i, j]);
          }
          if (!smallest.value || product < smallest.value) {
            smallest.value = product;
            smallest.factors = [[i, j]];
          } else if (product === smallest.value) {
            smallest.factors.push([i, j]);
          }
        }
      }
    }
    return { smallest, largest };
  }
}
