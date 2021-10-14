//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isSaddlePoint = (matrix, row, col) => {
  const height = matrix.length;
  const compare = matrix[row][col];
  // find any numbers greater than compare in the row
  if (matrix[row].find(num => num > compare)) {
    return false;
  }
  // find any numbers smaller than compare in the column
  for (let i = 0; i < height; i++) {
    if (matrix[i][col] < compare) {
      return false;
    }
  }
  return true;
};

export const saddlePoints = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;
  let result = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (isSaddlePoint(matrix, i, j)) {
        result.push({row: i + 1, column: j + 1});
      }
    }
  }
  return result;
};
