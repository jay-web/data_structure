const LinkedList = require('./db.js');

// ! Find the midpoint
    // * Don't use size function to get the half
    // * Don't use counter
    // * If list has even nodes, so last node of the first half should be considered midpoint

function midpoint (list) {
    let slow  = list.head;
    let fast = list.head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}


const list = new LinkedList();

list.insertLast(200);
list.insertLast(300);
list.insertLast(400);
list.insertLast(500);
list.insertLast(600);

let midNode = midpoint(list);

console.log(midNode);



