const Queue  = require('./db');

const booking = new Queue();                // Create the instance of Queue class

booking.addValue("Avenger");                // add item in database
    
booking.showData();                         // check data in db

booking.addValue("marvel");                 // add new item in database

booking.showData();

booking.addValue("DC")                      // add new value

booking.showData();

booking.removeValue();                      // remove the item from db

booking.showData();

booking.getLastItem();                       // Get the last item of database