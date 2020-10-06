const Graph = require("./db");

const Area = new Graph();

Area.addVertex("Palam");
Area.addVertex("IGI");
Area.addVertex("CP");

// console.log(Area);

Area.addEdge("Palam", "IGI");
Area.addEdge("Palam", "CP");
Area.addEdge("IGI", "CP");

// console.log(Area);

Area.removeEdge("IGI", "CP");

console.log(Area);

