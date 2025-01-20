// Truthy or falsy value

let userEmail1 ="k@ushna.ai"    // This value assumes as a true value
let userEmail2 =""    // This value assumes as a false value

if(userEmail1){      // true  (String with value)
    console.log("Got user email");  
    
}else{
    console.log("Dont have user email");
    
}

if(userEmail2){    // false  (Empty String)
    console.log("Got user email");
    
}else{
    console.log("Dont have user email");
    
}

const arr = []    

if(arr){    // true   (Empty array consider as a true)
    console.log("Got user email");
    
}else{
    console.log("Dont have user email");
    
}

// It is having some rule for assumption of truthy and falsy value

// 1) falsy value
// false , 0 , -0 , BigInt 0n , "" , null , undefined, NaN

// 2) truthy value
// "0",'false'," ", [] , {} , function(){}

// Checking array is empty or not
if(arr.length===0){
    console.log("Array is empty");
}

// Checking Object is empty or not
const emptyObj = {}

if(Object.keys(emptyObj).length===0){
        console.log("Object is Empty");      
}

// Nullish Coalescing Operator (??) : null undefined  (Null safety)

let val1 ;
val1 = 5 ?? 10
val2 = null ?? 10 
val3 = undefined ?? 15
val4 = null ?? 10 ?? 15

console.log(val1);  //5
console.log(val2);  // 10
console.log(val3);  // 15
console.log(val4);  // 10

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("greater than 80");