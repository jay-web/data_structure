const Stack = require('./db');

// ! Implement Queue methodology with the help of Stack

// * Create Queue DS

class Queue {
    constructor(){
        this.first = new Stack();                   // ? First stack will save the input items
        this.second = new Stack();                  // ? Second stack will work as helper to implement other features
    }

    // Method one - Add new value

    addItem(value){
        this.first.addValue(value);                 // ? addValue is method called from stack
    }

    // Method two - remove value

    remove(){
        // ! Since Stack follow LIFO process, but Queue follow FIFO
        // ! So we will transfer the data from first stack to second to reverse it

        while(this.first.getLastItem()){
            this.second.addValue(this.first.removeValue());
        }

        const firstRecord = this.second.removeValue();

        // ! After getting first inserted item of first stack through second second
        // ! we will transfer the remaining items back to first stack in reverse order again

        while(this.second.getLastItem()){
            this.first.addValue(this.second.removeValue());
        }

        return firstRecord;
    }

    // Method three - get last item without removing

    lastItem(){
        while(this.first.getLastItem()){
            this.second.addValue(this.first.removeValue());
        }

        const lastRecord = this.second.getLastItem();

        while(this.second.getLastItem()){
            this.first.addValue(this.second.removeValue());
        }

        return lastRecord;
    }

}


const Q1 = new Queue();

Q1.addItem(1);
Q1.addItem(2);
Q1.addItem(3);
Q1.addItem(4);

console.log("Q1", Q1);                                  // ? output = [1 , 2, 3, 4]

const firstItem = Q1.remove();                          

console.log("firstItem", firstItem);                    // ? output = 1

console.log("Q1", Q1);                                  // ? output = [ 2, 3, 4]

const lastRemainingItem = Q1.lastItem();

console.log("lastItem ", lastRemainingItem);            // ? output = 2

console.log("Q1", Q1);                                  // ? output = [2 , 3, 4]    