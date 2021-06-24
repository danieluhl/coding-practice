//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PLANET_SECONDS = {
  mercury: 7_600_543.81992,
  venus: 19_414_149.052176,
  earth: 31_557_600,
  mars: 59_354_032.690079994,
  jupiter: 374_355_659.124,
  saturn: 929_292_362.8848,
  uranus: 2_651_370_019.3296,
  neptune: 5_200_418_560.032001,
};

export const age = (key, seconds) =>
  parseFloat((seconds / PLANET_SECONDS[key]).toFixed(2));
