// Question : 1 - Find the second largest number of an array
// Input: [12, 35, 1, 10, 34, 1]
// Input: [10, 5, 10]

let arr_01 = [12, 35, 1, 10, 34, 1];
let arr_02 = [10, 5, 10];

// Brute force approach:
function secondLargestNumber(arr) {
  const uniqueArr = [...new Set(arr)]; // O(n)
  const sortedArr = uniqueArr.sort((a, b) => b - a); // O(nlogn)
  if (sortedArr.length >= 2) {
    return sortedArr[1];
  } else {
    return "Array length must be greater than or equal to 2";
  }
}
// This method takes O(nlogn) time complexity. Largest time complexity is the time complexity of the whole code block

console.log(secondLargestNumber(arr_01));

// Optimized approach:
function secondLargestOptimized(arr) {
  let largest = -1;
  let second_largest = -1;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > largest) {
      second_largest = largest;
      largest = element;
    } else if (element < largest && element > second_largest) {
      second_largest = element;
    }
  }

  return {
    largest,
    second_largest,
  };
}
// This code has O(n) time complexity. and this is a very good time complexity
// Also it has space complexity of O(1)
console.log(secondLargestOptimized(arr_02));
