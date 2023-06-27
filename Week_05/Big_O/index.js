// function getLength(arr) {
//   return arr.length;
// }

function createArr(len) {
  const output = [];
  let lastNum = 0;
  for (let i = 0; i < len; i++) {
    lastNum += Math.round(Math.random() * 5);
    output.push(lastNum);
  }
  return output;
}

// const input2 = [1];

// function getLengthGross(arr) {
//   for (var i = 0; i < arr.length; i++) {}
//   return i;
// }

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return true;
  }
  return false;
}

function binarySearch(arr, num) {
  let startBound = 0;
  let endBound = arr.length - 1;
  let pickPoint = startBound + Math.floor(endBound - startBound / 2);
  while (startBound < endBound) {
    if (arr[pickPoint] === num) return true;
    else if (num < arr[pickPoint]) {
      endBound = pickPoint - 1;
      pickPoint = startBound + Math.floor(endBound - startBound / 2);
    } else {
      startBound = pickPoint + 1;
      pickPoint = startBound + Math.floor(endBound - startBound / 2);
    }
  }
  return false;
}

// const randArr = createArr(5000000);
/**
 * 50000 elements
 * Linear: ~2.3ms avg
 * Binary: ~1.2ms avg
 *
 * 5000000 elements
 * Linear: faster worst case
 * Binary: slower worst case
 */

// const randomPick = Math.round(Math.random() * randArr[randArr.length - 1]);
// console.time(`A linear search approach: is ${randomPick} in randArr`);
// console.log(linearSearch(randArr, randomPick));
// console.timeEnd(`A linear search approach: is ${randomPick} in randArr`);
// console.log("*********************************************************");
// console.time(`A binary search approach: is ${randomPick} in randArr`);
// console.log(binarySearch(randArr, randomPick));
// console.timeEnd(`A binary search approach: is ${randomPick} in randArr`);

let randArr = createArr(500000);

function icky(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let count = 0;
    let indexOfLast;
    for (let j = 0; j < arr.length; j++) {
      if (num === arr[j]) count++;
      if (arr[j] !== num) indexOfLast = j - 1;
    }
    i = indexOfLast;
    // console.log(`The number ${num} appeared ${count} times`);
  }
}

const arr = [
  {
    name: "someting",
    hobbies: ["some", "hobbies"],
  },
];

// console.time("Icky: ");
// icky(randArr);
// console.timeEnd("Icky: ");

console.time("Not Icky: ");
notIcky(randArr);
console.timeEnd("Not Icky: ");

function notIcky(arr) {
  if (arr.length === 0) return;

  let currNum = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currNum) count++;
    else {
      console.log(`${currNum} appears ${count} times`);
      currNum = arr[i];
      count = 1;
    }
  }
}
