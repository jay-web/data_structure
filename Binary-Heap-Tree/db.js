// TODO : Create Binary-heap class

class MaxBinaryHeap {
    constructor(){
        this.value = [];
    }

    // * Insert method

    insertIntoHeap(input) {
        // TODO: first push the value into heap array
        this.value.push(input);

        // todo : takeout the index of input value
        let inputIndex = this.value.length - 1;
        
        // todo : takeout the parent index value of input value using Math.floor((n -1)/ 2)
        let parentIndex = Math.floor((inputIndex - 1) /  2);
        
        // * Loop till parent index value is less than input index value
        while(this.value[parentIndex] < this.value[inputIndex]){

                // todo :swap the value with parent index value
                let temp = this.value[inputIndex];
                this.value[inputIndex] = this.value[parentIndex];
                this.value[parentIndex] = temp;
            
            // todo : reset input and parent indexes after swaping the values
            inputIndex = parentIndex;
            parentIndex = Math.floor((inputIndex - 1) / 2);
        }
        return this.value;
    }

   
}

module.exports = MaxBinaryHeap;