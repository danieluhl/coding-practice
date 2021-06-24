//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// plus, minus, multiplied, divided

const tokens = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiplied: (a, b) => a * b,
  divided: (a, b) => a / b,
};

export const answer = (text) => {
  if (!text.startsWith('What is')) {
    throw new Error('Unknown operation');
  }

  text = text.replace(/What is |by |\?/g, '');

  const textArr = text.split(' ');
  const initialTotal = Number(textArr.shift());
  if (!initialTotal) {
    throw new Error('Syntax error');
  }
  const results = textArr.reduce(
    ({ total, operatorFn }, token) => {
      if (Number(token)) {
        token = Number(token);
        if (!operatorFn) {
          throw new Error('Syntax error');
        }
        return { total: operatorFn(total, token), operatorFn: null };
      }
      const opFn = tokens[token];
      if (operatorFn) {
        throw new Error('Syntax error');
      }
      if (!opFn) {
        throw new Error('Unknown operation');
      }
      // save the operation and continue to the next thing, which must be a number
      return { total, operatorFn: tokens[token] };
    },
    { total: initialTotal, operatorFn: null }
  );

  // check for dangling operator
  if (results.operatorFn) {
    throw new Error('Syntax error');
  }

  return Number(results.total);
};
