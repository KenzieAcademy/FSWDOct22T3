function reverseString(string) {
  if (typeof string !== "string") {
    return false;
  }

  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

/**
 * Sample unit tests for the reverse string function:
 * 1. Basic tests that test working inputs
 * 2. Basic tests that test invalid input
 * 3. Edge cases (i.e. empty inputs, same string forwards and backwards)
 */

// assert() accepts 2 arguments:
//  1. assertion condition (i.e. the output of the function matches the output expected)
//  2. error message (i.e. what should print to the console if the test fails)
console.assert(
  reverseString("hello") === "olleh",
  `Expected: "olleh"
  Returned: ${reverseString("hello")}`
);
console.assert(
  reverseString("Hello World") === "dlroW olleH",
  `Expected: "dlroW olleH"
  Returned: ${reverseString("Hello World")}`
);
console.assert(
  reverseString() === false,
  `Expected: false
  Returned: ${reverseString()}`
);
console.assert(
  reverseString(25) === false,
  `Expected: false
  Returned: ${reverseString()}`
);
console.assert(
  reverseString("") === "",
  `Expected: ""
  Returned: ${reverseString("")}`
);
console.assert(
  reverseString("h") === "h",
  `Expected: "h"
  Returned: ${reverseString("h")}`
);
