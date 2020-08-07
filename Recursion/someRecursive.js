// ! Problem - Write a recursive function called someRecursion
// ! Which accepts an array and a callback.
// ! The function return true, if a single value in the array return true when passed to callback
// ! otherwise, return false


function someRecursion(arr, callback){

    function helper(arr){
        console.log("length ", arr.length);
         
            if(arr.length === 0){
                return false;
            }
            if(callback(arr[0])){
              
                return true;
            }
           return helper(arr.slice(1));
    
    }
   
     return helper(arr);

}

function checkEven(num){
    if(num % 2 === 0){
        return true;
    }
}
console.log(someRecursion([1, 3, 3 ,5], checkEven));
