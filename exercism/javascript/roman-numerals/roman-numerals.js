//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// const numsMap = {
//   1: 'I',
//   4: 'IV',
//   5: 'V',
//   9: 'IX',
//   10: 'X',
//   40: 'XL',
//   50: 'L',
//   90: 'XC',
//   100: 'C',
//   400: 'CD',
//   500: 'D',
//   900: 'CM',
//   1000: 'M',
// };

// export const toRoman = (n) => {
//   // look at the largest possible key of nums map and subtract it, and cont
//   let result = '';
//   while (n > 0) {
//     // find the next largest key
//     const [selectedKey, selectedValue] = Object.entries(numsMap).find(
//       ([key], i, arr) => {
//         if (!arr[i + 1]) {
//           return true;
//         }
//         const nextKey = arr[i + 1][0];
//         return n >= key && n < nextKey;
//       }
//     );
//     n = n - selectedKey;
//     result += selectedValue;
//   }
//   return result;
// };

const numPairs = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

export const toRoman = (n) => {
  const result = numPairs.reduce((acc, [key, val]) => {
    while (n >= key) {
      n = n - key;
      acc = acc + val;
    }
    return acc;
  }, '');
  return result;
};
