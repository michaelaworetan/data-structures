// Queues as an array
class Queue {
  constructor() {
    this.items = [];
  }

  // Queue methods
  // adding element to the queue (end)
  enqueue(element) {
    this.items.push(element);
  }

  // removes the front element
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // return front element in the queue
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // check if Queue is Empty
  isEmpty() {
    return this.items.length === 0;
  }

  // to get the size of the queue
  size() {
    return this.items.length;
  }
}

// Queue operations
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);
console.log(queue);
queue.dequeue();
console.log(queue);
console.log(queue.front());
console.log(queue.size());