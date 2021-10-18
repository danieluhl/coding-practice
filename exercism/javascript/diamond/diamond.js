//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const buildCorner = (start) => {
  let i = letters.indexOf(start) + 1;
  let result = [];
  let afterSpaces = i - 1;
  let beforeSpaces = 0;
  while (i--) {
    result.unshift(
      `${' '.repeat(beforeSpaces)}${letters[i]}${' '.repeat(afterSpaces)}`
    );
    beforeSpaces++;
    afterSpaces--;
  }
  return result;
};

const buildTop = (corner) => {
  return corner.map(
    (str) => `${str}${str.slice(0, -1).split('').reverse().join('')}`
  );
};

const buildBottom = (top) => {
  for (let i = top.length - 2; i >= 0; i--) {
    top.push(top[i]);
  }
  return top;
};

export const rows = (start) => {
  if (start === 'A') {
    return [start];
  }
  return buildBottom(buildTop(buildCorner(start)));
};

// const buildRow = (out, inside, letter) => {
//   const outsideSpaces = ' '.repeat(out);
//   if (inside < 1) {
//     return `${outsideSpaces}${letter}${outsideSpaces}`;
//   }
//   const insideSpaces = ' '.repeat(inside);
//   return `${outsideSpaces}${letter}${insideSpaces}${letter}${outsideSpaces}`;
// };

// export const rows = (start) => {
//   if (start === 'A') {
//     return [start];
//   }
//   // start from the middle and move out
//   let outsideSpaces = 0;
//   let letterIndex = letters.indexOf(start);
//   let insideSpaces = (letterIndex - 1) * 2 + 1;
//   let result = [];
//   // first push the middle row
//   result.push(buildRow(outsideSpaces, insideSpaces, letters[letterIndex]));
//   outsideSpaces += 1;
//   insideSpaces -= 2;
//   while (letterIndex--) {
//     const row = buildRow(outsideSpaces, insideSpaces, letters[letterIndex]);
//     result.push(row);
//     result.unshift(row);
//     outsideSpaces += 1;
//     insideSpaces -= 2;
//   }
//   console.log(result);
//   return result;
// };
