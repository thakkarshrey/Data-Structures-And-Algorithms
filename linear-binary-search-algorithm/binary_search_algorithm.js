// Implement a binary search algorithm
// Given an array of integers nums which is ascending in order, write a function to search target in nums. If target exists then return its index. Otherwise return -1. Do this problem with O(nlogn) time complexity.

let nums = [-1,0,3,5,9,12] // target = 9 --> Output = 4

function binarySearchAlgorithm(nums, target){
    let start_index = 0
    let end_index = nums.length - 1

    
    while(start_index <= end_index){
        let middle_index = Math.round((start_index + end_index)/2)
        if(nums[middle_index] === target){
            return middle_index
        }
        else if(nums[middle_index] < target){
            start_index = middle_index + 1
        }
        else {
            end_index = middle_index - 1
        }
    }
    return -1
}

console.log(binarySearchAlgorithm(nums, 9))
// Time complexity will be O(nlogn) which is a better time complexity than that of O(n) because there is exponential reduction in the length of an array. We are cutting the array into half if it does not matches the condition and reducing the iterations.
// Space complexity is O(1)