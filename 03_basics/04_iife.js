// Immediately Invoked Function Expressions (IIFE)

// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})() ;   // We have to use semicolon(;) to end the contex if we have to write multiple IIFE functions

// arrow function
(()=>{
    console.log("DB CONNECTED TWO");
    
})();

// arrow function with parameter
((name)=>{
    console.log(`My name is ${name}`);
    
})("Krish");

5.28
6.52
18.20
20.47
24.07