//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// plus, minus, multiplied by, divided by

const operations = {
  plus: (a, b) => a + b,
  multiplied: (a, b) => a * b,
  divided: (a, b) => a / b,
  minus: (a, b) => a - b,
};

export const answer = (text) => {
  // check for valid question
  if (!text.startsWith('What is') || !text.endsWith('?')) {
    throw new Error('Unknown operation');
  }
  // remove start and end
  text = text.replace(/(What is|by\s|\?)*/g, '').trim();

  const tokensList = text.split(' ');
  const firstToken = Number(tokensList.shift());
  if (!firstToken) {
    throw new Error('Syntax error');
  }
  const result = tokensList.reduce(
    (acc, next) => {
      if (Number(next)) {
        if (acc.operation === null) {
          // number with no operation
          throw new Error('Syntax error');
        } else {
          return {
            total: acc.operation(acc.total, Number(next)),
            operation: null,
          };
        }
      }

      const opFn = operations[next];
      if (!opFn) {
        throw new Error('Unknown operation');
      } else if (acc.operation) {
        throw new Error('Syntax error');
      }

      return { ...acc, operation: opFn };
    },
    { total: firstToken, operation: null }
  );

  // check for dangling operation
  if (result.operation) {
    throw new Error('Syntax error');
  }

  return Number(result.total);
};
