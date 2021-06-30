//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (num) => {
  // check for only digies
  num = num.replaceAll(' ', '');
  if (num.length < 1 || num.match(/[^0-9]/g) || num === '0') {
    return false;
  }

  return (
    [...num]
      .reverse()
      .map(Number)
      .map((n, i) => (i % 2 ? n * 2 : n))
      .map((n) => (n > 9 ? n - 9 : n))
      .reduce((a, b) => a + b) %
      10 ===
    0
  );
  // return (
  //   [...num].reverse().reduce((acc, next, i) => {
  //     next = Number(next);
  //     if (i % 2 !== 0) {
  //       next = next * 2;
  //       if (next > 9) {
  //         next -= 9;
  //       }
  //     }
  //     return acc + next;
  //   }, 0) %
  //     10 ===
  //   0
  // );
};
