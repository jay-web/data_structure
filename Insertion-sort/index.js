
function insertionSort (array) {
    let currentValue ;

    for(let i=1; i <array.length; i++){
        currentValue= array[i];
        for(var j = i-1; j>=0 && array[j] > currentValue; j--){
            array[j+1] = array[j];
        }
        console.log(array);
        array[j + 1] = currentValue;
    }

    return array;
}


console.log(insertionSort([12, 100, 200, 1, 5, 4, 2 ]));


