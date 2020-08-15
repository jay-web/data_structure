// ! Problem - write a function named selectonSort
// !           which accept unsorted array and in return give the sorted array using selection sort


function selectionSort(array){
    // [5, 2, 7, 10, 6, 12]
    for(let i=0; i<array.length; i++){
        let lowest = i;             

        for(let j=i+1; j<array.length; j++){
            if(array[j] < array[lowest]){
                lowest = j;
            }
        }
        // If array[i] is not equal to array[lowest] value, means lowest value changed
        //  then only swap the value
        // this will help to decrease the iteration in array for swaping
        if(array[i] !== array[lowest]){
            swap(array, i, lowest)
        }
       
    }

    return array;

}


function swap(array, arrayStartingIndex, minValueIndex){
    console.log("swapping");
    let temp = array[arrayStartingIndex];
    array[arrayStartingIndex] = array[minValueIndex];
    array[minValueIndex] = temp;
    return array;
}


const result  = selectionSort([15, 2, 17, 10, 6, 2]);

console.log(result);