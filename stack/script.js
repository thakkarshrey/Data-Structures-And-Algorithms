// Basic stack implementation

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) return;
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return;
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();

stack.push(21);
stack.push(8);

console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop();
console.log(stack.peek());
