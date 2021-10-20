//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isYacht = (arr) => {
  let num = arr.pop();
  return arr.some((n) => n !== num) ? 0 : 50;
};

const countOf = (arr, num) => {
  return arr.reduce((sum, next) => {
    if (next === num) {
      sum = sum + next;
    }
    return sum;
  }, 0);
};

const isFullHouse = (arr) => {
  const counts = arr.reduce(
    (acc, next) => {
      acc[next] ??= 0;
      acc[next]++;
      acc.sum += next;
      return acc;
    },
    { sum: 0 }
  );
  const [c1, c2, sum] = Object.values(counts).sort((a, b) => a - b);
  return c1 === 2 && c2 === 3 ? sum : 0;
};

const isFourOfAKind = (arr) => {
  const counts = arr.reduce((acc, next) => {
    acc[next] ??= 0;
    acc[next]++;
    return acc;
  }, {});
  return Object.entries(counts).reduce((res, [num, count]) => {
    if (count > 3) {
      res = num * 4;
    }
    return res;
  }, 0);
};

const littleStraight = (arr) => {
  return arr.sort().every((n, i) => n === i + 1) ? 30 : 0;
};

const bigStraight = (arr) => {
  return arr.sort().every((n, i) => n === i + 2) ? 30 : 0;
};

const choice = (arr) => arr.reduce((a, b) => a + b);

const solvers = {
  yacht: isYacht,
  ones: (arr) => countOf(arr, 1),
  twos: (arr) => countOf(arr, 2),
  threes: (arr) => countOf(arr, 3),
  fours: (arr) => countOf(arr, 4),
  fives: (arr) => countOf(arr, 5),
  sixes: (arr) => countOf(arr, 6),
  'full house': isFullHouse,
  'four of a kind': isFourOfAKind,
  'little straight': littleStraight,
  'big straight': bigStraight,
  choice: choice,
};

export const score = (arr, str) => {
  return solvers[str](arr);
};
