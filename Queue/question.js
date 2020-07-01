const Queue = require('./db');

const q1 = new Queue();

q1.addValue(1);
q1.addValue(2);
q1.addValue(3);
q1.addValue(4);


const q2 = new Queue();

q2.addValue(100);
q2.addValue(200);
q2.addValue(300);
q2.addValue(400);
q2.addValue(500);
q2.addValue(600);


// create weave function 
// ! This function we receive two parameter which should be Queue
// ! And will return the new Queue
// ! which elements should be alternative of passed Queues elements

function weave(sourceOne, sourceTwo){
    const q = new Queue();

    while(sourceOne.getLastItem() || sourceTwo.getLastItem()){

        if(sourceOne.getLastItem()){
            q.addValue(sourceOne.removeValue());
        }

        if(sourceTwo.getLastItem()){
            q.addValue(sourceTwo.removeValue());
        }
    }

    return q;
}


const result = weave(q1, q2);               // * calling weave function with above defined queues

console.log("result", result);