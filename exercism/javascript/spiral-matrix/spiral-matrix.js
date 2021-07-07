const EMPTY = 'empty';

// build matrix where each open spot is EMPTY, we'll check for this explicitly later
const buildGrid = (size) =>
  Array.from({ length: size }, () => new Array(size).fill(EMPTY));

const isValidCoord = ({ row, col }, grid) =>
  grid[row] && grid[row][col] === EMPTY;

const directionFns = [
  ({ row, col }) => ({ row, col: col + 1 }),
  ({ row, col }) => ({ row: row + 1, col }),
  ({ row, col }) => ({ row, col: col - 1 }),
  ({ row, col }) => ({ row: row - 1, col }),
];

const doSpiralGrid = (grid, row = 0, col = -1, direction = 0, count = 1) => {
  let nextCoords = directionFns[direction]({ row, col });
  // if possible, go in the direction indicated
  if (isValidCoord(nextCoords, grid)) {
    const { row: nextRow, col: nextCol } = nextCoords;
    grid[nextRow][nextCol] = count++;
    return doSpiralGrid(grid, nextRow, nextCol, direction, count);
  }

  // check if we need to turn and go in a different direction
  direction = (direction + 1) % 4;
  nextCoords = directionFns[direction]({ row, col });
  if (isValidCoord(nextCoords, grid)) {
    return doSpiralGrid(grid, row, col, direction, count);
  }

  // if we can't go in the current or next direction, we're done!
  return grid;
};

export class SpiralMatrix {
  static ofSize(size) {
    if (size < 1) {
      return [];
    }

    return doSpiralGrid(buildGrid(size));
  }
}
