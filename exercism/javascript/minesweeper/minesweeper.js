//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dirs = [
  [1, 0],
  [0, 1],
  [1, -1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, 1],
];

const adjacentMines = (board, [x, y]) => {
  return dirs.reduce((acc, [dirX, dirY]) => {
    try {
      if (board[x + dirX][y + dirY] === '*') {
        acc++;
      }
      return acc;
    } catch (e) {
      return acc;
    }
  }, 0);
};

export const annotate = (input) => {
  return input.map((row, r) =>
    [...row]
      .map((val, c) => {
        if (val === '*') {
          return val;
        }
        return adjacentMines(input, [r, c]) || ' ';
      })
      .join('')
  );
};
