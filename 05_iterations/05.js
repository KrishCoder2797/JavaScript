// for each loop

const coding = ["js" , "ruby","java","python","cpp"]

coding.forEach( function(item){  // callback function

    console.log(item);
    
} )

// arrow function

coding.forEach((val)=>{
    console.log(`coding :${val}`);
    
})


// passing function 

function printMe(val1){
    console.log(val1);
    
}
coding.forEach(printMe)

// for has access of item, index and whole array

coding.forEach((item,index,arr)=>{

    console.log(item,index,arr);
    
})

const myCoding =[
{
    languageName:"javascript",
    languageFileName:"js"
},
{
    languageName:"python",
    languageFileName:"py"
},
{
    languageName:"java",
    languageFileName:"java"
},

]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
    console.log("-----------");
    
    
    
})