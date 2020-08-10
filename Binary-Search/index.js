// ! Problem - Write a function called binarySearch
// !           Which accepts a sorted array and a value
// !           and returns the index at which the value exists
// !           Other wise return -1;


function binarySearch(array, value) {
        let midPoint = Math.floor(array.length / 2);
        let start = 0;
        let end = array.length - 1;

        while(array[midPoint] !== value && start <= end){

            if(array[midPoint] < value){
                start = midPoint + 1;
            }else{
                end = midPoint - 1;
            }

            midPoint= Math.floor((start + end ) / 2);
            
        }

        return array[midPoint] === value ? midPoint : -1;
}

const result = binarySearch([1, 3, 15, 20, 47, 125, 548, 635], 125);

console.log("Result is at index ", result);












// [1, 2, 3,4, 5, 6, 7, 8, 9, 10,11]
//                          s  m  e




// function binarySearch(array, value){

//     function helper(arr){
//         let midPoint = arr[Math.floor(arr.length / 2)];
//         // console.log(arr.length);
//         // console.log("Midpoint", midPoint);
//         // * Condition 1 - midPoint is equal to value
//         if(midPoint === value){
//             // console.log("final output", arr.indexOf(midPoint));
//             return arr.indexOf(midPoint);
//         }

//         // * Condition 2 - midPoint is less than to value

//         if(midPoint < value){
//             // [1 ,2 , 3, 4, 5, 6, 7, 8,9, 10,11 ]
//             return helper(arr.slice((arr.indexOf(midPoint) + 1)));
//         }

//         // * Condition 3 - midPoint is greater than value

//         if(midPoint > value) {
//             // [1 ,2 , 3, 4, 5, 6, 7, 8,9, 10,11 ]
//             return helper(arr.slice(0, arr.indexOf(midPoint)));
//         }
//     }

//     return helper(array);
// }


