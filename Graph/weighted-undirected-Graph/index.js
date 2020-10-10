const WUDG = require("./db");

const map = new WUDG();

map.addVertex("palam");
map.addVertex("IGI");
map.addVertex("fbd");
map.addVertex("gurgaon");

// Add edges

map.addEdge("palam", "IGI", 5);
map.addEdge("palam", "gurgaon", 25);
map.addEdge("palam", "fbd", 45);

map.removeEdge("palam", "IGI");


map.removeVertex("palam");

console.log({map});