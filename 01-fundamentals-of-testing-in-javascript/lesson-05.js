const { sumAsync, subtractAsync } = require('../utils/math');

async function sumTest() {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
}
test('sumAsync adds numbers asynchronously', sumTest);
async function test(title, callback) {
  try {
    await callback();
    console.log(`✔ ${title}`)
  } catch (error) {
    console.error(`✗ ${title}`);
    console.error(error);
  }
}

async function subtractTest() {
  const result = await subtractAsync(7, 3);
  const expected = 24;
  expect(result).toBe(expected);
}
test('subtractAsync subtracts numbers asynchronously', subtractTest);

function expect(actual) {
  return {
    toBe(expected) {
      if(actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  }
}