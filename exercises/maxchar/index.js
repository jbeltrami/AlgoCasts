// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const objects = str.split("").reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;

    return acc;
  }, {});

  const highest = Object.entries(objects).reduce(
    (acc, [key, value]) => {
      return value > acc[1] ? [key, value] : acc;
    },
    ["", 0]
  );

  return highest[0];
}

maxChar("abcccccccd");

module.exports = maxChar;
