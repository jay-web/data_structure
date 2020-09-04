const pivot = require("./pivot ");

// ! Quick Sort
function quickSort (arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);

        // handle left side
        quickSort(arr, left, pivotIndex - 1);
    
        // handle right side
    
        quickSort(arr, pivotIndex + 1, right);
    }
   
    return arr;
}


const result = quickSort([200, -5, 5, 6, 4, 9, 3, 2, 12]);

console.log(result);