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

function pyramid(n) {
  // From 0 to n
  // Create an empty string, 'level'
  // 	From 0 to ?? (cols)
  // 		if the column should have a #
  // 			Add a # to level
  // 		else
  // 			Add ' '
  // 	console.log(stair)

  const cols = n * 2 - 1;
  const mid = Math.floor(cols / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let col = 0; col < cols; col++) {
      // Determine how many empty spaces we need per col: cols - currentRow
      mid - row <= col && mid + row >= col ? (level += "#") : (level += " ");
    }

    console.log(level);
  }
}

// pyramid(1);
// pyramid(2);
pyramid(3);

module.exports = pyramid;
