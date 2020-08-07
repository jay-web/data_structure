// ! Problem - Write a recursive function called fib.
// !    Which accept a number and return the nth number  in the Fibonacci sequence


    function fib(num){
        if( num <= 2) return 1;

        return fib(num - 1) + fib(num - 2);


        // ?   one more method
        // let fibSiq = [1 ,1];

        // function createFib(number){
        //     for(var i=1; i < number; i++){
        //         fibSiq.push(fibSiq[i] + fibSiq[i-1]);
        //     }
            
        // }
        // createFib(num);
        // return fibSiq[num - 1];
    }


    console.log(fib(4));