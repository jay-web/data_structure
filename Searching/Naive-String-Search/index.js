// ! write a function, which accepts a string and searching word as as string
// !    Here, we need to number of times searching word appear in the passed string
// ! Example - input of string is - "ewereomgdjfdfomg" and searching word is "omg"
// !    output should be 2

// * Method - classic one

function searchingWord (line, word){
    //let line is = "aweomgsssomg" and word is "omg"
    let counter = 0;
    for(var i=0; i<line.length; i++){
        // console.log("====");
        for(var j=0; j<word.length; j++){
            if(line[i] === word[j]){
                if(line[i+1] === word[j+1]){
                    if(line[i+2] === word[j+2]){
                        counter++;
                    }else{
                        break;
                    }
                }else{
                    break;
                }
            }else{
                break;
            }
        }
    }

    return counter;
}


let result = searchingWord("hkdhk fjj aydfdfd jayadfaj aydfdfd jay", "jay");

console.log("Counter is ", result);