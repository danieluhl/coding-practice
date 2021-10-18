//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// aaabbbcbbb
// [{letter: a, count: 3}]

export const encode = (str) => {
  const arr = [...str].reduce((acc, next) => {
    const prev = acc[acc.length - 1];
    // fist time
    if (!prev || prev.letter !== next) {
      acc.push({ letter: next, count: 1 });
      return acc;
    }
    prev.count = prev.count + 1;
    return acc;
  }, []);
  return arr
    .map(({ letter, count }) => {
      return `${count === 1 ? '' : count}${letter}`;
    })
    .join('');
};

const PAIR_REGEX = /\d+[A-Za-z]/g;
const DIGIT_REGEX = /\d+/g;
const NON_DIGIT = /\D+/g;

export const decode = (str) => {
  if (!str.match(DIGIT_REGEX)) {
    return str;
  }
  const arr = str.match(PAIR_REGEX).map((numLetterPair) => {
    console.log(numLetterPair);
    return {
      count: numLetterPair.match(DIGIT_REGEX)[0],
      letter: numLetterPair.match(NON_DIGIT)[0],
    };
  });
  // remove all digits
  // loop over letters looking for that letter in the arr
  // if it's next in the arr, .repeat the count
  // if it's not next in the arr, just add it

  console.log(arr);
};
