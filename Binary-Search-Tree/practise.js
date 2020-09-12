const Tree = require("./db");

const numberBox = new Tree();

numberBox.insertNode(50);
numberBox.insertNode(40);
numberBox.insertNode(60);
numberBox.insertNode(30);
numberBox.insertNode(45);
numberBox.insertNode(55);
numberBox.insertNode(70);
numberBox.insertNode(20);
numberBox.insertNode(35);
numberBox.insertNode(42);
numberBox.insertNode(47);
numberBox.insertNode(52);
numberBox.insertNode(57);
numberBox.insertNode(68);
numberBox.insertNode(75);

console.log({numberBox});

console.log("DFS-Preorder", numberBox.DFSPreorder());

console.log("DFS-Preorder", numberBox.DFSPostorder());

console.log("DFS-Inorder", numberBox.DFSInorder());