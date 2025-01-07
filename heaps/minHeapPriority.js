class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  insert(priority, value) {
    this.heap.push({ priority, value });
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    //check the priority of the Heap
    while (
      index > 0 &&
      this.heap[parentIndex].priority > this.heap[index].priority
    ) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.heapify(0);

    return root;
  }

  heapify(index) {
    let smallest = index;
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      this.swap(smallest, index);
      this.heapify(smallest);
    }
  }
}

const pq = new PriorityQueue();
pq.insert(3, "Task 3");
pq.insert(1, "Task 1");
pq.insert(2, "Task 2");

console.log(pq);
pq.remove();

console.log(pq);

