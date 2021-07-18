//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dividesEvenly = (num, factor) => {
  return num % factor === 0 ? num / factor : false;
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

export const primeFactors = (num) => {
  if(num === 1) {
    return [];
  }k
  if(isPrime(num)) {
    return [num];
  }
  // avoiding array functions because we want to shortcut out often
  for(let i = 2; i < num; i++) {
    let factor = dividesEvenly(num, i);
    if (factor) {
      return [...primeFactors(i), ...primeFactors(factor)];
    }
  }
  throw new Error('not prime but nothing factors, somethings wonky');
};
