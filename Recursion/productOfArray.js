// ! Problem - Write a function which accept array of numbers and return the product of them all
// ! Like if input is [1 , 2, 3, 10] so output should be 60

function productOfArray(array){
   if(array.length === 0){
       return 1;
   }

   return array[0] * productOfArray(array.slice(1));
}


productOfArray([1,2,3,10]);
