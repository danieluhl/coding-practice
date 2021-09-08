//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.arr = Array.from(new Array(num), (_, i) => i + 1);
  }

  get sumOfSquares() {
    this.sumSquares ??= this.arr.reduce((acc, next) => {
      acc = acc + next ** 2;
      return acc;
    }, 0);
    return this.sumSquares;
  }

  get squareOfSum() {
    this.squareSum ??= this.arr.reduce((a, b) => a + b) ** 2;
    return this.squareSum;
  }

  get difference() {
    return Math.abs(this.squareOfSum - this.sumOfSquares);
  }
}
