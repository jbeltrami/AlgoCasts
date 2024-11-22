// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str.split("").reduce((acc, el, idx) => {
    return vowels.includes(el.toLowerCase()) ? acc + 1 : acc;
  }, 0);
}

vowels("Why do you ask?");

module.exports = vowels;
