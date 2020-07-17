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



module.exports = { Node };