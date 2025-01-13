const score = 400      // number(maybe)
console.log(score);    // 400

const balance = new Number(400);     // 100% number
console.log(balance);  // [Number : 400]
console.log(balance.toString());    // 400
console.log(balance.toString().length)  // 3
console.log(balance.toFixed(2))      // 400.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(4))

const xyz = 1000000 ;
console.log(xyz.toLocaleString());
console.log(xyz.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++

console.log("--------------------------------------");

console.log(Math);   // Object [Math] {}
console.log(Math.abs(-5));        // converts into positive
console.log(Math.round(4.7));     // 5
console.log(Math.round(4.2));     // 4
console.log(Math.ceil(4.2));    // 5   Grater than 4 = 5
console.log(Math.floor(4.8));   // 4   Lowest value

console.log(Math.min(4,3,6,8));    // 3
console.log(Math.max(4,3,6,8));   // 8

console.log(Math.random());      // prints value between 0 to 1
console.log((Math.random()*10) + 1);  //  prints value between 1 to 10
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)










