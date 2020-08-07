// ! Problem - Write a function called power which accepts a base and exponent.
// !         - The function should return the power of the base  to the exponent
// !         - This should mimic the functionality of Math.pow()


function power(base, exponent){
    // Define recursion base case
    if(exponent === 0){
        return 1;
    }
    return base * power(base, exponent - 1);

   // ? Solution without resursion
    // let POB = base;
    // for(var i=1; i <exponent; i++){
    //     POB = POB * base;
    // }
    // return POB;
}


console.log("Result ", power(2, 4));