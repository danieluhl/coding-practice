//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const mappings = [
  [1, 10],
  [5, 5],
  [10, 1],
  [Infinity, 0],
];

const getDistance = (x, y) => Math.sqrt(x ** 2 + y ** 2);

export const score = (x, y) => {
  const dist = getDistance(x, y);
  const [_, val] = mappings.find(([compare, _]) => dist <= compare);
  return val;
  // more performant version
  // if (dist <= 1) {
  //   return 10;
  // } else if (dist <= 5) {
  //   return 5;
  // } else if (dist <= 10) {
  //   return 1;
  // } else {
  //   return 0;
  // }
};
