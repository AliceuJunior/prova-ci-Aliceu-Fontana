const { sum } = require('../src/index');

test('soma de 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('soma com zero', () => {
  expect(sum(5, 0)).toBe(5);
});
