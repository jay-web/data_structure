// TODO : Create Binary-heap class

class MaxBinaryHeap {
    constructor(){
        this.value = [ ];
    }

    // * Insert method

    insertIntoHeap(input) {
        // TODO: first push the value into heap array
        this.value.push(input);
        if(this.value.length > 0) {
            this.bubbleUp();
        }
       
        return this.value;
    }

    // * Extract method // Remove/Delete method

    extractFromHeap(){
       
        let max = this.value[0];        
        let end = this.value.pop();    

       
        if(this.value.length > 0) {
           this.value[0] = end;      
           this.bubbleDown();
        }
        
        return max;
    }

    // * Bubble up method
    // * If last element is not higher one, so it will bubble up higher value to root one.

    bubbleUp() {
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
    }

    // * Bubble down method
    // * If root element is not higher one , so it will bubble down it to the related position or vise versa

    bubbleDown() {
      
        let idx = 0;
        let element = this.value[0];        
        let length = this.value.length;   

        while(true){
            let leftChildIndex = 2 * idx + 1;           
            let rightChildIndex = 2 * idx + 2;             
            let leftChild, rightChild;
            let swap = null;

            // * Check leftChildIndex should not be out of bound
            if(leftChildIndex < length){               
                // todo: save the element of leftChildIndex
                leftChild = this.value[leftChildIndex];    
                // todo: if leftChild element is higher than element, save its index value in swap variable
                if(leftChild > element){        
                    swap = leftChildIndex;     
                }
            }

            // * Check rightChildIndex should not be out of bound
            if(rightChildIndex < length){          
                // todo : save the element of rightChildIndex
                rightChild = this.value[rightChildIndex];   // 41
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)){    
                    swap = rightChildIndex;     // 2
                }
            }

            if(swap === null) break;

            this.value[idx] = this.value[swap];     
            this.value[swap] = element;         

            idx = swap;
            
        }
    }

   
}

module.exports = MaxBinaryHeap;