const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 *  first iteration [5, 2, 3, 4, 1]: 0(n)
 */

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1; // dynamic indexing

  // swap the element of the array
  while (left < right) {
    // before the midpoint of the array
    // swap ressigning
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // increase the index number
    left++; // move left to the right
    right--; //  move right to the left
    console.log(arr);
  }
  return arr;
}

console.log(reverseArray(arr));
