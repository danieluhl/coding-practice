//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (!series) {
      throw new Error('series cannot be empty');
    }
    this.series = [...series].map(Number);
  }

  slices(sliceLength) {
    let seriesLength = this.series.length;
    if (sliceLength > seriesLength) {
      throw new Error('slice length cannot be greater than series length');
    }
    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }
    const result = [];
    for (let i = 0; i <= seriesLength - sliceLength; i++) {
      result.push(this.series.slice(i, i + sliceLength));
    }
    return result;
  }
}
