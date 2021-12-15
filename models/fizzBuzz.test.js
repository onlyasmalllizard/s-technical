const { test, expect } = require('@jest/globals');
const fizzBuzz = require('./fizzBuzz');

test("When given a number that is divisible by 3, the function returns 'Fizz'", () => {
  // Arrange
  const number = 3;
  const expected = 'Fizz';
  // Act
  const actual = fizzBuzz(number);
  // Assert
  expect(actual).toEqual(expected);
});

test("When given a number divisble by 5, the function returns 'Buzz'", () => {
  const number = 5;
  const expected = 'Buzz';

  const actual = fizzBuzz(number);

  expect(actual).toEqual(expected);
});

test("When given an number that is divisble by both 3 and 5, the function returns 'FizzBuzz'", () => {
  const number = 15;
  const expected = 'FizzBuzz';

  const actual = fizzBuzz(number);

  expect(actual).toEqual(expected);
});

test('When given a number that is not divisble by 3 or 5, the function returns the inputted number', () => {
  const expected = 2;

  const actual = fizzBuzz(expected);

  expect(actual).toEqual(expected);
});
