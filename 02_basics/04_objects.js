// Object Declaration
// 1)
const tinderUser1 = new Object();
// 2)
const tinderUser2 = {} ;

console.log(tinderUser1);  // {}
console.log(tinderUser2);  // {}

tinderUser1.name = "krish"
tinderUser1.age = 21
tinderUser1.isLoggedIn = false

console.log(tinderUser1);

// Nested Object 

const regularUser ={
    email:"krishgajare.google.com",
    fullname:{
        userfullname:{
            firstname: "krish",
            lastname:"gajare"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// Combining of Objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// 1)
const obj3 = {obj1 , obj2}
console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// 2)
const obj4 = Object.assign(obj1,obj2)  // Here this obj1 act as target and obj2 act as source so all the elements of obj2 is store in obj1 thats why we have to use {} as a target
// const obj4 = Object.assign(target, source)
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// 3)
const obj5 = Object.assign({} , obj1, obj2)
console.log(obj5);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// if we print obj1 here then only elemets of obj1 will appear


// 4) 
const obj6 = {...obj1 , ...obj2}   // Spread Operator
console.log(obj6);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// array of objects

const users = [
    {
        id : 1,
        email:"kr@gmail.com"
    },
    {
        id : 1,
        email:"kr@gmail.com"
    },
    {
        id : 1,
        email:"kr@gmail.com"
    },
]
console.log(users[1].email);   // kr@gmail.com

console.log(tinderUser1);
console.log(Object.keys(tinderUser1));  // [ 'name', 'age', 'isLoggedIn' ]   return type array
console.log(Object.values(tinderUser1)); // [ 'krish', 21, false ]   return type array
console.log(Object.entries(tinderUser1)); // [ [ 'name', 'krish' ], [ 'age', 21 ], [ 'isLoggedIn', false ] ]  return type nested array
console.log(tinderUser1.hasOwnProperty('name'));









