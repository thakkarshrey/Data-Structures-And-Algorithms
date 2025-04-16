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
