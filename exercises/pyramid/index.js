// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
  const cols = n * 2 - 1;
  const mid = Math.floor(cols / 2);

  if (n === row) return;

  if (level.length === cols) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  mid - row <= level.length && mid + row >= level.length
    ? (level += "#")
    : (level += " ");

  pyramid(n, row, level);
}

module.exports = pyramid;
