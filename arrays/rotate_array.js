// Question 2 : Rotate the array by k steps and rotate the array to the right where k is a non negative number.
// Input : nums = [1,2,3,4,5,6,7], k = 3
// Input : nums = [-1, -100, 3, 99], k = 2

let nums_01 = [1, 2, 3, 4, 5, 6, 7];
let nums_02 = [-1, -100, 3, 99];
let nums_03 = [1, 2, 3, 4, 5, 6, 7];

// Brute force method:
function rotateArray(nums = [], k) {
  let arr_length = nums.length;

  if (arr_length === k) return nums;
  if (k > arr_length) {
    k = k % arr_length;
  }
  const splitted_arr = nums.splice(arr_length - k, arr_length); // O(n)
  nums.unshift(...splitted_arr); // O(n)
  return nums;
}
console.log(rotateArray(nums_01, 4));
// Time complexity is O(n) as we are using in build methods which has time complexity of O(n).
// Space complexity is O(1) as we are simply modifying the same array and returning it.

// Optimized method:
function rotateArrOptimized(nums, k) {
  let arr_length = nums.length;

  if (arr_length === k) return nums;
  if (k > arr_length) {
    k = k % arr_length;
  }

  reverse(0, arr_length - 1, nums); // O(n)
  reverse(0, k - 1, nums); // O(k)
  reverse(k, arr_length - 1, nums); // O(n - k)
  return nums;
}

function reverse(start, end, arr) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

console.log(rotateArrOptimized(nums_03, 3));
// Time complexity is O(n).
// Space complexity is O(1) as we are simply modifying the same array and returning it.
