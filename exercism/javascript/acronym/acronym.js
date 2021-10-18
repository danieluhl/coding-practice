//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (words) =>
  words
    .replace(/_/g, '')
    .replace(/-/g, ' ')
    .split(' ')
    .filter((x) => x !== '')
    .map((x) => x[0])
    .join('')
    .toUpperCase();
