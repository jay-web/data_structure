// * Create Node class

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}


// * Create Linked List class
// ! It will have only one property that will be 'head' and null should be assign at starting

class LinkedList {
    constructor(){
        this.head = null;
    }

    // * Method one - to add the new node in linked list

    insertFirst(data){
        const node = new Node(data, this.head);
        this.head = node;
    }

    // * Method two - return the number of nodes in linked list

    size(){
        let counter = 0;
        // let nextNode;
        let tHead = this.head;

        while(tHead){
            counter++;
            tHead = tHead.next;
        }

        
        // if(this.head != null){    
        //     do{
        //         counter++;                          
        //         nextNode = tHead.next;                  
        //         tHead = nextNode;                 
        //     }
        //     while(nextNode != null);                  
    
        // }else{
        //     return counter;
        // }

        
        return counter;
    }

    // * Method three - return first node of the linked list

    getFirst(){
            return this.head;
        }

    // * Method four - return last node of the linked list

    getLast(){
        if(!this.head){                          // * Check linked list is empty or not
            return null;
        }

        let tHead = this.head;                  // * Assign head in temporary variable for loop
        let tail;                               // * Variable to assign last node 

        while(tHead){                           // * Loop till tHead is not null
            tail = tHead;                       // * assign tHead to tail, if tHead is not null
            tHead = tHead.next;                 // * replace tHead.next to tHead to continue loop 
        }

        return tail;                            // * return tail i.e last node
    }

    // * Method Five - clear the entire linked list means empty it

    clear(){
        this.head = null;
    }

    // * Method Six - to remove the first node of the linked list
    
    removeFirst(){
        if(!this.head){
            return null;
        }

        this.head = this.head.next;

    }

    // * Method Seven - to remove the last node of the linked list

    removeLast() {
        if(!this.head) return null;             // * check list is empty already or not

        if(!this.head.next){                    // * check list has only single node 
            this.head = null;
            return;
        }

        let previous = this.head;               // * to track previous node
        let tail = previous.next;               // * to track tail
        
        while(tail) {                           // * loop till tail available
            if(tail.next == null){              // * check node next to tail is null
                previous.next = null;           // * assign node.next of the node which is second last node i.e previous
            }
            previous = tail;                    // * replace the previous node with tail to continue looping        
            tail = tail.next;                   // * replace the tail node with tail.next to continue looping   
        }

    }

    // * Method Eight - to add the node at the end of linked list

    insertLast(data) {
        const node = new Node(data);          // * Create new instance of node using Node class

        if(!this.head){                             // * Check list is already empty
           return this.head = node;
        }

        let lastNode = this.getLast();              // * Using getLast function, to get last node

        lastNode.next = node;                       // * Assigning new node to lastnode.next value


    }

    // * Method Nine - to get the node of specific index in linked list

    getAt(index) {
        if(!this.head == null) return;              // * Check list is already empty
        let tNode = this.head;                      // * Create temporary variable as a head
        let counter = 0;                            // * Create counter for loop                
        
        while(tNode){                    
            if(counter === index){                  // * Check counter is equal to requested index
                return tNode;                       // * this will be our output if index available
            }

            counter++;
            tNode = tNode.next;
        }

        return null;                               // * Return the null, if index is not available
    }

    // * Method Tenth - to remove node at particular index

    removeAt(index) {
        // * CASE 1
            // ? if list is empty already
        if(!this.head) return null;    
        
        // * CASE 2
            // ? If we want to remove head or first node of the linked list
        if(index == 0){                             
            this.head = this.head.next;
            return;
        }

        // * This is to get the previous node of the required index node
        // TODO - Review the getAt method of the linked list
        let previous = this.getAt(index - 1);       

        // * CASE 3 and 4 - Below code will handle two cases
            // ? if previous index node is not available in linked list, out of bound
            // ? if previous is available but index is not available

        if(previous == null || previous.next == null){
            return;
        }


         // * Here we assign next property of previous to the required index.next node
        previous.next = previous.next.next;    
       
    }

    // * Method Eleven - insert new node at requested index

    insertAt(data, index) {
        // * If linked list is empty
            // ? So add the new node as a head
        if(!this.head){
            this.head = new Node(data);
            return;
        }

        // * To handle index 0
        if(index == 0) {
            this.head = new Node(data, this.head);
            return;
        }
 
        // * To get the previous node of the requested index
        let previous = this.getAt(index - 1);

        if(previous == null){
            let tail = this.getLast();
            tail.next = new Node(data);
            return;
        }
        previous.next = new Node(data, previous.next);

        
    }
}


module.exports = LinkedList;