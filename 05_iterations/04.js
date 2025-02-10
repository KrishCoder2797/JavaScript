// for in loop

const myObj = {
    js:'javascript',
    cpp:'c++',
    rb:"Ruby",
    swift:"swift by app"
}

for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`);
   
} 

const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
    //console.log(key);
    //console.log(programming[key]); 
    console.log(key ,":",programming[key]);
       
}

 

