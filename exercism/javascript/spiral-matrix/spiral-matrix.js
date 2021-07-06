//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const buildGrid = (size) =>
  Array.from({ length: size }, () => [...new Array(size).fill([])]);

const getNextCoords = (row, col, direction, grid) => {
  switch (direction) {
    case 'right':
      break;
    case 'down':
      break;
    case 'left':
      break;
    case 'up':
      break;
  }
};

export class SpiralMatrix {
  static ofSize(size) {
    // build matrix
    // given current number, find next coordinate
    // let maxRow, maxCol, row, col
    let minRow = 0;
    let maxRow = size - 1;
    let minCol = 0;
    let maxCol = size - 1;
    let count = 1;
    let row = 0;
    let col = 0;
    const grid = buildGrid(size);
    do {
      grid[row][col] = count;
      count++;
      const nextCoords = getNextCoords(
        row,
        col,
        minRow,
        maxRow,
        minCol,
        maxCol
      );
      row = nextCoors.row;
      col = nextCoors.col;
    } while (row > -1 && col > -1);
  }
}
