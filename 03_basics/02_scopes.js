var c = 3000
let a = 1000

if(true){
    let a = 10
    const b = 20
     c = 30
    console.log("Inner :" , a);
     
    

}
//console.log(a);  // ReferenceError: a is not defined
//console.log(b);  // ReferenceError: b is not defined
console.log(c);
console.log(a);

// If we run program in console and using node in VS code then both's code's scope is different.

// Nested Scopes
function one(){
    const username = "Krish"

    function two(){
        const website = "Youtube"
        console.log(username);

        
    }
    //console.log(website);
    two();
}
one();

//
if(true){
    const username = "Krish"
    if(username === "Krish"){
        const website = " youtube"
        console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);

// +++++++++++++++++++++++=Interesting=+++++++++++++++++++++++

// If we write this type of function then we can give call before function body
console.log(addOne(5));

function addOne(num){
    return num + 1 ;
}


addTwo(5)    // ReferenceError: Cannot access 'addTwo' before initialization
const  addTwo = function(num){
    return num + 2 ;
}








