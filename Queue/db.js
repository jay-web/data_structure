// ? Create class of Queue

 class Queue {
    constructor() {
        this.data = [];             // * will create empty array at the time of instance creation
        this.count = this.data.length;
    }

    // ? Method to add item in data

    addValue(value){
        this.data.unshift(value);       // * unshift will add the value in starting of array
        this.count++;
    }

    // ? Method to remove the item from data

    removeValue(value) {
        this.count--;
        return this.data.pop();  // * pop will delete the value from end of array
    }

    // ? Method to check data

    showData(){this.data[-1]
        console.log(this.data);
        return this.data;
    }

    // ? Method to get last item in array, but no need to remove it

    getLastItem() {
        console.log(this.data[this.count - 1]);
        return this.data[this.count - 1];
    }
}

module.exports = Queue;



