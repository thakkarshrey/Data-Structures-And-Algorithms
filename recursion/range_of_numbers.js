// Question : 2 - Create an array with range of numbers
// start : 1, end : 5 --> [1,2,3,4,5]

function rangeOfNumbers(start_num, end_num) {
  if (end_num < start_num) return [];
  let numbers = rangeOfNumbers(start_num, end_num - 1);
  numbers.push(end_num);
  return numbers;
}

console.log(rangeOfNumbers(1, 5));
