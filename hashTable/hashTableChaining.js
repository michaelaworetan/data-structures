class HashTable {
  constructor(size = 10) {
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  // Returns the index of the key
  hash(key) {
    return key % this.buckets.length;
  }

  //   insert a bucket into hash table bucket array
  insert(key, value) {
    // first hash the key
    const index = this.hash(key);
    // push into the bucket
    this.buckets[index].push({ key, value });
  }

  // Searching for a value with parsed key
  search(key) {
    const index = this.hash(key);

    for (const pair of this.buckets[index]) {
      if (pair.key === key) {
        return pair.value;
      }  
    }
    // if it does not exist
    return null;
  }

  delete(key) {
    //get the index of the key
    const index = this.hash(key);

    //filter out pair with the key
    this.buckets[index] = this.buckets[index].filter(pair => pair.key !== key);
  }
}

const hashTable = new HashTable();

hashTable.insert(10, "A");
hashTable.insert(20, "B");
hashTable.insert(11, "C");

// console.log(hashTable);
console.log(hashTable.search(10));
console.log(hashTable.search(20));

hashTable.delete(11);
console.log(hashTable.search(11));
