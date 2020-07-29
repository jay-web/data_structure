// ! Problem two - Print the sum of the range as per the input using recursion
// ! Like if input is 5, output should be 15 which is sum of (5+4+3+2+1)

// ? Solution

function sumRange(num){
    // Declare the base case
    if(num === 1){
        return 1;
    }else {
        return num + sumRange(num - 1);
    }
}

console.log(sumRange(5));