const name = "Devanshu";
const repoCount = '1';

// console.log(`Hello my name is ${name},and my github repo count is ${repoCount}.`); //String interpolation modern method

// console.log(name[0]);
// console.log(name.__proto__);
// console.log(name.charAt(2));     //returns the position of the character
// console.log(name.indexOf("s"));  //returns the index of the character

// const newString = name.substring(0 ,4);    //slices the string into a smaller substring
// console.log(newString);

// const anotherString = name.slice (-4 ,8);    //slices the string into a smaller string and can have negative values 
// console.log(anotherString);


// const String = "    Devanshu    "  // trims the extra space from the string
// console.log(String.trim())

const url = "https://Devanshu.com/Garad%20Dev"; //replaces the errors
console.log(url.replace("%20" ,"-"));
 console.log(url.includes("sundar"));   //checks if the value is present in the string or not 

