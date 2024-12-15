// Question : 2 - Palindrome number
// An integer is a palindrome number when it reads the same forward and backward number.

// Input : x = 121  // Output : true
// Input : x = 10  // Output : false

function palindrome(x) {
  const temp_x = String(x).split("").reverse().join("");
  return x < 0 ? false : x === +temp_x;
}

console.log(palindrome(121));
