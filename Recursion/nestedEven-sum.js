// ! Problem - Write a function called nestedEvenSum
// !         - Which return the sum of all even numbers in an object which may contain nested objects


function nestedEvenSum(object) {
    let counter = 0;

    for(let key in object){
        if(typeof object[key] == "object"){
            counter = counter + nestedEvenSum(object[key]);
        }else if(typeof object[key] === "number" && object[key] % 2 === 0){
            counter = counter + object[key];
        }
    }

    return counter;
}


var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };


const result = nestedEvenSum(obj2);

console.log(result);