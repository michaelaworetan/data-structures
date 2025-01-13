function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // divide into two
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  console.log(left);

  const right = mergeSort(arr.slice(mid));
  console.log(right);

  return merge(left, right);
}

// merge
function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
    console.log(result);
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([2, 4, 5, 7, 8, 3, 6, 1]));
