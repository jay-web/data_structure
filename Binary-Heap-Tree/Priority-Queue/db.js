class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityBinaryHeap {
    constructor(){
        this.value = [];
    }

    // * insert value
    insertIntoHeap (value, priority ){
        let newNode = new Node(value, priority);
        this.value.push(newNode);

        if(this.value.length > 1){
            this.bubbleUp();
        }

        return this.value;
    }

    // * extract as per priority

    extractValue() {
        let min = this.value[0];
        let last = this.value.pop();

        if(this.value.length > 1){
            this.value[0] = last;
            this.bubbleDown();
        }

        return min;
    }

    // * bubble up function
    bubbleUp(){
        let childIndex = this.value.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);

        if(this.value[parentIndex].priority > this.value[childIndex].priority){
            let temp = this.value[childIndex];
            this.value[childIndex] = this.value[parentIndex];
            this.value[parentIndex] = temp;

            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
    }

    // * bubble down function
    bubbleDown() {
        let idx = 0;
        let element = this.value[0];
        let length = this.value.length - 1;

        while(true){
            let lci = 2 * idx + 1;
            let rci = 2 * idx + 2;
            let lc, rc;
            let swap = null;

            if(lci < length){
                lc = this.value[lci];
                if(lc.priority < element.priority){
                    swap = lci;
                }
            }

            if(rci < length){

                rc = this.value[rci];
                if(
                    (swap === null && (rc.priority < element.priority)) ||
                    (swap !== null && (rc.priority < lc.priority))
                ){
                    swap = rci;
                }
            }

            if( swap === null ) break;

            this.value[idx] = this.value[swap];
            this.value[swap ] = element;

            idx = swap;
        }
    }
}



module.exports = PriorityBinaryHeap;