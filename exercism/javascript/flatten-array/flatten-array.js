//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const flatten = (arrays, result = []) => {
//   arrays.forEach((v) =>
//     Array.isArray(v) ? flatten(v, result) : result.push(v)
//   );
//   return result.filter((v) => v != null);
// };

export const flatten = (arrays) =>
  arrays
    .reduce(
      (acc, v) => (Array.isArray(v) ? [...acc, ...flatten(v)] : [...acc, v]),
      []
    )
    .filter((v) => v != null);
