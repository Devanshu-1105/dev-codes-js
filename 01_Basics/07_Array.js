const myArr =[ 1,2,3,4,5];
console.log(myArr[2]); //accessing the array by the index

myArr.pop();
myArr.push();

myArr.shift();   // shifts from the start.
myArr.unshift(3); // shifts the number to the start.
 
 console.log(myArr.includes(8));  //checks the availabbility of a value.
 console.log(myArr.indexOf());      // checks the index of the value.

const newArr = myArr.join()     //binds the new array and converts its type to a string.

console.log(typeof newArr);
console.log(newArr);
 
 slice, splice

 

 console.log("A" , myArr);            

 const myn1 = myArr.slice(1,3);       //does not manupilate the original arry
 console.log(myn1);
 console.log("B" , myArr);
 const myn2 = myArr.splice (1 ,3);       //manupilates the original Arry
 console.log(myn2);
console.log("c" , myArr);


const marvel_heros = ["IronMan" ,"Spiderman", "Silversurfer"];
const dc_heros = ["Batman" ,"superman", "flash"];

 const allHeros= marvel_heros.concat(dc_heros);
console.log(allHeros);


//Spread operator
const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);

//flat 
const another_arry = [1,2,3,4, [5,6,7],[7,8,9]]     //return a new arry with all the subarrys concatenated

const real_arry = another_arry.flat(4);
console.log(real_arry);



console.log(Array.isArray("Devanshu"));  // checks if it is an arry
console.log(Array.from("Devanshu"));    // converts the any object to an arry


//read more about isArray ,from of