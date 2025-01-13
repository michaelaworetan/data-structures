// intial commit
function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      // loop through the whole array up the index preceding the last
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
      console.log(arr);
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));
