// ! Problem - write a function merge which is accept two array
// !           But both the array already should be sorted
// !           In return, give the single sorted array 

function merge(a, b){
    let finalArray = [];
    let i = 0;
    let j = 0;

    while( i < a.length && j < b.length){
        if(a[i] < b[j]){
            finalArray.push(a[i]);
            i++;
        }else{
            finalArray.push(b[j]);
            j++;
        }
    }

    while(i < a.length){
        finalArray.push(a[i]);
        i++;

    }

    while(j < b.length ){
        finalArray.push(b[j]);
        j++;
    }
    return finalArray;
}


module.exports = merge;


console.log(merge([2, 4, 10, 50, 120, 300], [ 1, 5, 6]));