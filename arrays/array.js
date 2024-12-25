const arr = [1, 2, 3, 4];

// assesing an element time complexity: 0(1)..constant
console.log(arr[0]);

// searching for an element time complexity: 0(n)..linear
function findElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return i;
    }
  }
  return -1;
}

console.log(findElement(arr, 4));

// append element to the end of an array time complexity: 0(1)..constant
arr.push(5);

console.log(arr);

// remove element from the begining of an array : o(n).. reassiging the new elements to a new index
arr.shift();

// add to the beginning
arr.unshift(0);
console.log(arr);

// Multidimensional
// 2d array
const twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Access an element  .. time complexity o(1)
console.log(twoDArray[0][0]);

// Tranverse into the 2d array time complexity o(m * n)  m- rows n- columns
for (let i = 0; i < twoDArray.length; i++) { //loop through the array
    for (let j = 0; j < twoDArray[i].length; j++) {  // loop through each element in the each array
        console.log(twoDArray[1][j]);   
    }
}