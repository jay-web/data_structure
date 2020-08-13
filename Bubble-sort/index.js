// ! Problem - create a function bubble sort
// !           which accept an unsorted array
// !           output will be sorted array
// !           like input [20, 5, 25, 28, 6] and output should be [5, 6 , 20, 25, 28] 


function bubbleSort(array){
    let sortedArray = [];

    function helper(arr){
        if(arr.length === 0){
            return;
        }

        for(var i=0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                swap(arr, i, i+1);
            }
        }
       
        sortedArray.unshift(arr[arr.length - 1]);
        return helper(arr.slice(0, -1));
    
    }

    helper(array);
    return sortedArray;
}

function swap(arr, idx1, idx2){
    let temp = arr[idx2];
    arr[idx2] =  arr[idx1];
    arr[idx1] = temp;
    console.log("arr from swap ", arr);
    return arr;
}


const result = bubbleSort([20, 5, 25, 28, 6, 7, 55, 3]);


console.log(result);