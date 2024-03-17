let score = "33abc"

console.log( typeof score);
console.log( typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber);

//"33" is easily converted to a number
//"33abc" is also converted even though it is not a number, but has a value of NaN
//boolean are 1 and 0

//let isLoggedIn = "devanshu";
 //let booleanIsLoggedIn = Boolean(isLoggedIn)   // conversion of dataTypes
//  console.log(booleanIsLoggedIn);

 // 1=> true
 // ""=> false
 // "Devanshu" => true and so on
  let someBoolean = true;
   
   let someNumber = Number(someBoolean);
   console.log( typeof someNumber);
