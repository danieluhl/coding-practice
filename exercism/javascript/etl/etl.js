//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// { 1: ['A', 'E', 'I', 'O', 'U'] }

export const transform = (data) => {
  return Object.entries(data).reduce((acc, [key, values]) => {
    values.forEach((val) => {
      val = val.toLowerCase();
      acc[val] ??= 0;
      acc[val] += Number(key);
    });
    return acc;
  }, {});
};
