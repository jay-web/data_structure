const Tree = require("./db");

// * Create the instance of tree 

const ageBox = new Tree();

console.log("Result before insert", ageBox);

// * Insert value in ageBox

ageBox.insertNode(30);
ageBox.insertNode(20);
ageBox.insertNode(50);
ageBox.insertNode(10);
ageBox.insertNode(25);
ageBox.insertNode(40);
ageBox.insertNode(55);


console.log("Result after insert", ageBox);

console.log("Seach result ", ageBox.search(25));


console.log("Breadth First Search- Traversal ", ageBox.BFS());


console.log("Depth First Search- Traversal-preorder ", ageBox.DFSPreorder());

console.log("Depth First Search- Traversal-postorder ", ageBox.DFSPostorder());

console.log("Depth First Search- Traversal- inorder ", ageBox.DFSInorder());