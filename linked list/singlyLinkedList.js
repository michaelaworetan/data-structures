//Singly linked list

// Constructor for node
class Node {
  constructor(data) {
    this.data = data; // value stored in the node
    this.next = null; // pointer to the nect node
  }
}

//LLnked list
class SinglyLinkedList {
  constructor() {
    this.head = null; // ponit to the head (first node) of the singly linked list
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

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }

  // Insert to the node to the end of a linked List
  push(data) {
    // Creating a new node using the node class
    const newNode = new Node(data);
    // check if there is a head
    if (!this.head) {
      this.head = newNode;
      return;
    }
    // if the head exist
    let current = this.head;
    while (current.next) {
      // if current.next is not pointing to null
      current = current.next; // move the current.next to the next variable
    }
    // when current.next is null.. attach the newNode
    current.next = newNode;
  }

  // remove node from the end of the linked List.. the last item pointing to null
  pop() {
    // check if the list is empty
    if (!this.head) {
      console.log("list is empty");
      return null;
    }
    // if not empty
    // check if there is one node..i.e this.head pointing to null
    if (!this.head.next) {
      const value = this.head.data;
      this.head = null;
      return value;
    }

    // if there are multiple node.. transverse to the end of the node
    let current = this.head;
    while (current.next.next) {
      // while current.next.next is not null (last nost)
      current = current.next; // make the current.next to be the new current
    }
    // if current.next.next is null remove current.next(last)
    const value = current.next.data;
    current.next = null; // make the last node the new null
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
    // setting thr next node the be the head
    this.head = this.head.next;

    return value;
  }

  // Insert node to the beginning of a linked list
  unshift(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    // make the new node the head
    this.head = newNode
  }
}

const list = new SinglyLinkedList();
list.display();
list.push(5);
list.push(6);
list.push(7);
// list.push(8);
list.display();
// list.pop();
// list.display();
// list.pop();
// list.display();
// list.shift();
list.unshift(14);
list.display();
