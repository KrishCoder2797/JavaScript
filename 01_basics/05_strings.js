// Declarations
// 1)
const name = "Krish "
console.log(typeof name);  // string

// 2) 

const gameName = new String("kri-sh")

console.log(typeof gameName)  // object
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-6 , 2)
console.log(anotherString);

const newStringOne = "     krish    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://krushna%20gajare"
console.log(url.replace('%20','-'));

console.log(url.includes('krushna'))
console.log(url.includes('krish'))

console.log(gameName.split('-'));
console.log(gameName.split(""));





const repoCount = 50

//console.log(name + repoCount + " Gajare");

//String interpolation
console.log(`My name is ${name} and my RepoCount is ${repoCount}`)


