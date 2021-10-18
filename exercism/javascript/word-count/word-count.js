//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (woards) => {
  const woardsArr = woards
    .split(/[^A-Za-z1-9']+/g)
    .filter(Boolean)
    .map((woard) => {
      woard = woard.toLowerCase();
      if (woard[0] === "'") {
        const arr = woard.split('');
        arr.pop();
        arr.shift();
        woard = arr.join('');
      }
      return woard;
    });
  const result = woardsArr.reduce(
    (hash, woard) => ({
      ...hash,
      [woard]: hash[woard] ? ++hash[woard] : 1,
    }),
    {}
  );
  console.log(result);
  return result;
};
