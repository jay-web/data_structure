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

// console.log(midNode);


// ! Check whether Linked list is circular or not
    // * If yes return true;
    // * If no return false;


function checkCircular(list) {
    let slow = list.head;
    let fast = list.head;

    while(fast.next &&  fast.next.next){
       
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }

    return false;

} 

let result =  checkCircular(list);

// console.log(result);



// ! Find the node, as per the passed distance from the last node 
    // * n will be passed in function, which will be the node number from the last node
    // * Example - if n is 0, which means its asking about last node
    // *            if n is 1, which means its second last node of the linked list

function fromLast(list, n){
    let slow  = list.head;
    let fast = list.head;

    if(n > list.size()){
        return;
    }

    for(var i=1; i <= n; i++){
        fast = fast.next;
    }
   
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}


let frmLast = fromLast(list, 2);

console.log(frmLast);







