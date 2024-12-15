// Question 3 : Remove duplicates from sorted array.
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Input : nums = [1,1,2] --> Output : 2, [1,2,_]
// Input : nums = [0,0,1,1,1,2,2,3,3,4] --> Output : 5, [0,1,2,3,4,_,_,_,_,_]

let nums_01 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let nums_02 = [1, 1, 2];
let nums_03 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// Using inbuild javascript functions:
function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1); // O(1)
      i--;
    }
  }
  return {
    output_arr: arr,
    count: arr.length,
  };
}
// Time complexity - O(n)
// Space complexity - O(1)
console.log(removeDuplicates(nums_01));

// Optimized:
function removeDuplicatedOptimized(arr) {
  // Two pointer approach:-
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  for (let k = 0; k < arr.length; k++) {
    if (k > i) {
      arr[k] = "_";
    }
  }
  return {
    output_arr: arr,
    count: i + 1,
  };
}
// Time complexity - O(n)
// Space complexity - O(1)
console.log(removeDuplicatedOptimized(nums_03));
