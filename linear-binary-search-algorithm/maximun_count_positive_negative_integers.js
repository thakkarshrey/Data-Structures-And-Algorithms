// Question 4 : Maximum count of positive and negative integers
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

let nums = [-2,-1,-1, 0, 1, 2, 3]

// I did this question myself
function maximumCount(nums){
    let start = 0
    let end = nums.length - 1

    while (start <= end){
        if(nums[start] < 0 && nums[end] < 0){
            const negative = nums[0] >= 0 ? 0 : end + 1
            const positive = nums[nums.length - 1] <= 0 ? 0 : (nums.length - 1) - end
            return {
                negative,
                positive
            }
        }
        else {
            let middle_index = Math.round((start + end)/2)
            if(nums[middle_index] >= 0){
                end = middle_index - 1
            }
        }
    }
}

console.log(maximumCount(nums))






let nums02 = [-2,-1,-1,1,2,3,4]

//[-2,-1,-1,1,2,3,4]
// middle = 3 --> nums[middle] = 1
// end = 3 --> start = 0

// start = 3 --> end = 3

function maximumCountOptimized(nums){
    return {negative : lowerbound(nums), positive : upperbound(nums)}
}
function lowerbound(nums){
    let start = 0
    let end = nums.length - 1

    while(start < end){
        let middle = Math.ceil((start+end)/2)
        if(nums[middle] < 0) start = middle
        else end = middle - 1
    }

    return nums[0] >= 0 ? 0 : start + 1
}
function upperbound(nums){
    let start = 0
    let end = nums.length - 1

    while(start < end){
        let middle = Math.round((start+end)/2)
        if(nums[middle] > 0) end = middle
        else start = middle + 1
    }

    return nums[nums.length - 1] <= 0 ? 0 : nums.length - end
}

console.log(maximumCountOptimized(nums02))