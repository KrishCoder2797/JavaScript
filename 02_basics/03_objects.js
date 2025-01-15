
// Singleton  Object.create (method)

const JsUser = {
    name:"Krish",
    age: 22,
    location:"Nashik",
    email: "Krishgajare@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday" ,"Saturday"],
    "full name" :"Gajare Krushna Shivaji"
}
console.log(JsUser);    // Prints whole objects
console.log(JsUser.name);
console.log(JsUser["name"]);  // Both ways are correct
console.log(JsUser.age);
console.log(JsUser["age"]);  // Both ways are correct (Prefer this way) 
console.log(JsUser["full name"]);   // Only way to access this term


// How to Symbol in Object

const SymOne = Symbol("key1");

const JsUser1 = {
    name:"Krish",
    age: 22,
    location:"Nashik",
    email: "Krishgajare@gmail.com",
    SymOne :"Symbol1",    // This is normal term
    [SymOne] : "Symbol2"  // This is Symbol
    
}
console.log(JsUser1);
console.log(JsUser1.SymOne);    //Symbol1
console.log(typeof JsUser1.SymOne);  // string
console.log(JsUser1[SymOne]);    // Way of accessing symbol

 // Changing value of object

JsUser1.name = "Krish Gajare"   
console.log(JsUser1["name"]);  // Krish Gajare

//Object.freeze(JsUser1);   // After using this method we cannot change in object , Object gets Freeze
JsUser1.name = "Gajare Krushna"
console.log(JsUser1["name"]);  // Krish Gajare

// Adding methods in Object
JsUser1.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser1.greeting();

// String Interpolation 
JsUser1.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
    
}
JsUser1.greetingTwo();







