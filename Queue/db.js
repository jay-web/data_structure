// ? Create class of Queue

 class Queue {
    constructor() {
        this.data = [];             // * will create empty array at the time of instance creation
    }

    // ? Method to add item in data

    addValue(value){
        this.data.unshift(value);       // * unshift will add the value in starting of array
    }

    // ? Method to remove the item from data

    removeValue(value) {
        return this.data.pop();  // * pop will delete the value from end of array
    }

    // ? Method to check data

    showData(){
        console.log(this.data);
        return this.data;
    }
}

const booking = new Queue();

booking.addValue("Avenger");                // add item in database
    
booking.showData();            // check data in db

booking.addValue("marvel");                 // add new item in database

booking.showData();

booking.addValue("DC")          // add new value

booking.showData();

booking.removeValue();          // remove the item from db

booking.showData();

