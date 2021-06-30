/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MAX_SQUARE = 64;
const MIN_SQUARE = 1;

export const square = (squareNum) => {
  if (squareNum < MIN_SQUARE || squareNum > MAX_SQUARE) {
    throw new Error(`square must be between ${MIN_SQUARE} and ${MAX_SQUARE}`);
  }
  // let num = BigInt(1);
  // while (--squareNum) {
  //   num = num * BigInt(2);
  // }
  // return num;
  // let num = BigInt(1);
  // for (let i = 1; i < squareNum; i++) {
  //   num = num * BigInt(2);
  // }
  // return num;
  return BigInt(2) ** BigInt(squareNum - 1);
};

export const total = () => {
  let total = BigInt(0);
  for (let i = MIN_SQUARE; i <= MAX_SQUARE; i++) {
    total = total + square(i);
  }
  return total;
};
