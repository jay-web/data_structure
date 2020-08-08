// ! Problem - Create a function called searchNumber
// !           Which accepts an array and number which need to be find in passed array
// !           if number exist in array, return index of that number in array
// !           else, return -1


function searchNumber(array, number){
    if(array.length === 0){
        return;
    }
    for(let i=0; i < array.length; i++){
        if(array[i] === number){
            return i
        };
    }
    return -1;
}


const result = searchNumber([2, 4, -5, 548, 1], 548);

console.log(result);