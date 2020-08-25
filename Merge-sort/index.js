const merge = require("./merge-array");


// ! Problem - write a function mergeSort with 
// !           which accept unsorted array,
// !           in return give the new sorted array
console.log(merge);

function mergeSort(array){
    if(array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
}


const result = mergeSort([10, 5, 1, 15]);

console.log(result);