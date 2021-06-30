//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isSum = (a, b, c, max) => a + b + c === max;
const isTriplet = (a, b, c) => a ** 2 + b ** 2 === c ** 2;

export function triplets({ minFactor = 0, maxFactor, sum }) {
  let result = [];
  maxFactor ??= sum;
  for (let i = minFactor; i < maxFactor; i++) {
    for (let j = i + 1; j < maxFactor; j++) {
      for (let k = j + 1; k < maxFactor; k++) {
        if (isSum(i, j, k, sum) && isTriplet(i, j, k)) {
          result.push(new Triplet(i, j, k));
        }
      }
    }
  }
  return result;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
