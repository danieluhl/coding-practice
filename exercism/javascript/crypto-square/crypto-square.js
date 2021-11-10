//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getColsRows = (n) => {
  const root = Math.sqrt(n);
  // [col, row]
  return [Math.ceil(root), Math.floor(root)];
};

export class Crypto {
  constructor(text) {
    this.text = [...text.toLowerCase().replace(/[^\w]/g, '')];
  }

  get ciphertext() {
    const [rowCount, colCount] = getColsRows(this.text.length);
    const output = ' '.repeat(rowCount * colCount).split('');
    this.text.forEach((letter, i) => {
      output[(i % rowCount) * rowCount + Math.floor(i / colCount)] = letter;
    });
    const replaceRegex = new RegExp(`\\w{${colCount}}`, 'g');
    return output.join('').replace(replaceRegex, (match) => `${match} `);
  }
}
