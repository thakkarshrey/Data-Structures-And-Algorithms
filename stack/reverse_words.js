// Question : 1 - Reverse words in a string using stack method
// Input : "the sky is blue" --> Output : "blue is sky the"

function reverseWords(string = "") {
  const splitted_str = string.split(" ");
  const stack = [];

  for (let i = 0; i < splitted_str.length; i++) {
    stack.push(splitted_str[i]);
  }
  let reversed_str = "";
  while (stack.length) {
    const popped_element = stack.pop();
    reversed_str = reversed_str + " " + popped_element;
  }

  return reversed_str.trim();
}

console.log(reverseWords("the sky is blue"));
