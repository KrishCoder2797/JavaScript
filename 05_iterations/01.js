// for loop

let arr = [1,2,3,4,5]

for (let i = 0; i < arr.length; i++) {
    const element = i;
    if(element==3){
        console.log("3 is best number");
        
    }
    console.log(element);
    
}

console.log("-------------------------------------");

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value : ${i}`);
    
    for (let j = 0; j <= 10 ; j++) {
        console.log(`Inner loop value : ${j} and inner loop value : ${i}`);
        
        
    }
    
}


let myArr = ["flash" , "batman", "superman"]
console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
      
}

// keywords  (break and continue)

for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log("Detected 5");
        break ;
        
    }
   console.log(`value of i is :${i}`)
}

for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue ;
        
    }
   console.log(`value of i is :${i}`)
}








