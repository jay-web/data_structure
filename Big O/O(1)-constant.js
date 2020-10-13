function printFirstTwoNames(array){
    console.log(array[0]);      // O(1)
    console.log(array[1]);         // O(1)
}

let nameBox = ["j", "a", "d", "k", "l"];
let box = new Array(10000).fill("jay");

printFirstTwoNames(nameBox);
printFirstTwoNames(box);


// In above the function, operations will remain constant i.e 2 operations
//  Whether input has 5 elements or 10000 elements
// Therefore its, O(1) i.e Constant