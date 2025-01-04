class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(priority, value) {
    this.heap.push({ priority, value });
    this.bubbleUp(this.value.length - 1);
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
  }
}
