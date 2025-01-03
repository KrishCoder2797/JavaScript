let score = "33"
console.log(typeof score);

let valueInNumber = Number(score)  
console.log(typeof valueInNumber);  // number
console.log(valueInNumber)  // 33

//
let score1 = "33abc"
console.log(typeof score1);  // string

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);  // number
console.log(valueInNumber1);   // NaN


//

let score2 = null
console.log(typeof score2);   // object

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);  // number
console.log(valueInNumber2);      // 0

//

let abc = true
console.log(typeof abc);  // boolean

let xyz = Number(abc)
console.log(typeof valueInNumber2);  // number
console.log(valueInNumber2);      // 1     if we given false then ans will be 0

/*
"33" => 33
"33qbc" => NaN
true => 1 ; false => 0
*/

console.log("-------------------");
let isLogedIn = 1;
let booleanIsLogedIn = Boolean(isLogedIn)
console.log(booleanIsLogedIn);

 // 1 => true ; 0 => false
 // "" => false
 // "krish" => true

//

console.log("---------------------");

let Num = 33
let SNumber = String(Num)
console.log(typeof Num);
console.log(typeof SNumber);

