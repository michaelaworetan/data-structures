// Creating hash table using open address method(Lineat Probing Method)
class HashTableLinearProbing {
  constructor(size = 10) {
    this.buckets = new Array(size).fill(null);
  }

  // return the index
  hash(key) {
    return key % this.buckets.length;
  }

  // insert
  insert(key, value) {
    let index = this.hash(key);

    while (this.buckets[index] !== null) {
      // insert into a new buckwt to avoid collision
      index = (index + 1) % this.buckets.length;
    }

    this.buckets[index] = { key, value };
  }

  // search
  search(key) {
    let index = this.hash(key);

    while (this.buckets[index] !== null) {
      if (this.buckets[index].key === key) {
        return this.buckets[index].value;
      } //  else it has been moved to another address
      index = (index + 1) % this.buckets.length; // increament using linear probing
    }
    return null; //key doesn't exist
  }

  //delete a key
  delete(key) {
    // getting the index
    let index = this.hash(key);

    while (this.buckets[index] !== null) {
      if (this.buckets[index].key === key) {
        this.buckets[index] = null;
        return;
      }
      // get the new bucket
      index = (index + 1) % this.buckets.length;
    }
  }
}

const hashTableLp = new HashTableLinearProbing();

hashTableLp.insert(10, "A");
hashTableLp.insert(20, "B");
hashTableLp.insert(11, "C");

// console.log(hashTableLp);

// console.log(hashTableLp.search(11));
// console.log(hashTableLp.search(13));

hashTableLp.delete(11);

console.log(hashTableLp);




