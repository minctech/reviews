const fn = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(fn.sum(1, 2)).toBe(3);
});

test('letterCount works with regular strings', () => {
  expect(fn.letterCount('awesome', 'e')).toBe(2);
});
