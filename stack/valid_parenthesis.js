// Question : 2 - Check if the parenthesis is valid or not in a given string.
// Input : "()" --> Output : true
// Input : "()[]{}" --> Output : true
// Input : "(}" --> Output : false

function validParenthesis(string) {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (element === "(" || element === "[" || element === "{") {
      stack.push(element);
    } else if (element === ")" || element === "]" || element === "}") {
      if (isEmpty(stack)) return false;

      const popped_element = stack.pop();
      if (
        (element === ")" && popped_element !== "(") ||
        (element === "]" && popped_element !== "[") ||
        (element === "}" && popped_element !== "{")
      ) {
        return false;
      }
    }
  }

  return isEmpty(stack);
}

function isEmpty(stack) {
  return stack.length === 0;
}

console.log(validParenthesis("({})"));
