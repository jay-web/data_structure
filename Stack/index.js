const Stack = require('./db');


const library = new Stack();                // * Create instance of Stack 

library.addValue("harry potter");           // * Add value in database

let books = library.showData();             // * Show data from database

library.addValue("Ramayan");                // * Add more values in database
library.addValue("books");

books = library.showData();                 // * Show updated values from database

console.log(books);                         // * Check the result in console


library.removeValue();                      // * Delete the last inserted value in database


books = library.showData();                 // * Show updated values from database

console.log(books);                         // * Check the result in console


