//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const reverseString = (val) => val.split('').reverse().join('');
// export const reverseString = (val) => Array.from(val).reverse().join('');
// export const reverseString = (val) => [...val].reverse().join('');
export const reverseString = (val) => {
  let result = '';
  let i = val.length;
  while (i--) {
    result += val[i];
  }
  return result;
};
