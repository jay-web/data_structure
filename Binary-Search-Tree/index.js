const Tree = require("./db");

// * Create the instance of tree 

const ageBox = new Tree();

// * Insert value in ageBox

ageBox.insertNode(10);


// console.log(ageBox);

ageBox.insertNode(5);


// console.log(ageBox);

ageBox.insertNode(17);


console.log(ageBox);

ageBox.insertNode(18);

ageBox.insertNode(9);

console.log("Result after insert", ageBox);


console.log("Seach result ", ageBox.search(25));