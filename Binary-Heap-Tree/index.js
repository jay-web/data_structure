const MaxBinaryHeap = require("./db");


const timeBox = new MaxBinaryHeap();

timeBox.insertIntoHeap(55);
timeBox.insertIntoHeap(39);
timeBox.insertIntoHeap(41);
timeBox.insertIntoHeap(18);
timeBox.insertIntoHeap(27);
timeBox.insertIntoHeap(12);
timeBox.insertIntoHeap(33);


console.log(timeBox);    

console.log(timeBox.extractFromHeap());
console.log(timeBox);   
console.log(timeBox.extractFromHeap());

console.log(timeBox);   

console.log(timeBox.extractFromHeap());



console.log(timeBox); 
