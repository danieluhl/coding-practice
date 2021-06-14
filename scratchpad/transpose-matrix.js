function transposeMatrix(matrix) {
  return matrix.reduce((acc, next) => {
    next.forEach((x, i) => {
      acc[i] = acc[i] || [];
      acc[i].push(x);
    });
    return acc;
  }, []);
}

/*

[]

*/

function findGaps(matrix) {
  const rows = matrix.findIndex(
    row => row.filter(x => x === 0).length === row.length
  );
  const cols = matrix.reduce((acc, next) => {
    next.forEach((x, i) => (acc[i] += x));
    return acc;
  }, new Array(matrix[0].length).fill(0));
  return cols;
}

console.log(
  findGaps([
    [1, 2, 1, 2, 0],
    [0, 9, 1, 2, 0],
    [0, 0, 0, 0, 0],
    [2, 3, 5, 5, 0],
  ])
);
