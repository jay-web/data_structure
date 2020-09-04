function pivot(arr, start= 0, end= arr.length - 1){
    var pivot = arr[start];
    var swapIdx = start;

    for(var i= start + 1; i <arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }   
    }

    swap(arr, start, swapIdx);

    return swapIdx;
}

function swap(arr, index1, index2){
    let temp = arr[index2];     // hold the value of array index2 in temp variable
    arr[index2] = arr[index1];  // change the value of array index2 with array index1
    arr[index1] = temp;         // now place the temp value of array index2 at array index1
    return arr; 
}



module.exports = pivot;