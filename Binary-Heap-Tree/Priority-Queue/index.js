const PriorityBinaryHeap = require("./db");

let pbh = new PriorityBinaryHeap();

pbh.insertIntoHeap("math", 4);

pbh.insertIntoHeap("hindi", 1);

pbh.insertIntoHeap("english", 5);

pbh.insertIntoHeap("social", 3);

console.log(pbh.extractValue());


console.log(pbh);

console.log(pbh.extractValue());