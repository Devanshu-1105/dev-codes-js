//falsy values

//Caviate points

// false , 0 ,-0, BigInt 0n, "" , null, undefined,  NaN

//truthy values

// "0" , 'false' , " ", [], {}, function(){}

// const emptyObj = {                                                         

// }

// if(Object.keys(emptyObj).length===0) {
//     console.log("object empty");
// }


//  // we can similarly detect if the arry is empty or not 
// const emptyArr = [];

// if(emptyArr.length===0) {
//     console.log("Array is empty");
// }

//Nullish  coalescing operator is a fallback operator  is a safety for null and undefined value

//  let val1;
// //val1 = 5 ?? 10;
// val1 = null ?? 10
// console.log(val1);  



//Terniary operator
 const iceTeaPrice = 110;
 iceTeaPrice <= 100 ? console.log("less than 100"): console.log("more than 100")
