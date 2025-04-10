// Calculate the second largest number in an array
const arr = [12, 45, 23, 67, 11, 8, 100, 560];

function secondLargestNumber(arr) {
  let largestNumber = Number.NEGATIVE_INFINITY;
  let sl = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > largestNumber) {
      sl = largestNumber;
      largestNumber = element;
    }
  }

  return sl;
}

console.log(secondLargestNumber(arr));

// Rotate array by K
// Rotate the array to the right by K steps
// const nums = [1, 2, 3, 4, 5, 6, 7];
const nums = [-1, -100, -123, 99];
const k = 6;
// [5,6,7,1,2,3,4]

// This is done by me on my own. It has one flaw is when k > nums.length
function rotateArray(nums = [], k) {
  if (nums.length > k) {
    const rotatedArr = nums.slice(-k);
    const backShiftedArr = nums.slice(0, nums.length - k);

    return [...rotatedArr, ...backShiftedArr];
  } else if (nums.length == k) {
    return nums;
  }
  return null;
}
console.log(rotateArray(nums, k));

// Rotate array second method
function rotateArrSecond(nums = [], k) {
  const size = nums.length;

  if (k > size) {
    k = k % size;
  }
  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);

  return nums;
}
console.log(rotateArrSecond(nums, k));

// Reverse an array
function reverse(nums, leftPointer, rightPointer) {
  while (leftPointer < rightPointer) {
    const temp = nums[rightPointer];
    nums[rightPointer] = nums[leftPointer];
    nums[leftPointer] = temp;
    leftPointer++;
    rightPointer--;
  }
  return nums;
}
const nums_01 = [1, 2, 3, 4, 5, 6, 7];
console.log(reverse(nums_01, 0, nums_01.length - 1), "reversed");

// Rotate an array third method
function rotateThird(nums = [], k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
}

console.log(rotateThird([-1, -100, -123, 99], 3), "rotate third");

// Question 3 : Remove duplicates from sorted array.
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Input : nums = [1,1,2] --> Output : 2, [1,2,_]
// Input : nums = [0,0,1,1,1,2,2,3,3,4] --> Output : 5, [0,1,2,3,4,_,_,_,_,_]

// First method
const nums_02 = [1, 1, 2, 3, 4, 2, 5, 23, 78, 4];
function removeDuplicatesFirst(nums = []) {
  let temp_arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (temp_arr.includes(nums[i])) continue;
    temp_arr.push(nums[i]);
  }

  return temp_arr;
}

console.log(removeDuplicatesFirst(nums_02), "remove duplicates");

// Second method
function removeDuplicatedSecond(nums) {
  let new_arr = Array.from(new Set(nums));
  return new_arr;
}

console.log(removeDuplicatedSecond(nums_02), "remove duplicates second");

function removeDuplicatesThird(nums = []) {
  const sorted_nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted_nums.length; i++) {
    if (sorted_nums[i] === sorted_nums[i + 1]) {
      sorted_nums.splice(i + 1, 1);
      i--;
    }
  }
  return sorted_nums;
}

console.log(removeDuplicatesThird(nums_02), "remove duplicates third");

// Remove duplicates two pointer approach
function removeDuplicatesFourth(nums = []) {
  let sorted_nums = nums.sort((a, b) => a - b);
  let j = 0;
  for (let i = 1; i < sorted_nums.length; i++) {
    if (sorted_nums[j] !== sorted_nums[i]) {
      j++;
      sorted_nums[j] = sorted_nums[i];
    }
  }

  for (let k = 0; k < sorted_nums.length; k++) {
    if (k > j) {
      sorted_nums[k] = "_";
    }
  }
  return sorted_nums;
}

console.log(
  removeDuplicatesFourth([1, 4, 1, 4, 2, 2, 5, 6, 7]),
  "remove duplicates fourth"
);

// Check for valid anagram.
const string_01 = "tar";
const string_02 = "rat";

function checkForAnagramFirst(word01 = "", word02 = "") {
  const modified_word01 = word01.split("").sort().join("");
  const modified_word02 = word02.split("").sort().join("");

  console.log({ modified_word01, modified_word02 });

  return modified_word01 === modified_word02;
}

console.log(
  checkForAnagramFirst(string_01, string_02),
  "checkForAnagramFirst(string_01, string_02)"
);

function checkForAnagramSecond(word01 = "", word02 = "") {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < word01.length; i++) {
    if (obj1[word01[i]] in obj1) {
      obj1[word01[i]++];
    } else {
      obj1[word01[i]] = 1;
    }

    if (obj2[word02[i]] in obj2) {
      obj2[word02[i]++];
    } else {
      obj2[word02[i]] = 1;
    }
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log(checkForAnagramSecond(string_01, string_02));

// Truncate the string
function truncateString(str = "", length = 0) {
  const modified_string =
    str.length > length && length != 0 ? str.substring(0, length) + "..." : str;
  return modified_string;
}

const str = "Go to shreythakkar.com";
const max_length = 4;

console.log(truncateString(str, max_length));

// Check if number is a palindrome
// A palindrome is a number when it reads the same forward and backward
function checkForPalindrome(x = 0) {
  const reversed_x = x.toString().split("").reverse().join("");
  return reversed_x == x;
}

const x = 121;
console.log(checkForPalindrome(x));

// Calculate the hamming distance between two strings
function calculateHammingDistance(string01, string02) {}

console.log(calculateHammingDistance("Hello", "Hwlle"));

const numbers = [1, 2, 3, 4, 5];
const numbers01 = [6, 7, 8, 9, 10];
const obj = {
  name: "Shrey",
  last_name: "Thakkar",
};
const obj01 = {
  name: "Krutika",
  last_name: "Thakkar",
};

let name = "Shrey";

// const newObj = obj; // Reference to obj
const newObj = { ...obj }; // Creating a new variable
newObj.name = "krutika";
console.log(obj);

const fruits = ["banana", "apple", "mango", "orange", "papaya"];

fruits.splice(2, 2, "KRUTIKA");
console.log(fruits);

numbers.fill(200, 3);

console.log(numbers);

// Maximum sum sub array
const input01 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maximumSumSubArray(nums) {
  let maxSum = nums[0];
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIndex = i;
        endIndex = j;
      }
    }
  }

  return { maxSum, output: nums.slice(startIndex, endIndex + 1) };
}

