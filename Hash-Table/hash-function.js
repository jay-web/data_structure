// Create hash function to hash the key

function hash(key, arrayLen){
    let total = 0;
    let weird_prime = 31;
    for(let i=0; i < Math.min(key.length, 20); i++){
        let char = key[i];
        let index = char.charCodeAt(0) - 96;
        total = (total * weird_prime + index) % arrayLen;
    }
    console.log(total);
    return total;
}


module.exports = hash;