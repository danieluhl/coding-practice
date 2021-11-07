//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DIRECTIONS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
];

class WordSearch {
  #grid;
  constructor(grid) {
    this.#grid = grid.map((letters) => Array.from(letters));
  }

  // returns end if success, otherwise false
  findWordInDirection([dirRow, dirCol], word, start) {
    let end = false;
    let currentLocation = start;
    // check that every letter matches what's in
    //  the grid in this direction
    [...word].every((letter, i) => {
      const [row, col] = currentLocation;
      // check if we're out of bounds or not a match
      if (
        !this.#grid[row] ||
        !this.#grid[row][col] ||
        this.#grid[row][col] !== letter
      ) {
        return false;
      }
      // check if we're at the last letter
      if (i === word.length - 1) {
        end = currentLocation;
        return true;
      }
      // otherswise, keep looping
      currentLocation = [row + dirRow, col + dirCol];
      return true;
    });
    return end;
  }

  findWord(word) {
    // loop over each row to find a starting letter
    for (let col = 0; col < this.#grid[0].length; col++) {
      for (let row = 0; row < this.#grid.length; row++) {
        let end = null;
        const start = [row, col];
        if (this.#grid[row][col] === word[0]) {
          // from this starting position, check every direction
          DIRECTIONS.find((direction) => {
            end = this.findWordInDirection(direction, word, start);
            return end;
          });
        }
        if (end) {
          return {
            [word]: {
              start: [start[0] + 1, start[1] + 1],
              end: [end[0] + 1, end[1] + 1],
            },
          };
        }
      }
    }
    return null;
  }

  find(words) {
    // loop over each word and do the find
    return words
      .map((word) => this.findWord(word))
      .filter(Boolean)
      .reduce((acc, next) => ({ ...acc, ...next }), {});
  }
}

export default WordSearch;
