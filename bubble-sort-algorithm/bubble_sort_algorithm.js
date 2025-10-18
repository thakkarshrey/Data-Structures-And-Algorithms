// Implement a bubble sort algorithm

let nums = [39, 40, 10,14, 37, 14]

// [39,10,14, 37, 14]
// 0 --> [10,39,14, 37, 14]

function bubbleSortAlgorithm(nums){
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums
}

console.log(bubbleSortAlgorithm(nums))