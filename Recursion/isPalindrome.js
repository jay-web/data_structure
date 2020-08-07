// ! Problem - Write a recursive function called isPalindrome
// ! Which returns true if the string passed to it is a palindrome
// ! other return false
// ! like passed string is 'tacocat' output is true


function isPalindrome(w) {

    function reverse(word){
        if(word.length === 1){
            return word[0];
        }
        return word.slice(-1) + reverse(word.slice(0, -1));
    }

    return w === reverse(w);
}


console.log(isPalindrome("tacocat"));
console.log(isPalindrome("awesome"));