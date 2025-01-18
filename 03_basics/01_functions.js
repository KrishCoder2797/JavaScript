// Normal function
function sayMyName(){
    console.log("Krish Gajare");
    
}  // function syntax

sayMyName()  // function call

// function with parameters
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
    
}
addTwoNumbers() ;  // NaN
addTwoNumbers(3,4)  // 7
addTwoNumbers("3",7)  // 37
addTwoNumbers(3,"7")   // 37
addTwoNumbers(3,"a")   // 3a
addTwoNumbers(3,null)   // 3

// function with return value
console.log("----------------------------------");

function subTwoNumbers(number1,number2){

        return number1 - number2
   
}

const result = subTwoNumbers(6,3)
console.log("Result :" , result);

// function call in console.log

function loginUserMsg(username){

    return `${username} just loged in`
}

console.log(loginUserMsg("Krish"));
console.log(loginUserMsg());   // undefined just loged in

// Passing bydefault value to function

function myname(name = "krish"){

    return `My name is ${name}`
}

console.log(myname());  // My name is krish
console.log(myname("Krushna"));  // My name is Krushna    ,, If we not pass the value then it takes default value and if we pass the value then it overrides the default value

// Spread/ Rest Operator (used for multiple parameters)

function calculateCartPrice(...num1){

    return num1 ;
}

console.log(calculateCartPrice(100,200,300));  // [ 100, 200, 300 ]
console.log(calculateCartPrice(100,200,300,"krish"));   // [ 100, 200, 300, 'krish' ]

// 
function calculateCartPrice1(val1, val2,...num1){

    return num1 ;
}
console.log(calculateCartPrice1(100,200,300,400,500));  // [ 300, 400, 500 ]


// Passing Object in function

const User = {
    username: "Krish",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(User)   // Method1

handleObject({
    username:"Krushna",
    price:500
})                  // Method2

// Passing array to function
const myNewArray =[ 200, 400,500, 800]

function returnSecondVal(getArray){
    return getArray[1]
}

console.log(returnSecondVal(myNewArray)); // Method1
console.log(returnSecondVal([10,20,30,40]));  // Method2



 




