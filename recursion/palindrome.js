// Question : 3 - check for palindrome

function checkPalindrome(x) {
  if (x < 0) return false;
  let converted_x = String(x).split("").reverse().join("");
  return x === +converted_x;
}

console.log(checkPalindrome(121));
