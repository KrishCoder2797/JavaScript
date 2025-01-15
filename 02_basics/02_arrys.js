const marvel_heros = ["thor", "Ironman","Spiderman"]
const dc_hero =["Superman","Flash","Batman"]

//marvel_heros.push(dc_hero)    Works on existing array
//console.log(marvel_heros); // [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
//console.log(marvel_heros[3][0]);  // Superman

//const all_heros = marvel_heros.concat(dc_hero)  // returns new array
//console.log(all_heros);

const all_new_heros =[...marvel_heros,...dc_hero]     // Spread Operator
console.log(all_new_heros);
 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]   
// O/p = [
//  1, 2, 3, 4, 5,
//  6, 7, 6, 7, 4,
//  5
// ]

real_another_array = another_array.flat(Infinity)
console.log(real_another_array);   // converts nested array into single array

console.log(Array.isArray("Krish"));     // For checking if it is array or not
console.log(Array.from("Krish"));     // to convert into array   [ 'K', 'r', 'i', 's', 'h' ]
console.log(Array.from({name: "krish"}));   // []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));  // [ 100, 200, 300 ]
