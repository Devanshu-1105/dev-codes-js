//loops/iterations

//for  i is declared in the condition of the loop and all the values are stored in that variable
// for (let i = 0; i <=10; i++) {
//    const element = i;
//    if (i===5) {
//     console.log("5 is the best number");
    
//    }
//     console.log(i);
// }
//nested loops
for(let i=0; i<=10; i++) {
    console.log(`Outer Loop value:`)
    for (let j =0; j<=10; j++){
        console.log(`inner Loop value:`)
    }
}

// for (let i = 0; i <=10; i++) {
//     const element = array[i];
    
// }
 // while loop

//  let index =0
//  while (index<=10) {
//     console.log(`value of the index is ${index}`);
//       index = index+1
    
//  }

//  let myArray = ["flash","batman","superman"]
//  let arr = 0
//  while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr++
    
//  }


 // do while loop
 // in do while loop the work is done before the condition is checked

//  let score = 0
//  do {
//     console.log(`The score is ${score}`)
//      score++
//  } while (score<=10);


//for of 

let array = [1,2,3,4,5,6]      //the iterator is just a variable that can be named anything, and the next condition is the array that we want to loop on.
for (const iterator of array) {
    //console.log(`the value is ${iterator}`);
    
}
const map = new Map ()  //maps are unitrateable.
map.set('IN' ,"India")
map.set('USA' ,"United States of America")
map.set('Fr' ,"France")


//console.log(map);
for (const [key, value] of map) {        //aray destructuring
    console.log(key,":" ,value);
    
}
