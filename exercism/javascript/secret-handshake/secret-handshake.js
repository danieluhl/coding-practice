//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
1 = wink
10 = double blink
100 = close your eyes
1000 = jump
10000 = Reverse the order of the operations in the secret handshake.
*/
const codeMap = ['wink', 'double blink', 'close your eyes', 'jump'];

export const commands = (num) => {
  // int to binary string
  let binaryNum = num.toString(2);
  let reverse = false;
  if (binaryNum.length === 5) {
    reverse = true;
    binaryNum = binaryNum.slice(1, binaryNum.length);
  }
  let code = Array.from(binaryNum)
    .reverse()
    .map((num, i) => (num === '1' ? codeMap[i] : null))
    .filter(Boolean);

  if (reverse) {
    code = code.reverse();
  }
  return code;
};
