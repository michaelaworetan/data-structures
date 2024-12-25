class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Pointer to thr next node
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        // move to the next node
        current = current.next;
      }

      current.next = newNode;
    }
  }
}
