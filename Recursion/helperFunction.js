// ! Problem- 4 - find out the odd values from the passed array using helper method of recursion
// ! Like - if input is [1, 2, 3, 4, 5] so output should be [1, 3, 5]


function countOddValues(array){
    let outputArray = [];

    // create the function as helper method

    function countOdd(inputArray){
        // define base
        if(inputArray.length === 0){
            return outputArray; 
        }
        if(inputArray[0] % 2 != 0){
            outputArray.push(inputArray[0]);
        }   
        countOdd(inputArray.slice(1));
        // const newArray = inputArray.slice(1);
        // console.log(inputArray);
        // return outputArray.concat(countOdd(newArray));
    }

    countOdd(array);
    return outputArray;
}

const result = countOddValues([4, 6, 7, 13, 17, 19, 22]);
console.log("Output is ", result);