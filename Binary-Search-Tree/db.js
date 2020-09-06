// ! Binary Search Tree is the tree type data structure
// ! Two rules to create BST
    // ! First tree should binary one- means only 0, 1 or max 2 child of single parent
    // ! Data should be inserted in sorted form
        // ! Data which is less than root data, will insert on left side of root
        // ! Data which is higher than root data, will insert on right side of root

// * First create node class

class Node {
    constructor(value) {
        this.value = value;
        this.left  = null;
        this.right = null;
    }

}

// * Second create Binary Search Tree class

class BST {
    constructor(){
        this.root = null;
    }

    // * Insert method
    insertNode(value){
        // * Create new node with value
        const newNode = new Node(value);

        // * If tree is empty
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;

        while(true){
            if(value === current.value ) return undefined;
            // * If tree has already root node
                        // * check the value is less than current variable value 
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }

             // * If tree has already root node
                        // * check the value is greater than current variable value 
            
            if(value > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        
        }
    }
}

module.exports = BST;