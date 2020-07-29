// ! Problem one- print the num as per the input using recursion
// ! Like if input is 5 - output should be 5,4,3,2,1

// ? Solution

function countDown(num){
    // * declare the base case 
    if(num <= 0){
        console.log("All are printed successfully");
        return;
    }
    console.log("Number is ", num);
    num--;
    countDown(num);
}


countDown(5);