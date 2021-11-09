//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (limit) => {
  let nums = Array.from(new Array(limit - 1), (_, i) => i + 2);
  let p = 2;
  while (p !== nums[nums.length - 1]) {
    nums = nums.filter((n) => n === p || n % p !== 0);
    // find the next lowest prime
    p = nums.find((n) => n > p);
  }
  return nums;
};
