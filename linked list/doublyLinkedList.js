//Doubly linked list

// Constructor for node
class Node {
  constructor(data) {
    this.data = data; // value stored in the node
    this.next = null; // pointer to the nect node
    this.prev = null; // pointer for the previous node
  }
}

// Constructor for doubly linked list
class DoublyLinkedList {
  constructor() {
    this.head = null; //start of the list
    this.tail = null; // end of the list
  }

  // push: insert something to the end of dll
  push(data) {
    const newNode = new Node(data);

    // check if the tail is empty
    if (!this.tail) {
      this.head = this.tail = newNode;
      return;
    }
    //  if tail exist ..make tail.next = newNode
    this.tail.next = newNode;

    //point the prev to the former tail
    newNode.prev = this.tail;

    this.tail = newNode; //attach newNode to the linkedlist
  }

  //  Display function
  display() {
    // if not empty
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " <-> ";
      //transverse through the list
      current = current.next;
    }
    console.log(result + "null");
    
  }

  // remove a node from ddl
  pop() {
    // Check if the list is empty
    if (!this.tail) {
      console.log("list is empty");
      return null
    }

    // Get tail's value
    const value = this.tail.data
    // if there is only one item 
    if (this.head === this.tail) {
      this.head = this.tail = null
    } else {
      // more than 1 item
      this.tail = this.tail.prev  // 2nd to the last node
      this.tail.next = null
    }
    return value
  }

  // Remove node at the beginning of the node
  shift(){
    // Check if head is empty
    if (!this.head) {
      console.log("list is empty");
      return null
    }

    const value = this.head.data
    // check if there is only one node
    if (this.head === this.tail) {
      this.head = this.tail = null
    } else {
      // set head to next and prev head to null 
      this.head = this.head.next
      this.head.prev = null
    }
    return value
  }

  // Insert node at the beginning of the node
  unshift(data){
    const newNode = new Node(data)
    //  check if the list is empty.. if not it the head and tail
    if (!this.head) {
      this.head = this.tail = newNode
      return
    }
    // if list is not empty
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
  }

}

const dll = new DoublyLinkedList();

dll.display();
dll.push(3);
dll.display();
dll.push(4);
dll.display();
dll.push(5);
dll.display();
// dll.pop();
// dll.display();
// dll.shift();
// dll.display();
dll.unshift(6);
dll.display();

