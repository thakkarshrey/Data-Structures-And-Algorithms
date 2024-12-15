// Add - Remove elements from array

const person = {
  name: "Shrey",
  age: 25,
};
let arr = ["Shrey", "Neha", "Kamil", person];

// add to the end
arr.push("orange");
console.log(arr);

// remove from the end
arr.pop();
arr.pop();
console.log(arr);

// add to top
arr.unshift("apple");
console.log(arr);

// remove from top
arr.shift();
console.log(arr);

/***** LOOPS *****/
// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// while loop
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

/***** INBUILD LOOPS *****/
// map
let numbers = [1, 2, 3, 4, 5];
let numbers_01 = [6, 7, 8, 9, 10];
const newNumsMap = numbers.map((item, index, array) => {
  return item + 5;
});
console.log(newNumsMap);

// filter
const newNumsFilter = numbers.filter((item, index, array) => {
  return item <= 3;
});

console.log(newNumsFilter);

// reduce
const newNumsReduce = numbers.reduce((accumulator, item, index, array) => {
  return accumulator + item;
}, 0);
console.log(newNumsReduce);

// some - it returns true or false based on the condition
const newNumsSome = numbers.some((item, index, array) => {
  return item > 3;
});
console.log(newNumsSome);

// every - it will check for every item of array and return true or false if every item matches the condition
const newNumsEvery = numbers.every((item, index, array) => {
  return item < 10;
});
console.log(newNumsEvery);

// find - returns that particular single value based on the condition. If it is object then it will return object if the condition matches
const newNumsFind = numbers.find((element) => element > 3);
console.log(newNumsFind);

// spread operator
const newNumsSpread = [...numbers, ...numbers_01];
console.log(newNumsSpread);

// rest operator
const restFn = (...values) => {
  return values;
};
console.log(restFn(numbers, numbers_01, arr));

// concat - it will merge 2 arrays and return a new array
const newNumsConcat = numbers.concat(arr);
console.log(newNumsConcat);

let namesArr = ["apple", "kiwi", "orange", "mango", "banana"];

// slice
const newNamesSlice = namesArr.slice(0, 3);
console.log(newNamesSlice);

// splice
namesArr.splice(2, 1, "SHREY"); // starting from 2nd index it will delete 1 element and replace it with SHREY
console.log(namesArr);

// fill - it will fill all the index with the given number. You can also give index as 2nd parameter to fill the array from that particular index
numbers.fill(0, 2);
console.log(numbers); // output : [1,2,0,0,0]

// findIndex - if number is present then it will return 1 else -1
const isNumPresent = numbers.findIndex((item) => item === 2);
console.log(isNumPresent);

// flat - it flattens the array into one single array
let nestedExample = [
  [1, 2, 3],
  [4, 3, [34, 45]],
];
const flattenedArr = nestedExample.flat(3);
console.log(flattenedArr);

// reverse
numbers.reverse();

// sort
const unsortedArr = [45, 21, 78, 33, 99];
const sortedArr = unsortedArr.sort((a, b) => a - b); // a-b for ascending and b-a for decending
console.log(sortedArr);
