// ! Problem 3 - Print the factorial of passed input using recursion
// ! Like if input is 5 - output would be 121 which is result of (5 * 4 * 3* 2 * 1)

function factorial(num){
    //declare the base case
    if(num <= 1){
        return 1;
    }else if(num < 0){
        return 0;
    }else{
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));