//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const chromaticSharp = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];
const chromaticFlats = [
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
  'A',
  'Bb',
  'B',
];

const sharps = [
  'C',
  'G',
  'D',
  'A',
  'E',
  'B',
  'F#',
  'a',
  'e',
  'b',
  'f#',
  'c#',
  'g#',
  'd#',
];

const steps = { M: 2, m: 1, A: 3 };
const titleCase = (str) => str[0].toUpperCase() + str.slice(1, str.length);

export class Scale {
  constructor(tonic) {
    this.chromaticScale = sharps.includes(tonic)
      ? chromaticSharp
      : chromaticFlats;
    tonic = titleCase(tonic);
    const startIndex = this.chromaticScale.indexOf(tonic);
    this.chromaticScale = [
      ...this.chromaticScale.slice(startIndex, this.chromaticScale.length),
      ...this.chromaticScale.slice(0, startIndex),
    ];
  }

  chromatic() {
    return this.chromaticScale;
  }

  interval(intervals, index = 0) {
    return [
      this.chromaticScale[0],
      ...[...intervals.slice(0, -1)].map((interval) => {
        index = index + steps[interval];
        return this.chromaticScale[index];
      }),
    ];
  }
}
