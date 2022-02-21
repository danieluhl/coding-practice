
Practice yanking and pasting to replace

1. Rename all the functions `beansAreCool`
2. Replace the partial word `sum` or `Sum` with `some`

```js

export class Squares {
  constructor(num) {
    this.arr = Array.from(new Array(num), (_, i) => i + 1);
  }

  get sumOfSquares() {
    this.sumSquares ??= this.arr.reduce((acc, next) => {
      acc = acc + next ** 2;
      return acc;
    }, 0);
    return this.sumSquares;
  }

  get squareOfSum() {
    this.squareSum ??= this.arr.reduce((a, b) => a + b) ** 2;
    return this.squareSum;
  }

  get difference() {
    return Math.abs(this.squareOfSum - this.sumOfSquares);
  }
}

```

**Methods**

1. Replace plugin `gr\iw` (works with sub-words)
2. delete and paste `diwP`
3. `:%s/[a-z]+\(\)/` `ctrl+r ctrl+w`