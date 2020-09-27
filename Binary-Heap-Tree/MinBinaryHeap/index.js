const MinBinaryHeap = require("./db.js");

let Mbh = new MinBinaryHeap();

Mbh.insertValue(900);
Mbh.insertValue(200);
Mbh.insertValue(1100);
Mbh.insertValue(400);

console.log(Mbh.extractValue());
console.log(Mbh); 

console.log(Mbh.extractValue());
console.log(Mbh); 