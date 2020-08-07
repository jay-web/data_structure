// ! Write a recursive function called reverse
// ! - which accept a string and returns a new string in reverse
// ! - like - if input string is 'awesome' so output should be 'emosewa'


function reverse(word){
    
    if(word.length == 1){
        return word[0];
    }
    return word.slice(-1) + reverse(word.slice(0, -1));

    /* Solution without recursion
        let reverseString = word.split("").reverse().join("");
        console.log(reverseString);
    */
}

console.log(reverse("awesome"));