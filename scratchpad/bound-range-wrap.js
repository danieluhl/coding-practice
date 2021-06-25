export default function boundRangeWrap(lower, upper, num) {
  // bound between two numbers (inclusive) wrapping around when going beyond limits
  // first shift everything from upper->lower to (0->upper-lower)
  const upperShifted = upper - lower + 1; // plus 1 for "inclusive" to upper bound
  const numShifted = num - lower;
  const result = ((numShifted % upperShifted) + upperShifted) % upperShifted;
  // unshift things
  return result + lower;
}

// console.log(boundRangeWrap(5, 12, 4)); // 12
// console.log(boundRangeWrap(5, 12, 15)); // 7
// console.log(boundRangeWrap(5, 12, -5)); // 11
// console.log(boundRangeWrap(5, 12, 5)); // 5
// console.log(boundRangeWrap(5, 12, 12)); // 12
