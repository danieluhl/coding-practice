//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPrime = (n) => {
  let i = n - 1;
  while (i > 1) {
    if (n % i === 0) {
      return false;
    }
    i--;
  }
  return true;
};

export const prime = (n) => {
  if (n === 0) {
    throw new Error('there is no zeroth prime');
  }
  let primes = [];
  let num = 2;
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes.pop();
};
