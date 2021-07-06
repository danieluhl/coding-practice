//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (rows) => {
  let padLength = 0;
  return rows
    .reverse()
    .map((row) => {
      if (row.length > padLength) {
        padLength = row.length;
      } else {
        // pad the row with spaces for the difference
        row += ' '.repeat(padLength - row.length);
      }
      return row;
    })
    .reverse()
    .reduce((cols, row) => {
      [...row].forEach((letter, i) => {
        cols[i] ??= '';
        cols[i] = cols[i] + letter;
        return cols[i];
      });
      return cols;
    }, []);
};
