// Stacks as a Linked list

// Node constructor
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack constructor
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    // check if stack is empty
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode
    }
    this.size++;
  }

  pop() {
    // check if stack is empty
    if (!this.top) {
      return "Stack is empty";
    }
    const removedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return removedNode.value;
  }

  peek() {
    // check if stack is empty
    if (!this.top) {
      return "Stack is empty";
    }
    return this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

//stack opeartions
const stack = new Stack();
stack.push(12);
console.log(stack);
stack.pop();
console.log(stack);
stack.push(13);
stack.push(14);
console.log(stack);
console.log(stack.peek());
