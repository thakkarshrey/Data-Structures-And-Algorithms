// Question : 4 - Get the fibonacci number of n.

function fibonacciNumber(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

console.log(fibonacciNumber(10));

function fibonacciRecursion(n) {
  if (n <= 1) return n;
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

console.log(fibonacciRecursion(10));
