// ! Problem - create a function bubble sort
// !           which accept an unsorted array
// !           output will be sorted array
// !           like input [20, 5, 25, 28, 6] and output should be [5, 6 , 20, 25, 28] 

function bubbleSort(array) {   
    for(let i=0; i<array.length; i++){
        
        for(let j=i+1; j<array.length; j++){
            if(array[j] < array[i]){
                swap(array, i, j);
            }
        }
       
    }

    return array;
}


function swap(arr, idx1, idx2){
    let temp = arr[idx2];
    arr[idx2] =  arr[idx1];
    arr[idx1] = temp;
   
    return arr;
}


const result = bubbleSort([20, 5, 25, 28, 6, 7, 55, 3]);
console.log(result);