console.log(maximumSumSubArray(input01));

// Optimized Aproach with Kadane's Algorithm

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
function maximumSumSubArray01(nums) {
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum > maxSum) maxSum = sum;
    if (sum < 0) sum = 0;
  }

  return maxSum;
}

console.log(maximumSumSubArray01(input01));

// Stack

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.push(12);
stack.push(13);
stack.push(453);
console.log(stack.stack);
stack.pop();
console.log(stack.stack);
console.log(stack.peek());

// Given an input string reverse the order of the words
const string = "    the    sky is        blue       ";

function reverseOrderOfWords(string = "") {
  const stringArr = string.trim().split(" ");
  let startIndex = 0;
  let endIndex = stringArr.length - 1;

  let tempVariable = "";
  while (startIndex < endIndex) {
    tempVariable = stringArr[startIndex];
    stringArr[startIndex] = stringArr[endIndex];
    stringArr[endIndex] = tempVariable;
    startIndex++;
    endIndex--;
  }
  return stringArr.join(" ");
}

console.log(reverseOrderOfWords(string));

// Reverse order of words part 2

function reverseOrderOfWords01(string = "") {
  const stringArr = string.trim().split(" ");
  let str = "";
  const temp_string_arr = [...stringArr];
  for (let i = 0; i < stringArr.length; i++) {
    str += ` ${temp_string_arr.pop()}`;
  }
  return str;
}

console.log(reverseOrderOfWords01(string), "str");

function reverseOrderOfWords02(string = "") {
  const stringArr = string.trim().split(" ");
  let str = "";
  const temp_string_arr = [];

  for (let i of stringArr) {
    temp_string_arr.push(i);
  }

  while (temp_string_arr.length) {
    str += ` ${temp_string_arr.pop()}`;
  }
  return str;
}
console.log(reverseOrderOfWords02(string), "str02");

// Determine if input string is valid. Open brackets must be closed by the same type.
const bracket_str = "{{(){}}";
function determineBrackets(string = "") {
  const string_arr = string.split("");
  const temp_arr = [];

  const opening_bracket_arr = ["(", "[", "{"];
  const closing_bracket_arr = [")", "]", "}"];
  function samePairs(bracket01, bracket02) {
    return (
      (bracket01 === "(" && bracket02 === ")") ||
      (bracket01 === "[" && bracket02 === "]") ||
      (bracket01 === "{" && bracket02 === "}")
    );
  }

  for (let i = 0; i < string_arr.length; i++) {
    if (opening_bracket_arr.includes(string_arr[i])) {
      temp_arr.push(string_arr[i]);
    }
    if (closing_bracket_arr.includes(string_arr[i])) {
      if (temp_arr.length === 0) {
        return false;
      } else if (samePairs(temp_arr[temp_arr.length - 1], string_arr[i])) {
        temp_arr.pop();
      }
    }
  }

  console.log(temp_arr, "temp_arr");
  return temp_arr.length === 0;
}

console.log(determineBrackets(bracket_str));

// Second method
function determineBrackets01(string = "") {
  const string_arr = string.split("");
  const temp_arr = [];

  for (let i = 0; i < string_arr.length; i++) {
    if (
      string_arr[i] === "(" ||
      string_arr[i] === "[" ||
      string_arr[i] === "{"
    ) {
      temp_arr.push(string_arr[i]);
    }
    if (
      string_arr[i] === ")" ||
      string_arr[i] === "]" ||
      string_arr[i] === "}"
    ) {
      if (temp_arr.length === 0) {
        return false;
      }
      const top = temp_arr.pop();
      if (
        (string_arr[i] === ")" && top !== "(") ||
        (string_arr[i] === "}" && top !== "{") ||
        (string_arr[i] === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }

  console.log(temp_arr, "temp_arr");
  return temp_arr.length === 0;
}

function slidingWindowMaximum(nums, k) {
  let temp_arr = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let maxNum = nums[i];
    for (let j = 1; j < k; j++) {
      if (nums[i + j] > maxNum) {
        maxNum = nums[i + j];
      }
    }
    temp_arr.push(maxNum);
  }
  return temp_arr;
}

const temp_nums = [1, 3, -1, -3, 5, 3, 6, 7];

console.log(slidingWindowMaximum(temp_nums, 3));

// Multiply loop using recursion

function multiplyLoop(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }

  return product;
}

function multiplyLoopRecursion(arr = []) {
  if (arr.length <= 0) return 1;
  const temp = multiplyLoopRecursion(arr.slice(0, arr.length - 1));
  return arr[arr.length - 1] * temp;
}

console.log(multiplyLoopRecursion([1, 2, 3, 4]));
