// Create a class implementing Stack Data structure


class Stack {
    constructor(){
        this.data = [];
        this.count = this.data.length;
    }


    // ? method to add value in stack

    addValue(value) {
        this.data.push(value);
        this.count++;
    }

    // ? method to get data

    showData(){
        return this.data;
    }

    // ? method to remove value from stack

    removeValue(){
        this.count--;
        return this.data.pop();
    }

    // ? method to get the last item without removing it

    getLastItem() {
        return this.data[this.count - 1];
    }
}


module.exports = Stack;