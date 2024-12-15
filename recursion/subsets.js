// Question : 6 - Backtracking Algorithm using Recursion
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// It must not contain duplicate subsets.

// Input : [1,2,3] --> Output : [[], [1], [1,2], [1,3], [2], [2,3], [3], [1,2,3]]

function subsetsRecusion(arr) {
  let result_arr = [];
  let temp_arr = [];

  function recursive(arr, i) {
    if (i === arr.length) return result_arr.push([...temp_arr]);

    temp_arr.push(arr[i]);
    recursive(arr, i + 1);
    temp_arr.pop();
    recursive(arr, i + 1);
  }
  recursive(arr, 0);

  return result_arr;
}

console.log(subsetsRecusion([1, 2, 3]));
