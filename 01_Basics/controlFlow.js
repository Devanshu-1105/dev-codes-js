//Control flow

//< , > <=, <=, ==, != , ===

//if
// if(2!=25) {
//     console.log("EXECUTED");

// }

// const temp = 23;
 
// if(temp >=30) {
//     console.log(`its  hot!`);
// }else{
//     console.log(`not too hot`);
// }



// const score = 50;

// if(score >100) {
//     let power= "fly"
//     console.log(`UserPower:${power}`);
// }else {
//     console.log(`User is a normie`);
// }

// nesting

// const balance = 700

// if(balance < 500) {
//     console.log("balance is less than 500");
// }else if(balance<700) {
//     console.log("balance is less than 700");
// }else if(balance<750) {
//     console.log("balance is less than 750");
// }else if(balance<900) {
//     console.log("balance is less than 900");
// }else {
//     console.log("balance is less than 1200");
// }

//Multiple conditions

const userLoggedIn = true;
const debitCard = true;
 const loggedInFromGoogle = true;
 const loggedInFromEmail = false;


 if(userLoggedIn && debitCard && loggedInFromEmail || loggedInFromGoogle) {

 console.log(`logged in`);
}
