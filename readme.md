# Data Structures and Algorithms

This repository contains implementations of various data structures and algorithms in JavaScript. The goal is to provide a comprehensive set of examples and explanations to help understand these fundamental concepts.

## Folder Structure

- `data-structures/`
  - `minHeap.js`: Implementation of a MinHeap data structure.
- `algorithms/`
  - `quickSort.js`: Implementation of the QuickSort algorithm.

## Data Structures

### MinHeap

A MinHeap is a binary tree where the parent node is always smaller than its child nodes. The smallest element is at the root of the tree. This property must be maintained after every insertion and deletion.

#### Methods

- `insert(value)`: Adds a new value to the heap and maintains the heap property.
- `remove(value)`: Removes a specific value from the heap and maintains the heap property.
- `extractMin()`: Removes and returns the smallest element (root) from the heap.
- `heapify(index)`: Ensures the heap property is maintained by comparing the element at the given index with its children and swapping if necessary.

### Example Usage

```javascript
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);

console.log(minHeap.extractMin()); // 1
console.log(minHeap.extractMin()); // 3