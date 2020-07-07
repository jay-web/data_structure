const LinkedList = require('./db');


const list = new LinkedList();

list.insertFirst(101);
list.insertFirst(102);
list.insertFirst(201);
list.insertFirst(301);
console.log(list);

console.log("size", list.size());


console.log("First Node", list.getFirst());


console.log("Last Node", list.getLast());

// list.clear();

// console.log("Size after empty linked list", list.size());

list.removeFirst();

list.removeFirst();

console.log("========================================");
console.log("size", list.size());
console.log("list", list);