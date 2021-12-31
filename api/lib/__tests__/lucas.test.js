const lucas = require("../lucas");

test("returns 2 for index 0", () => {
  expect(lucas(0)).toBe(2);
});
test("returns 1 for index 1", () => {
  expect(lucas(1)).toBe(1);
});
test("returns sum of last two of sequence for all other indices", () => {
  expect(lucas(2)).toBe(3);
  expect(lucas(3)).toBe(4);
  expect(lucas(4)).toBe(7);
  expect(lucas(8)).toBe(47);
});
test("throws an error if the passed value is not an integer", () => {
  expect(() => {
    lucas();
  }).toThrow();
  expect(() => {
    lucas("a");
  }).toThrow();
  expect(() => {
    lucas(true);
  }).toThrow();
  expect(() => {
    lucas(1.2);
  }).toThrow();
});
