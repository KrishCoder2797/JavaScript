// array
// Declaration
// 1)
const myArr1 = [1,2,3,4,"krish", true]
console.log(myArr1[2]);
console.log(myArr1);

// 2)
const myArr2 = ["ironman","Spider man","Captain America" , "Dr Strange"];

// 3)
const myArr3 = new Array(1,2,3,4)

// Methods

myArr1.push(6)
myArr1.push(7)
console.log(myArr1);

myArr1.pop(7)
console.log(myArr1);

myArr1.unshift(9)     // Adds data at first position and shift all the elemetns
console.log(myArr1);

myArr1.shift();
console.log(myArr1);   // delete 1st element

console.log(myArr1.includes(9));
console.log(myArr1.indexOf(3));

const newArr = myArr1.join();   // converts array into strings
console.log(myArr1);
console.log(typeof myArr1);
console.log(newArr);
console.log(typeof newArr);

// slice , splice

console.log("A " , myArr1);  // A  [ 1, 2, 3, 4, 'krish', true, 6 ]
const myn1 = myArr1.slice(1,3)
console.log(myn1);  // [ 2, 3 ]    doesnt include range
console.log("B ", myArr1);

const myn2 = myArr1.splice(1,3)
console.log(myn2);     // [ 2, 3, 4 ]  Includes range
console.log("C ", myArr1);  // Splice changes original array   C  [ 1, 'krish', true, 6 ]

















