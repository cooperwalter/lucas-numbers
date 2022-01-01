/**
 * Returns the lucas number for the sequence position, 0-indexed.
 *
 * The first 12 numbers are 2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, ...
 *
 * Throws an error if:
 *  - n is not an integer
 * @param {integer} n The lucas sequence index
 */
const lucas = function (n) {
  if (!Number.isInteger(n)) {
    throw new Error(`n must be an integer, received ${n} of type ${typeof n}`);
  }

  if (n === 0) {
    return 2;
  }
  if (n === 1) {
    return 1;
  }

  return lucas(n - 1) + lucas(n - 2);
};

module.exports = lucas;
