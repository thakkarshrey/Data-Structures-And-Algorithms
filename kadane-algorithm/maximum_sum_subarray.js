// Question : 1 --> Given an integer array nums, find the subarray with the largest sum and return its sum.
// [-2, 1, -3, 4, -1, 2, 1, -5, 4] --> Output : 6, [4, -1, 2, 1]

const nums_01 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Un-Optimized method:
function maximumSubSubarray(arr) {
  let maxSum = arr[0];
  let startIndex = 0;
  let endIndex = 0;
  // n*n => n^2 operations
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      if (currentSum > maxSum) {
        console.log(arr[i], arr[j]);
        startIndex = i;
        endIndex = j;
        maxSum = currentSum;
      }
    }
  }

  return {
    arr: arr.slice(startIndex, endIndex + 1),
    maxSum,
  };
}
// Time complexity - O(n^2)
// Space complexity - O(1)
console.log(maximumSubSubarray(nums_01));

// Kadane's algorithm (Optimized method):
// [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// sum = 0, max_sum = -2
// sum += arr[i] => 0 + (-2) = -2
// sum = -2, max_sum = -2
// sum < 0 so;
// sum = 0, max_sum = -2
// sum += arr[i] => 0 + 1 = 1
// sum = 1, max_sum = -2
// sum > max_sum so;
// sum = 1, max_sum = 1

function maximumSubSubarrayOptimized(arr) {
  let sum = 0;
  let max_sum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max_sum) {
      max_sum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return max_sum;
}
// Time complexity - O(n)
// Space complexity - O(1)
console.log(maximumSubSubarrayOptimized(nums_01));
