#!/usr/bin/env -S ts-node --files
// run with npx ts-node --esm index.ts

const sample1 = [1, 3, 5, 2, 4];
const sample2 = [1, 2, 3];
const sample3 = [3, 2, 1];
const getTotalCost = (lightString: number[]) => {
  // loop over each, if not next, add to a set
  // if is next, also pop from set
  let time = lightString.length;
  const big = new Set();
  let next = 1;
  let total = 0;
  for (let i = 0; i < lightString.length; i++) {
    if (lightString[i] === next) {
      total = total + time;
      next = next + 1;
      while (big.has(next)) {
        big.delete(next);
        next = next + 1;
        total = total + time;
      }
    } else {
      big.add(lightString[i]);
    }
    time = time - 1;
  }
  return total;
};

console.log(getTotalCost(sample1));
console.log(getTotalCost(sample2));
console.log(getTotalCost(sample3));
