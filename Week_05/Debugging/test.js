function reverseStr(something) {
  let str = "";
  for (let i = something.length - 1; i >= 0; i--) {
    str += something[i];
  }
  return str;
}

const reverseTest1 = reverseStr("hello");
console.assert(
  reverseTest1 === "olleh",
  `
  reverseStr test 1
  Expected: "olleh", Actual: ${reverseTest1}`
);

const reverseTest2 = reverseStr(1);
console.assert(
  reverseTest2 === undefined,
  `
  reverseStr test 2
  Expected: undefined, Actual: ${reverseTest2}`
);
