const accountId = 144553
let accountEmail = "krish@google.com"
var accountPassword = "12345"
accountCity = "Nashik"

let accountState ;

//accountId = 2   // not allowed


accountEmail = "Gajare@google.com"
accountPassword = "11111"
accountCity ="Niphad"


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
beacause of issue in block scope and functional scope
*/

