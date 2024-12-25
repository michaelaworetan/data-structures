// circularlinked list

// Constructor for node
class Node {
  constructor(data) {
    this.data = data; // value stored in the node
    this.next = null; // pointer to the nect node
  }
}

//LLnked list
class CircularlinkedList {
  constructor() {
    this.head = null; // ponit to the head (first node) of the circular linked list
  }
  // Display method
  display() {
    // if list is empty
    if (!this.head) {
      console.log("the list is empty");
      return;
    }

    // if not empty
    let current = this.head;
    let result = "";

    do {
      result += current.data + " -> ";
      current = current.next;
    } while (current !== this.head);
    console.log(result + "(circular)");
  }

  // Insert to the node to the end of a linked List
  push(data) {
    const newNode = new Node(data);

    // check if head is empty
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head; //node pointing back to itself
    }

    //  if it wasn't empty
    let current = this.head;
    while (current.next !== this.head) {
      current = current.next; //transevering each node
    }

    current.next = newNode; // at end of the list.. insert new node
    // new node pointing to head of the node
    newNode.next = this.head;
  }

  // remove node from the end of the linked List.. the last item pointing to null
  pop() {
    // check if the list is empty
    if (!this.head) {
      console.log("list is empty");
      return null;
    }

    // if there is one node
    if (this.head.next === this.head) {
      const value = this.head.data;
      this.head = null;
      return value;
    }

    // for more than one node
    let current = this.head;
    while (current.next.next !== this.head) {
      current = current.next; // trasverse to the 2nd to the last
    }

    const value = current.next.data; // value we want to pop

    current.next = this.head; // creates the loop

    return value;
  }

  // Shift: to remove the first node from a linked list
  shift() {
    // check if the head is empty
    if (!this.head) {
      console.log("list is empty");
      return null;
    }

    // getting the node value
    const value = this.head.data;

    // if there is only one node
    if (this.head.next === this.head) {
      this.head = null;
    } else {
      // more than node
      let tail = this.head;
      while (tail.next !== this.head) {
        tail = tail.next; // trasverse
      }

      this.head = this.head.next;
      tail.next = this.head;
    }
    return value;
  }

  // Insert node to the beginning of a linked list
  unshift(data) {
    const newNode = new Node(data);

    //check if there is no node
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
      return;
    }

    let tail = this.head;
    while (tail.next !== this.head) {
      tail = tail.next;
    }

    newNode.next = this.head;
    this.head = newNode;
    tail.next = this.head;
  }
}

const list = new CircularlinkedList();
list.display();
list.push(5);
list.push(6);
list.push(7);
list.display();
list.pop();
list.display();
list.shift();
list.display();
list.unshift(14);
list.display();
