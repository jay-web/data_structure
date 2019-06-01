// ? create the node class with constructor for value and reference next

class Node {
    constructor(val){
        this.value = val;           // * this is the value
        this.next = null;           // * this is the reference for next node, now its single node so we assigned null
    }
}


class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // ! Method one push method to add the new node in linked list

    push(val){
        var newNode = new Node(val);            // * create the new node
        if(!this.head){
            this.head = newNode;                // * assiging new node to head, if head is not available means empty list
            this.tail = this.head;              // * assigning head value to tail, as tail is not available.
        }else{
            this.tail.next = newNode;           // * Assign newNode to the next property of node as a pointer.
            this.tail = newNode;
        }
        this.length++;          // * increment the length
        return this;            // * return the linked list.

    }

    // ! Method two pop, to remove the item from the end of list

    pop(){
        if(!this.head){
            return undefined;  // ? if list is not created or empty return undefined
        }
        var current = this.head;     // ? this is to hold the last item of list,
        var newTail = current;      // ? this is to hold the new tail which we get after remove previous tail

        while(current.next){            // ? loop till current next is available
            newTail = current;          // ? if current.next is available, so current will be the newTail
            current = current.next;       // ? And current will hold the current.next, as its available
        }
        this.tail = newTail;    // ? this will assign new tail value in list tail
        this.tail.next = null;      // ? this is important, it will pop previous last value
        this.length--;
        if(this.length === 0){  // ! this is the case when list reach at length 0
            this.head = null;
            this.tail = null;   
        }
        return current;     // ?  it will return the pop element of the list
    }
}


var list = new SinglyLinkedList();          // * this will create the instance of singly linked list.
list.push("a");                             // * it will create or add the new node in list with the passed value
list.push("b");
list.push("c");
// list.pop();
console.log(list);