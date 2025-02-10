// for of
// for of on arry
const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);  
}
// for off on string
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each word in greetings is: ${greet}`);  
}

//  for of on Maps

const map = new Map();
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India")     //  Map uses for unique values

console.log(map);   // Map(3) {
                              //'IN' => 'India',
                              //'USA' => 'United State of America',
                             // 'Fr' => 'France'
                            //}

for (const [key,value] of map) {
    console.log(key,':-' ,value);       // IN :- India
                                        //   USA :- United State of America
                                        //  Fr :- France   
}

// for of on object

const myObj = {
    'game1':'BGMI',
    'game2':'RC2'
}

for (const [key,value] of myObj) {
  //  console.log(key,':',value);    // TypeError: myObj is not iterable
    
}


