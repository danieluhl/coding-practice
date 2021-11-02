//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const accumulate = (arr, fn) => {
  let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   result.push(fn(arr[i]));
  // }
  let i = arr.length;
  while (i--) {
    result.unshift(fn(arr[i]));
  }
  return result;
};
