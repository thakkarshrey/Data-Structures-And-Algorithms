// Big o notation is used to identify if your code is garbage in the sense that it's execution is slow. It is used to measure the time and space complexity of a code.
// For example:

/****** TIME COMPLEXITY ******/
// Func : 1
const randomNumber = (array) => {
  // 4 operations
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (i === 3) return element;
  }
};
const nums = [12, 45, 23, 78, 89];

console.time("randomNumber");
console.log(randomNumber(nums));
console.timeEnd("randomNumber");

// Func : 1 takes 9.5ms to execute and return the number that is on the index 3.
// Consider an example below as well.

// Func : 2
const randomNumber01 = (array) => {
  // 1 operation
  return array[3];
};

console.time("randomNumber01");
console.log(randomNumber01(nums));
console.timeEnd("randomNumber01");

// Func : 2 takes 0.2 ms to execute. Both returns 78 but the first one is not so efficient as it has to go through the whole loop and then when it finds the index 3 then it returns the number itself.
// But is this the correct way to measure the time complexity of a particular code? No.
// We will use "operations" to measure the time and space complexity.

// Func : 1 will run 4 times as the loop runs 4 times so it will be 4 operations
// Func : 2 will run 1 time as there is no loop and it is simply returning the value so it is more efficient

// Consider the following example:
function someOperations(n) {
  // 3 operations => O(1)
  return (n * (n + 5)) / 2;
}

console.log(someOperations(2));
// Here, if i change the value of n from 2 to 5 then the number of operations will still remain the same that is 3

function GoingUpDown(n) {
  // Here the no of operations will vary if i change the value of n
  // It has 2n + 3 operations (2n is for 2 for loops, 3 is for 3 console.logs) => O(n)
  console.log("Going forward");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the End, Going back");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("At the start");
}
GoingUpDown(3);
// Unlike the someOperations function; the number of operations will vary depending upon the value of n here

// In the above functions:
// If the no of operations remain constant even if the value changes then it is called O(1) time complexity. "Constant time complexity"
// If the no of operations keep changing if the value changes then it is called O(n) time complexity. Here the value of n is increasing linearly and not exponentially. "Linear time complexity"
// If the no of operations keep changing exponentially then it is called O(n^2) time complexity. "Exponential time complexity"
// Refer time complexity chart for more details

function printBoth(n) {
  // n*n => n^2 operations => O(n^2)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
printBoth(4);

/****** SPACE COMPLEXITY ******/
// The amount of memory your algorithm needs to run is identified by space complexity.
// boolean, number, undefined and null => constant space complexity
// string, arrays, objects => dynamic space complexity

function spaceComplexityArray(array) {
  // O(1) => constant space complexity
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

let temp_arr = [12, 34, 67, 546, 24];

console.log(spaceComplexityArray(temp_arr));

function spaceComplexity(n) {
  // O(n) => linear space complexity
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i * 69);
  }
  return array;
}

console.log(spaceComplexity(10));

function createMatrix(n) {
  // O(n^2) => exponential space complexity
  let matrixArr = [];
  for (let i = 0; i < n; i++) {
    matrixArr[i] = [];
    for (let j = 0; j < n; j++) {
      matrixArr[i][j] = i + j;
    }
  }

  return matrixArr;
}

console.log(createMatrix(10));
