const { sum, subtract } = require('../utils/math');
let result, expected;

function sumTest() {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
}
test('sum adds numbers', sumTest);
function test(title, callback) {
  try {
    callback();
    console.log(`✔ ${title}`)
  } catch (error) {
    console.error(`✗ ${title}`);
    console.error(error);
  }
}

function subtractTest() {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
}
test('subtract two numbers', subtractTest);

function expect(actual) {
  return {
    toBe(expected) {
      if(actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  }
}