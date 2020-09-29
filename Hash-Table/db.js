const hash = require("./hash-function");


class HashTable {
    constructor(size = 3){
        this.keyMap = new Array(size);
    }

    // * Function to set value in table
    setValue(key, value){
        let index = hash(key, this.keyMap.length);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);

        return this.keyMap;
    }

    // * Function to get value from table

    getValue(key){
        let index = hash(key, this.keyMap.length);
        if(this.keyMap[index]){
            for(let i=0; i< this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }else{
            return undefined;
        }
    }
}


module.exports = HashTable;