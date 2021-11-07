//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// solve for one direction, transpose the matrix, then re-run
//  the same algo

// note these are the moves because we removed spaces
const moves = [
  [-1, 0],
  [-1, +1],
  [0, -1],
  [0, +1],
  [+1, -1],
  [+1, 0],
];

export class Board {
  constructor(board) {
    // get rid of all the spaces to simplfy things
    this.board = board.map((row) => [...row].filter((l) => l !== ' '));
    this._winner = '';
  }

  transpose() {
    return this.board[0].map((_, i) => this.board.map((row) => row[i]));
  }

  // transpose
  //  - remove leading spaces
  //  - do transpose
  //  - add the leading spaces back

  // helpers
  //  - get all next coordinates (6)
  //  - validate next coordinates

  getAllNextPositions(position, letter, path) {
    const { board } = this;
    // check all 6 possible other next positions
    const nextPositions = moves
      .map(([x, y]) => [position[0] + x, position[1] + y])
      .filter((position) => !path.has(JSON.stringify(position)))
      .filter(([x, y]) => {
        try {
          return board[x][y] === letter;
        } catch {}
      });
    return nextPositions;
  }

  // end state
  //  - we've reached the last row
  //  - we have no more valid moves
  // params
  //  - current position
  //  - path so far (Set of all previous positions)
  //  - letter
  solve(letter, path, position) {
    const { board } = this;
    const nextPositions = this.getAllNextPositions(position, letter, path);
    // if there are no next positions, we're done :(
    if (nextPositions.length === 0) {
      return;
    }
    // if any next positions are in the last row, we're done!
    if (nextPositions.some(([x, _]) => x === board.length - 1)) {
      this._winner = letter;
      return;
    }

    // otherwise, continue in every possible direction!
    nextPositions.forEach((nextPosition) => {
      const nextPath = new Set(path);
      nextPath.add(JSON.stringify(nextPosition));
      this.solve(letter, nextPath, nextPosition);
    });
  }

  winner(letter = 'O') {
    const { board } = this;

    const startIndexes = board[0]
      .map((l, i) => (l === letter ? i : null))
      .filter((v) => v != null);

    // check if we already have a winner
    if (board.length === 1 && startIndexes.length > 0) {
      return letter;
    }

    startIndexes.forEach((i) => {
      const path = new Set();
      const position = [0, i];
      path.add(JSON.stringify(position));
      this.solve(letter, path, position);
    });

    if (this._winner || letter === 'X') {
      return this._winner;
    } else {
      this.board = this.transpose();
      return this.winner('X');
    }
  }
}
