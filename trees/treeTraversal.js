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

  // inorder transversal
  inOrder(node = this.root, result = []) {
    // check if the node passed exists
    if (node) {
      this.inOrder(node.left, result); //recursive
      result.push(node.value);
      this.inOrder(node.right, result);
      result.push(node.value);
    }
    return result;
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

console.log("In-Order", bst.inOrder());
