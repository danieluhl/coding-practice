//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (arr, key) => {
  let result = null;
  let start = 0;
  let end = arr.length - 1;
  const {floor} = Math;
  while (result === null) {
    if(start > end) {
      throw new Error('Value not in array');
    }
    const i = floor((end + start) / 2);
    const middle = arr[i];
    if (key < middle) {
      end = i - 1;
    } else if (key > middle) {
      start = i + 1;
    } else if (key === middle) {
      result = i;
    }
  }
  return result;
};
