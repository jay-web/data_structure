// ! Problem : Write a recursive function called flatten
// !           which accepts an arrray of arrays and return a new array with all values flattened
// ! Like : input is [1,2,3, [4,5,6], [7]] so output should be [1,2,3,]// ! Like : input is [1,2,3, [4,5,6], [7]] so output should be [1,2,3,4,5,6,7]


function flatten(oldArray) {
    let newArray = [];

    for(let i= 0; i < oldArray.length; i++){
        if(Array.isArray(oldArray[i])){
            newArray = newArray.concat(flatten(oldArray[i]))
        }else{
            newArray.push(oldArray[i])
        }
    }

    return newArray;
}


console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));