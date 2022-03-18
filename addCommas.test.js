const addCommas = require("./addCommas");

test("4 digits", () => {
  expect(addCommas(1234)).toBe("1,234");
});

test("6 digits", () => {
  expect(addCommas(123456)).toBe("123,456");
});

test("9 digits and negative", () => {
  expect(addCommas(-123456789)).toBe("-123,456,789");
});

test("12 digits and negative", () => {
  expect(addCommas(-123456789012)).toBe("-123,456,789,012");
});


