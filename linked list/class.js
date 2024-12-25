// creating node class to be able to keep track of each node in our linked list
class Node {
  constructor(value) {
    this.value = value;     // data value
    this.next = null;   // the next element is empty
  }
}


// create a LinkedList by linking the nodes
class LinkedList {
  constructor() {
    this.head = null;       // beginining showing the linkedlist is empty
  }

  // Add node to the end of the list
  append(value) {
    // creating a new node from the class above
    const newNode = new Node(value);
    if ((this.head === null)) {
        // setting the new node to be the head of the element if the list is empty
      this.head = newNode;
    } else {  // if head is not null
      let current = this.head;
      // continuously checking if current node.next is not null (meaning it is not the last node in the linkedlist)
      while (current.next !== null) {
        // move to the next node
        current = current.next; // setting the next node as the new current
      }
      // if it is equal to null set it to the new node
      current.next = newNode; 
    }
  }
}


/** Linked list
 *  5 - 2 - 4 - null
 * new node
 */