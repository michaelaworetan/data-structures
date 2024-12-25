// Constructor for a linked list

// Constructor for node
class Node {
  constructor(data) {
    this.data = data; // value stored in the node
    this.next = null; // pointer to the nect node
  }
}

//LLnked list
class LinkedList {
  constructor() {
    this.head = null; // ponit to the head (first node) of the linked list
  }

  // Display method
  display() {
    // if list is empty
    if (!this.head) {
      console.log("the list is empty");
      return;
    }

    // if not empty
    let current =  this.data;
    let result = "";
    
    while (current) {
      result += current.data + " -> "
      current = current.next

    }
     console.log(result + "null");
     
  }
}

const list =  new LinkedList()

list.display()