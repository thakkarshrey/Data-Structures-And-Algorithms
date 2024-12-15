// Question : 5 - Reverse a string
// input : hello
// output : olleh

function reverseString(str = "") {
  if (str === "") return "";
  const splitted_str = str.substring(1);
  return reverseString(splitted_str) + str.substring(0, 1);
}

console.log(reverseString("hello"));
