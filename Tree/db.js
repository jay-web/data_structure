// * Create Tree Data Structure class

// * First create Node class

class Node {
    constructor(data) {
        this.data  = data;
        this.children = [];         // * to store children nodes
    }

    // * Add method
    add(data) {
        const newNode = new Node(data);
        this.children.push(this.newNode);

    }
    // * remove method
    remove(data) {
        this.children = this.children.filter((node) => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        // * Step 1- pass the root node of the tree to the new empty array
        const arr = [this.root];

        // * Step 2- iterate in new array till any element left in that

        while(arr.length){
            // * Step 3 - pull out first node from the new array.
            const node = arr.shift();
            
            // * Step 4 - insert all the children of the node which we pulled out in Step 3, at the end of same array

            arr.push(...node.children);     // ? Using Spread operator

            // for(let child of node.children){         // ? Classic loop method 
            //     arr.push(child);
            // }
            
            // * Step 5 - Pass the pulled out node in passed function to further required calculation

            fn(node);


        }
    }
    traverseDF(fn) {
        const arr = [this.root];

        while(arr.length){
            const node = arr.shift();

           arr.unshift(...node.children);
           fn(node);
        }

        
    }
}



module.exports = { Node, Tree };