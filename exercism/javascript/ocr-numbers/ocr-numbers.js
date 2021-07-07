//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/*

'    _  _     _  _  _  _  _  _ \n' +
'  | _| _||_||_ |_   ||_||_|| |\n' +
'  ||_  _|  | _||_|  ||_| _||_|\n' +
'                              '


*/

const numberMap = {
  '     |  |   ': '1',
  ' _  _||_    ': '2',
  ' _  _| _|   ': '3',
  '   |_|  |   ': '4',
  ' _ |_  _|   ': '5',
  ' _ |_ |_|   ': '6',
  ' _   |  |   ': '7',
  ' _ |_||_|   ': '8',
  ' _ |_| _|   ': '9',
  ' _ | ||_|   ': '0',
};

export const convert = (nums) => {
  let rows = nums.split('\n');
  // take the first 3 of each row, assign a letter, repeat until no more characters
  // default to '?';
  const size = rows[0].length;
  let result = '';
  for (let j = 0; j < rows.length; j += 4) {
    const currentRows = rows.slice(j, j + 4);
    for (let i = 0; i < size; i += 3) {
      let strNum = currentRows.reduce((acc, next) => {
        acc += next.slice(i, i + 3);
        return acc;
      }, '');
      let num = numberMap[strNum];
      num ??= '?';
      result += num;
    }
    result += ',';
  }
  return result.slice(0, result.length - 1);
};
