//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  white;
  black;
  constructor({
    black: [blackRow, blackColumn] = [],
    white: [whiteRow, whiteColumn] = [],
  } = {}) {
    if (blackRow == null && blackColumn == null) {
      blackRow = 0;
      blackColumn = 3;
    }
    if (whiteRow == null && whiteColumn == null) {
      whiteRow = 7;
      whiteColumn = 3;
    }
    this.blackRow = blackRow;
    this.blackColumn = blackColumn;
    this.whiteRow = whiteRow;
    this.whiteColumn = whiteColumn;
    this.white = [whiteRow, whiteColumn];
    this.black = [blackRow, blackColumn];
    if (
      blackRow > 7 ||
      blackRow < 0 ||
      blackColumn > 7 ||
      blackColumn < 0 ||
      whiteRow > 7 ||
      whiteRow < 0 ||
      whiteColumn > 7 ||
      whiteColumn < 0
    ) {
      throw new Error('Queen must be placed on the board');
    }
    if (blackRow === whiteRow && blackColumn === whiteColumn) {
      throw new Error('Queens cannot share the same space');
    }
    // build board with underscores
    this.board = Array.from({ length: 8 }, (_, i) => {
      return Array.from({ length: 8 }, (_, j) => {
        if (i === this.blackRow && j === this.blackColumn) {
          return 'B';
        }
        if (i === this.whiteRow && j === this.whiteColumn) {
          return 'W';
        }
        return '_';
      });
    });
  }

  toString() {
    return this.board.map((row) => row.join(' ')).join('\n');
  }

  get canAttack() {
    const { whiteRow, blackRow, whiteColumn, blackColumn } = this;
    const whiteSum = whiteRow + whiteColumn;
    const blackSum = blackRow + blackColumn;
    const whiteDif = whiteRow - whiteColumn;
    const blackDif = blackRow - blackColumn;
    return (
      whiteRow === blackRow ||
      whiteColumn === blackColumn ||
      whiteSum === blackSum ||
      whiteDif === blackDif
    );
  }
}
