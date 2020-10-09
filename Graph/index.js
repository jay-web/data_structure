const Graph = require("./db");

const Area = new Graph();

Area.addVertex("A");
Area.addVertex("B");
Area.addVertex("C");
Area.addVertex("D");
Area.addVertex("E");
Area.addVertex("F");


console.log(Area);

Area.addEdge("A", "B");
Area.addEdge("A", "C");
Area.addEdge("B", "D");
Area.addEdge("C", "E");
Area.addEdge("D", "E");
Area.addEdge("D", "F");
Area.addEdge("E", "F");

console.log(Area);

const result = Area.DFSR("A");

console.log({result});

const result2 = Area.DFSI("A");

console.log({result2});

const result3 = Area.BFSI("A");

console.log({result3});

const result4 = Area.BFSR("A");

console.log({result4});

// Area.addVertex("Palam");
// Area.addVertex("IGI");
// Area.addVertex("CP");

// // console.log(Area);

// Area.addEdge("Palam", "IGI");
// Area.addEdge("Palam", "CP");
// Area.addEdge("IGI", "CP");

// // console.log(Area);

// Area.removeEdge("IGI", "CP");

// Area.addEdge("IGI", "CP");

// Area.removeVertex("CP");

// console.log(Area);

