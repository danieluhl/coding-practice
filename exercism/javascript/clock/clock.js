//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const HOURS_IN_A_DAY = 24;
const MINUTES_IN_A_HOUR = 60;

export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.setTime(hours, minutes);
  }

  rolloverNumber(num, limit) {
    let absNum = Math.abs(num % limit);
    if (num < 0 && absNum !== 0) {
      absNum = limit - absNum;
    }
    return absNum;
  }

  setTime(hours = 0, minutes = 0) {
    const minuteHours = Math.floor(minutes / MINUTES_IN_A_HOUR);
    hours = this.rolloverNumber(hours + minuteHours, HOURS_IN_A_DAY);
    minutes = this.rolloverNumber(minutes, MINUTES_IN_A_HOUR);
    this._hours = hours;
    this._mins = minutes;
  }

  toString() {
    return `${this._hours.toString().padStart(2, '0')}:${this._mins
      .toString()
      .padStart(2, '0')}`;
  }

  plus(mins) {
    this.setTime(this._hours, this._mins + mins);
    return this;
  }

  minus(mins) {
    this.setTime(this._hours, this._mins - mins);
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}
