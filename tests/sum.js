function sum(a, b) {
  return a + b;
}

function letterCount(str, char) {
  let count = 0;
  for (const letter of str) {
    if (letter === char) {
      count++;
    }
  }
  return count;
}

module.exports = {
  sum,
  letterCount,
};
