function findingUsersActiveMinutes(logs, k) {
  const { result } = logs
    .sort(([aId, aVal], [bId, bVal]) => {
      if (aId < bId) {
        return -1;
      } else if (aId === bId && aVal < bVal) {
        return -1;
      }
      return 1;
    })
    .reduce(
      (acc, [id, val], i, orig) => {
        const next = orig[i + 1];
        if (next && next[0] === id && next[1] === val) {
          // duplicate is next, ignore this one
          return acc;
        } else if (next && next[0] === id) {
          // new one with same id is next, increment count
          acc.count++;
        } else {
          // end of this set of ids, log result
          acc.result[acc.count]++;
          acc.count = 0;
        }
        console.log({ id, val });
        return acc;
      },
      { result: Array.from(new Array(k), (_) => 0), count: 0 }
    );
  return result;
}

console.log(
  findingUsersActiveMinutes(
    [
      [0, 5],
      [1, 2],
      [0, 2],
      [0, 5],
      [1, 3],
    ],
    5
  )
);
