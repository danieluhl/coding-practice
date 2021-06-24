//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this._rows = str.split('\n').map((row) => row.split(' ').map(Number));
    const colCount = this._rows[0].length;
    this._cols = this._rows.reduce(
      (acc, next) => {
        next.forEach((num, col) => {
          acc[col].push(num);
        });
        return acc;
      },
      Array.from(new Array(colCount), (_) => [])
    ); // note .fill([]) is tricky :) here, doesn't work
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._cols;
  }
}
