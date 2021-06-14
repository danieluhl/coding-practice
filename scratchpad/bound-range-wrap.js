function boundRangeWrap(lower, upper, number) {
  // bound between two numbers wrapping around when going beyond limits
  // first shift everything from upper->lower to (0->upper-lower)
  const upperShifted = upper - lower;
  const numberShifted = number - lower;
  const result = ((numberShifted % upperShifted) + upperShifted) % upperShifted;
  // unshift things
  return result + lower;
}

console.log(boundRangeWrap(5, 99, 281));
console.log(boundRangeWrap(5, 99, 4));
console.log(boundRangeWrap(5, 99, -19));
