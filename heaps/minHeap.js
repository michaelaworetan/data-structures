class MinHeap {
  constructor() {
    this.heap = [];
  }

  // helper functions
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  bubbleUp(index) {
    let parentIndex = this.getParentIndex(index);
    while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  // insertion
  insert(value) {
    this.heap.push(value);
    // finding the appropriate position
    this.bubbleUp(this.heap.length - 1);
  }

  // Remove
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

  // heapify methid(turn to a proper heap)
  heapify(index) {
    let smallest = index;
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallest]
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallest]
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      this.swap(smallest, index);
      this.heapify(smallest);
    }
  }
}

const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(2);
heap.insert(30);
heap.insert(15);
heap.insert(1);

console.log(heap);

heap.remove();

console.log(heap);
