// Implement linear search in javascript
// Write a function to search target in nums, if target exists then return its index.
// Otherwise return -1. Write an algorithm with O(n) time complexity.

let nums = [4,5,6,7,8,0,1,2]  // target = 0 --> output = 5


function linearSearchAlgorithm(nums, target){ 
    // Time complexity is O(n) as the number of operations of loop depends upon the array length
    // Space complexity is O(1) which is constant as we are not creating any other variable here and simply returning a value
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(target === element) return i
    }
    return -1
}

console.log(linearSearchAlgorithm(nums, 0))


let nums01 = [4,5,6,7,4,0,1,2]
function linearSearchAlgorithmList(nums, target){
    let temp_arr = []
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(target === element) temp_arr.push(i)
    }
    
    if(temp_arr.length === 0) return -1
    else return temp_arr
}

console.log(linearSearchAlgorithmList(nums01, 4))

// Creating custom myFindIndex polyfill function
Array.prototype.myFindIndex = function(cb){
    if(this === null) throw new TypeError("myFindIndex called on null or undefined")
    if(typeof cb !== 'function') throw new TypeError("Callback must be a function")
    for (let i = 0; i < this.length; i++) {
        const result = cb(this[i], i, this)
        if(result) return i
    }
    return -1
}

const element = nums01.myFindIndex((element) => element === 6)
console.log(element,'element')