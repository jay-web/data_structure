// ! Binary Search Tree is the tree type data structure
// ! Two rules to create BST
// ! First tree should binary one- means only 0, 1 or max 2 child of single parent
// ! Data should be inserted in sorted form
// ! Data which is less than root data, will insert on left side of root
// ! Data which is higher than root data, will insert on right side of root

// TODO : Create node class

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// TODO : create Binary Search Tree class

class BST {
  constructor() {
    this.root = null;
  }

  // ?  Insert method
  insertNode(value) {
    // TODO Create new node with value
    const newNode = new Node(value);

    // * If tree is empty
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    // TODO : Assign root in temp variable for iteration
    let current = this.root;

    while (true) {
      // * If value is equal to current.value
      // TODO return undefined
      if (value === current.value) return undefined;

      // * If tree has already root node
      // * And the value is less than current variable value
      if (value < current.value) {
        // * If left node of current is not available,
        // TODO : so assign newNode at left
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        // * If left node is already available,
        // TODO :  so assign the current.left to current
        // * It will change the node of current variable, and loop will continue
        current = current.left;
      }

      // * If tree has already root node
      // * And the value is greater than current variable value

      if (value > current.value) {
        // * If right node of current is not available,
        // TODO :  so assign newNode at right
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        // * If right node is already available,
        // TODO : so assign the current.right to current
        // * It will change the node of current variable, and loop will continue
        current = current.right;
      }
    }
  }

  // ? Search or find method
  search(value) {
    // * If root is not available
    // TODO : return
    if (this.root === null) {
      return;
    }

    // TODO : Assing root to temp variable for iteration
    var current = this.root;

    // TODO : Start while loop, till it doesn't return

    while (true) {
      // If current.value is equal to search value
      // TODO : return current
      if (current.value === value) {
        return current;
      }

      // * Check if search value is less than root
      if (value < current.value) {
        // * check left node is available of current
        if (current.left !== null) {
          // TODO : assign left node of current to current varible, to continue iterate
          current = current.left;
        } else {
          // TODO : return null, means search value not available
          return null;
        }
      }

      // * Check if search value is higher than root
      if (value > current.value) {
        // * Check right node is avalable of current
        if (current.right != null) {
          // TODO : assign right node of current to current varible, to continue iterate
          current = current.right;
        } else {
          // TODO : return null, means search value not available
          return null;
        }
      }
    }
  }
}

module.exports = BST;
