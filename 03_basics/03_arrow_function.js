// this keyword

const user = {
    username:"Krish",
    price:999,

    welcomeMsg:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
user.welcomeMsg()  // Krish , welcome to website
user.username ="Sam" ;
user.welcomeMsg()  // Sam , welcome to website
console.log(this);

//
function chai(){
    let username = "krish"
    console.log(this.username);  // undefined
    
}
chai();

// Arrow Function

const chai1 = ()=>{
    let username = " krish"
    console.log(this.username);
}
chai1()

// Method 1
const addTwo = (num1, num2) =>{
    return num1 + num2 
}
console.log(addTwo(3,4));   

// Method 2
const addThree = (num1 , num2, num3 ) =>  num1+num2+num3
console.log(addThree(3,5,7))

// Method 3 (If we use {} then we have to write return keyword and if we write () then we dont need to write return keyword)
const addThree1 = (num1 , num2, num3 ) =>  (num1+num2+num3)
console.log(addThree1(3,5,7))

// Method 4 (Returning Object)
const retObject = () =>  ({username:"Krish"})
console.log(retObject())

