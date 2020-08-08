// ! Problem - Write a recursive function called capitalizeFirst.
// !           Given an array of strings,capitalize the first letter of each string in the array


function capitalizeFirst(array){
    let newArray = [];
    
    function helper(arr){
        // define base of recursive
        if(arr.length === 0){
            return;
        }

        newArray.push(arr[0][0].toUpperCase() + arr[0].slice(1));
        return helper(arr.slice(1));
    }
 
    helper(array);

    return newArray;
}


const result = capitalizeFirst(["my", "name", "is", "jay"]);

console.log(result);

