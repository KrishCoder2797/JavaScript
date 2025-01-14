let myDate = new Date()
console.log(typeof myDate);   // object

console.log(myDate)  // 2025-01-14T05:17:55.286Z
console.log(myDate.toString());  // Tue Jan 14 2025 10:47:55 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  // Tue Jan 14 2025
console.log(myDate.toLocaleDateString());  // 14/1/2025

// For declaring specific date
// 1)
let myCreatedDate = new Date(2025, 0 , 15)     // months start from 0 i.e .  0 == Jan , 1 == Feb
console.log(myCreatedDate.toDateString());    // Wed Jan 15 2025

// 2)
let myCreatedDate2 = new Date(2025 , 0 , 15, 10 ,54)   // we can also specify time
console.log(myCreatedDate2.toLocaleString());  // 15/1/2025, 10:54:00 am

// 3)
let myCreatedDate3 = new Date("2025-01-14")   // YY-MM-DD
let myCreatedDate4 = new Date("01-14-2025")   // MM-DD-YY
console.log(myCreatedDate3.toLocaleString());  // 14/1/2025, 5:30:00 am
console.log(myCreatedDate4.toLocaleString());  // 14/1/2025, 12.00:00 am

// 4)

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));
console.log(myCreatedDate3.getTime());

// 5) 
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getTime());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})





