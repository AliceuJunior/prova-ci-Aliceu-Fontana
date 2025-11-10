function sum(a, b) {
  return a + b;
}

module.exports = { sum };

// small runner for manual testing
if (require.main === module) {
  console.log('1 + 2 =', sum(1, 2));
}
