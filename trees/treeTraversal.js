// creating a node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // inserting a node into the BST
  insert(value) {
    const newNode = new Node(value);
    //check is tree is empty
    if (!this.root) {
      this.root = newNode;
    } else {
      //add to existing BST
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // check if the value of the new Node is < root node
    if (newNode.value < node.value) {
      // if so add to the left hand side of BST
      //check if there is already a node on the left side
      if (!node.left) {
        node.left = newNode;
      } else {
        // if there is node on the left
        this.insertNode(node.left, newNode); // recursive function
      }
    } else {
      // if the value of new node is > root node
      if (!node.right) {
        node.right = newNode;
      } else {
        // if there is a node on the right
        this.insertNode(node.right, newNode); // recursive function
      }
    }
  }

  // inorder traversal
  inOrder(node = this.root, result = []) {
    // check if the node parsed exists
    if (node) {
      this.inOrder(node.left, result); // recursive
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  //PreOrder traversal
  preOrder(node = this.root, result = []) {
    // check if there is a root
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }
  //PostOrder traversal
  postOrder(node = this.root, result = []) {
    // check if there is a root
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  //search operation
  search(value, node = this.root) {
    // if the tree is empty
    if (!node) {
      return false;
    }

    // if value is root node
    if (value === node.value) {
      return true;
    }

    return value < node.value
      ? this.search(value, node.left)
      : this.search(value, node.right);
  }

  // delete a value in a bst
  delete(value, node = this.root) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      // node with one or no child
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      // node with two children
      // find the minimum node value
      let minNode = this.findMin(node.right);
      node.value = minNode.value;
      this.delete(minNode, node.right);
    }
    return node;
  }

  findMin(node) {
    while (node.left) {
        node = node.left
    }
    return node
  }
}

const bst = new BinarySearchTree();

bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
bst.insert(17);
bst.insert(25);

// console.log("In-Order", bst.inOrder());
// console.log("Pre-Order", bst.preOrder());
// console.log("Post-Order", bst.postOrder());

// console.log("Search", bst.search(10));
console.log("Delete", bst.delete(10));

