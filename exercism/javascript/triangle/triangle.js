//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isTriangle() {
    let { a, b, c, isTriangleMemo } = this;
    return (isTriangleMemo ??=
      a > 0 && b > 0 && c > 0 && a + b >= c && a + c >= b && c + b >= a);
  }

  get isEquilateral() {
    let { a, b, c, isTriangle } = this;
    return isTriangle && a === b && b === c;
  }

  get isIsosceles() {
    let { a, b, c, isTriangle } = this;
    return isTriangle && (a === b || b === c || a === c);
  }

  get isScalene() {
    let { isIsosceles, isTriangle } = this;
    return isTriangle && !isIsosceles;
  }

  get isDegenerate() {
    let { a, b, c } = this;
    return a + b === c || a + c === b || c + b === a;
  }
}
