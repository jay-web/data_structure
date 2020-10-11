const {  performance } = require('perf_hooks');

// Examples
var nameList = new Array(1000000).fill("mamta");
nameList[999999] = "jay";

function findName(array){
    let start = performance.now();
    for(let i=0; i< array.length; i++){
        if(array[i] === "jay"){
            console.log("Found jay");
        }
    }
   let end = performance.now();
   console.log("Time took " + (end - start));
}

findName(nameList);

// ! Big O = O(n) linear time
// As number of input increases, number of operation increases