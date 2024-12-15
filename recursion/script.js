// Recursion is when you call yourself again and again recursively. But that will create an infinite loop so you need to have a base case to break the loop.

// Recursion example:
function recursiveFn(person) {
  if (person > 5) return true;
  console.log(person);
  return recursiveFn(person + 1);
}

console.log(recursiveFn(1));

// Loop vs Recursion
const multiplyLoop = (arr) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }

  return product;
};

console.log(multiplyLoop([1, 2, 3, 4]));

const multiplyRecursion = (arr) => {
  if (arr.length === 0) return 1;
  return arr[arr.length - 1] * multiplyRecursion(arr.slice(0, arr.length - 1));
};

console.log(multiplyRecursion([1, 2, 3, 4]));
