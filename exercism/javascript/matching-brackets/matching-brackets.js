//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const expectedMap = { '{': '}', '(': ')', '[': ']' };

module.exports = (stream) => {
  let stack = [];
  for (let token of stream) {
    if (token in expectedMap) {
      stack.push(expectedMap[token]);
    } else if (stack.pop() !== token) {
      return false;
    }
  }
  return !stack.length;
};

// const actionMap = {
//   '(': (stack) => stack.push('('),
//   '[': (stack) => stack.push('['),
//   '{': (stack) => stack.push('{'),
//   ')': (stack) => stack.pop() === '(',
//   ']': (stack) => stack.pop() === '[',
//   '}': (stack) => stack.pop() === '{',
// };

// export const isPaired = (str, stack = []) =>
//   [...str].every((next) => !actionMap[next] || actionMap[next](stack)) &&
//   stack.length === 0;

// const itemMap = {
//   '(': 1,
//   ')': -1,
//   '[': 1,
//   ']': -1,
//   '{': 1,
//   '}': -1,
// };

// export const isPaired = (str) =>
//  [...str].reduce((acc, next) => acc + itemMap[next], 0) === 0;
