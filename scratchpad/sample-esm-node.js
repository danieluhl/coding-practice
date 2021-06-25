import boundRangeWrap from './bound-range-wrap.js';

console.log(boundRangeWrap(5, 12, 4)); // 12
console.log(boundRangeWrap(5, 12, 15)); // 7
console.log(boundRangeWrap(5, 12, -5)); // 11
console.log(boundRangeWrap(5, 12, 5)); // 5
console.log(boundRangeWrap(5, 12, 12)); // 12
