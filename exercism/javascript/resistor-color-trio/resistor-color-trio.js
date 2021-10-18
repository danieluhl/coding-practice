//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorMap = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export class ResistorColorTrio {
  constructor([first, second, third]) {
    first = colorMap[first];
    second = colorMap[second];
    third = colorMap[third];
    if (first == null || second == null || third == null) {
      return;
    }
    const result = (first * 10 + second) * 10 ** third;
    const isKilo = third > 1;
    this.unit = `${isKilo ? 'kilo' : ''}ohms`;
    this.value = isKilo ? result / 1000 : result;
  }

  get label() {
    if (!this.value) {
      throw new Error('invalid color');
    }
    return `Resistor value: ${this.value} ${this.unit}`;
  }
}
