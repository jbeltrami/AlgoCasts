// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // matrix length = n**2
  // number of rows = n
  // row length = n
  const results = [];

  for (let row = 0; row < n; row++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Run left to right
    for (let toRight = 0; toRight <= endColumn; toRight++) {
      results[startRow][toRight] = counter;
      counter++;
    }
    startRow++;

    // Run top to bottom
    for (let toBottom = startRow; toBottom <= endRow; toBottom++) {
      results[toBottom][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Run right to left
    for (let toLeft = endColumn; toLeft >= startColumn; toLeft--) {
      results[endRow][toLeft] = counter;
      counter++;
    }
    endRow--;

    // Run bottom to top
    for (let toUp = endRow; toUp > startRow; toUp--) {
      results[toUp][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  console.log(
    { counter },
    { startColumn },
    { endColumn },
    { startRow },
    { endRow }
  );

  console.log(results);
  return results;
}

matrix(4);

module.exports = matrix;
