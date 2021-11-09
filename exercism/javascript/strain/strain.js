//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (arr, fn, negate = true) => {
  // arr.filter(fn);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (fn(item) === negate) {
      result.push(item);
    }
  }
  return result;
};

export const discard = (arr, fn) => {
  return keep(arr, fn, false);
};
