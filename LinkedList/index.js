const LinkedList = require('./db');


const list = new LinkedList();

// list.insertFirst(101);
// list.insertFirst(102);
// list.insertFirst(201);
// // list.insertFirst(301);
// // console.log(list);

// // console.log("size", list.size());


// // console.log("First Node", list.getFirst());


// // console.log("Last Node", list.getLast());

// // // list.clear();

// // // console.log("Size after empty linked list", list.size());

// // list.removeFirst();

// // list.removeFirst();

// // console.log("========================================");
// // console.log("size", list.size());
// console.log("list", list);

// console.log("last node", list.removeLast());

// console.log("list", list);

// list.removeLast();

// console.log("list", list);

// list.removeLast();

// console.log("list", list);

list.insertLast(1000);
list.insertLast(2000);
list.insertLast(3000);

// console.log("list after - insert last", list);

// console.log("getAt", list.getAt(2));


// list.removeAt(1);

// console.log("after remove at ", list);

// console.log("List ", list);

list.insertAt(6700, 1);

// console.log("List ", list);

console.log(list.size());

console.log(list.getAt(2));

list.insertAt(6700, 5);

// console.log("List ", list);

list.forEach((node, index) => {
    node.data += 100;
    
});

// console.log("List ", list);


for(let n of list){
    n.data += 150;
}

console.log("List ", list);