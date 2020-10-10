const DirectedGraph = require("./db");

const map = new DirectedGraph();

map.addVertex("palam");
map.addVertex("gurgoan");
map.addVertex("IGI");
map.addVertex("fbd");
map.addVertex("america");
map.addVertex("russia");

// Create way from palam to gurgaon

map.addEdge("palam", "gurgaon");
map.addEdge("IGI", "fbd");
map.addEdge("gurgoan", "america");
map.addEdge("russia", "palam");


map.removeVertex("IGI");
map.addEdge("palam", "russia");
map.addEdge("russia", "palam");


map.removeVertex("palam");
console.log(map);