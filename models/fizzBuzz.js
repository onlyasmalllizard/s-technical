/*
Switch statement that checks divisbility

check whether the passed in integer is divisible by 3

check whether the passed in integer is divisible by 5

if neither of those pass, return the integer

*/

function fizzBuzz(number) {
  if (number % 15 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
}

module.exports = fizzBuzz;
