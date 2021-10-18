//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag = 0) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(c2) {
    return new ComplexNumber(this.real + c2.real, this.imag + c2.imag);
  }

  sub(c2) {
    return new ComplexNumber(this.real - c2.real, this.imag - c2.imag);
  }

  div(c2) {
    return new ComplexNumber(
      (this.real * c2.real + this.imag * c2.imag) /
        (c2.real ** 2 + c2.imag ** 2),
      (this.imag * c2.real - this.real * c2.imag) /
        (c2.real ** 2 + c2.imag ** 2)
    );
  }

  mul(c2) {
    //(a * c - b * d) + (b * c + a * d)
    return new ComplexNumber(
      this.real * c2.real - this.imag * c2.imag,
      this.imag * c2.real + this.real * c2.imag
    );
  }

  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  get conj() {
    return new ComplexNumber(
      this.real,
      this.imag !== 0 ? -this.imag : this.imag
    );
  }

  get exp() {
    const { real, imag } = this;
    const { E, cos, sin } = Math;
    return new ComplexNumber(E ** real).mul(
      new ComplexNumber(cos(imag), sin(imag))
    );
  }
}
