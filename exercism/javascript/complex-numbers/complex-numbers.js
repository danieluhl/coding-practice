//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imaginary) {
    this._real = real;
    this._imaginary = imaginary;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imaginary;
  }

  add(number) {
    return new ComplexNumber(
      this._real + number.real,
      this._imaginary + number.imag
    );
  }

  sub(number) {
    return new ComplexNumber(
      this._real - number.real,
      this._imaginary - number.imag
    );
  }

  div() {
    throw new Error('Remove this statement and implement this function');
  }

  mul() {
    throw new Error('Remove this statement and implement this function');
  }

  get abs() {
    throw new Error('Remove this statement and implement this function');
  }

  get conj() {
    throw new Error('Remove this statement and implement this function');
  }

  get exp() {
    throw new Error('Remove this statement and implement this function');
  }
}
