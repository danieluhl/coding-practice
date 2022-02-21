
Practice replacing one word with another.

1. Replace addOne with increment
2. Replace timesTwo with double
3. Rename fn1 and fn2 to a and b
4. rename twoPose to composeTwo

```js

const addOne = arr => arr.map(i => i + 1);
const timesTwo = arr => arr.map(i => i * 2);
const twoPose = fn1 => fn2 => (arg) => fn1(fn2(arg));

console.log(twoPose(addOne)(timesTwo)([1, 2, 3]));

```

**Methods**
1. search, replace, `n.` for next
2. `:%s/s/r/g`
3. `cmd+d` over word to get cursor on each, replace

Don't forget to put them all back when you're done (don't use undo)