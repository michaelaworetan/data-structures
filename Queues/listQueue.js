// Queue using Linked list

// Node constructor
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // addidng element to the end
  enqueue(value) {
    const newNode = new Node(value);

    // if queue is empty
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // reoves element from the front
  dequeue() {
    if (!this.front) {
      return "Queue is empty";
    }

    const removedNode = this.front;

    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }
    this.size--;
    return removedNode.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// Queue operations
const queue = new Queue();
queue.enqueue(3);
console.log(queue);
queue.enqueue(4);
console.log(queue);
queue.dequeue();
console.log(queue);

