// if

const isUserloggedIn = true
const temp = 60 ;

if(temp <50){
    console.log("less than 50");
    
}else{
console.log("greater than 50");
}


// < , > , <= , >= , == , != , ===(strict), !==

if(2 =="2"){
    console.log("executed");
    
}

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
    
}
//console.log(`User power: ${power}`);  // ReferenceError: power is not defined

// Shorthand Notation

const balance = 1000
if(balance>500) console.log("test1");   

// if we want to write multiple lines then use below code

if(balance>500) console.log("test2"),
console.log("test3");

// if else-if else
if(balance < 500){
    console.log("less than 500");   
}else if(balance <750){
    console.log("less than 750"); 
}else if(balance < 900){
    console.log("less than 900");
    
}else{
    console.log("less than 1000");
    
}

// 
const isUserloggedIn1 = true 
const debitCard = true
const loggedInFromGoogle = false ;
const logedInFromEmail = true ;

if(isUserloggedIn1 && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || logedInFromEmail){
    console.log("User Logged In");  
}


