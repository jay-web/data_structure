const HashTable = require("./db");

let HT = new HashTable();

// HT.setValue("jay", "programmer");
// HT.setValue("amit", "Engineer");
// HT.setValue("amit", "Engineer");


console.log(HT.setValue("jay", "programmer"));
console.log(HT.setValue("amit", "Engineer"));
console.log(HT.setValue("vinod", "Engineer"));
console.log(HT.setValue("vikas", "Anaylist"));
console.log(HT.setValue("Akash", "Coder"));


console.log(HT.getValue("ram"));
console.log(HT.getValue("vinod"));


