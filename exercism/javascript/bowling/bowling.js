//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Bowling {
  frames = [];
  firstRoll = null;
  secondRoll = null;

  setScore(first, second) {
    const frame = {};
    const previousFrame = this.frames[this.frames.length - 1];

    if (previousFrame) {
      if (previousFrame.spare) {
        first = first * 2;
      }
      if (previousFrame.strike) {
        first = first * 2;
        second = second * 2;
      }
    }

    if (second != null) {
      // check if previous was spare
      frame.spare = first + second === 10;
      frame.points = first + second;
    } else {
      // strike!
      frame.strike = true;
      frame.points = 10;
    }
    this.frames.push(frame);
  }

  roll(pins) {
    if (this.firstRoll == null) {
      // strike!
      if (pins === 10) {
        this.setScore(10);
        return;
      }
      this.firstRoll = pins;
      if (this.frames.length === 10) {
        this.setScore(this.firstRoll, 0);
      }
      return;
    }
    // we only get here if we have two rolls
    this.setScore(this.firstRoll, pins);
    // need to use null since 0 is valid
    this.firstRoll = null;
  }

  score() {
    return this.frames.reduce((acc, next) => acc + next.points, 0);
  }
}
