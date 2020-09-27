class MinBinaryHeap {
    constructor(){
        this.value = [];
    }

    // * insert value
    insertValue(value) {
        this.value.push(value);

        if(this.value.length > 1){
            this.bubbleUp();
        }
        return this.value;
    }

    // * extract value

    extractValue(){
        let min = this.value[0];
        let last = this.value.pop();

        if(this.value.length > 1){
            this.value[0] = last;
            this.bubbleDown();
        }

        return min;
    }

    // Bubble up function
    bubbleUp(){
        let childIndex = this.value.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);

        if(this.value[parentIndex] > this.value[childIndex]){
            let temp = this.value[childIndex];
            this.value[childIndex] = this.value[parentIndex];
            this.value[parentIndex] = temp;

            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }

        return this.value;
    }

    // Bubble down function
    bubbleDown(){
        let idx = 0;
        let element = this.value[0];
        let length = this.value.length;
        
      

        while(true){
            let lci = 2 * idx + 1;      // * left child index 
            let rci = 2 * idx + 2;      // * right child index
            let lc, rc;                 // * left child & right child
            let swap = null;
            if(lci < length){
                lc = this.value[lci];
                if(lc < element){
                    swap = lci;
                }
            }

            if(rci < length ){
                rc = this.value[rci];
                if(
                    (swap === null && (rc < element)) ||
                    (swap !== null && (rc < lc))
                ){
                    swap = rci;
                }
            }

            if(swap === null ) break;
            this.value[idx] = this.value[swap];
            this.value[swap] = element;

            idx = swap;

        }
    }
}

module.exports = MinBinaryHeap;