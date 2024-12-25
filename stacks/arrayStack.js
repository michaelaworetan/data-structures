// stacks using arrays

class Stack {
  constructor() {
    this.items = [];
  }
  // push: add element to the top
  push(element) {
    this.items.push(element);
  }

  // remove the element from the top
  pop() {
    // check if the stack is empty
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // peek the top element in the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    // return the last item(top of the stack)
    return this.items[this.items.length - 1];
  }

  // check if it is empty
  isEmpty() {
    return this.items.length === 0;
  }

  //size
  size() {
    return this.items.length;
  }
}

// stack operations
const stack = new Stack();
//peek the current stack
console.log(stack.peek());
stack.push(1);
console.log(stack.peek());
stack.push(2);
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.isEmpty());
console.log(stack.size());