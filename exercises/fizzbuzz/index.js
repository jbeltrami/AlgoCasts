// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n, counter = 1) {
  if (counter === n + 1) return;

  counter % 5 === 0 && counter % 3 === 0
    ? console.log("fizzbuzz")
    : counter % 5 === 0
    ? console.log("buzz")
    : counter % 3 === 0
    ? console.log("fizz")
    : console.log(counter);
  return fizzBuzz(n, counter + 1);
}

fizzBuzz(5);

module.exports = fizzBuzz;
