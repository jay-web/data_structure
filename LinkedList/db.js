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
        if(!this.head){
            return null;
        }

        let tHead = this.head;
        let tail;

        while(tHead){
            tail = tHead;
            tHead = tHead.next;
        }

        return tail;
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


}


module.exports = LinkedList;