function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; //swapping elements
    }
    console.log(arr);
  }
  return arr;
}

// console.log(selectionSort([2, 4, 1, 3, 5]));
console.log(selectionSort([5, 3, 8, 4, 2]));
