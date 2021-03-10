const { sumAsync, subtractAsync } = require('../utils/math');

async function sumTest() {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
}
test('sumAsync adds numbers asynchronously', sumTest);

async function subtractTest() {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
}
test('subtractAsync subtracts numbers asynchronously', subtractTest);
