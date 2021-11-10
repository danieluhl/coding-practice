//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const directions = [
  [0, 1, 'north'],
  [1, 0, 'east'],
  [0, -1, 'south'],
  [-1, 0, 'west'],
];

const commands = {
  R: 1,
  L: -1,
};

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  #bearing = 0;
  #position = [0, 0];
  get bearing() {
    return directions[this.#bearing][2];
  }

  get coordinates() {
    return this.#position;
  }

  place({ x, y, direction }) {
    this.#position = [x, y];
    this.#bearing = directions.findIndex(([x, y, dir]) => dir === direction);
    if (this.#bearing < 0) {
      throw new InvalidInputError();
    }
  }

  evaluate(instructions) {
    [...instructions].forEach((i) => {
      if (i === 'A') {
        const [addX, addY] = directions[this.#bearing];
        const [x, y] = this.#position;
        this.#position = [addX + x, addY + y];
      } else {
        let newBearing = (this.#bearing + commands[i] + 4) % 4;
        this.#bearing = newBearing;
      }
    });
  }
}
