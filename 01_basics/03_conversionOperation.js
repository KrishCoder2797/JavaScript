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


// ******************************** Operations *****************************

console.log("---------------Opearations------------------");

let value = 3 
let negValue = -value
console.log(negValue);    // -3

console.log(2+2)   //4
console.log(2-2)  // 0
console.log(2*2)  // 4
console.log(2**2)  // 4
console.log(2/2)   // 1
console.log(2%2)   // 0

let str1 = "krish"
let str2 =" gajare"

console.log(str1 + str2);  // krish gajare

console.log("1" +2 );  //12
console.log(1 + "2");  // 12
console.log("1" + 2 + 2); // 122
console.log(1+2+"2");  // 32

let num1,num2,num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;         // prefix and postfix same as java
console.log(gameCounter);





