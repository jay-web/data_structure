const MaxBinaryHeap = require("./db");


const timeBox = new MaxBinaryHeap();

timeBox.insertIntoHeap(100);
timeBox.insertIntoHeap(200);
timeBox.insertIntoHeap(20);
timeBox.insertIntoHeap(110);
timeBox.insertIntoHeap(130);
// timeBox.insertIntoHeap(30);

console.log(timeBox);           