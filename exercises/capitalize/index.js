// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str
    .split(" ")
    .map((el, index) => {
      if (!el) return;

      return el[0].toUpperCase() + el.slice(1);
    })
    .join(" ");
}

capitalize("a short sentence");
capitalize("a lazy fox");
capitalize("look, it is working!");

module.exports = capitalize;
