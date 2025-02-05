// for of and for in loop 
✅ Use for...of for iterating over characters in a string.
✅ Use for...in when you need indexes, but access characters using greetings[index].
✅ Check greet === " " to detect spaces correctly.

The for of loops will iterate string and will print each characters in a string, 
const greetings = "Hello word!";
for (const greet of greetings) {  // ✅ 'greet' now represents characters
  if (greet === " ") {  // ✅ Correctly checks if the character is a space
    console.log(`Space is detected`);
    break;
  }
  console.log(`Each char is ${greet}`);
}

// For in loop will ierate or the indexes, and it will print the indexes of the string have to specify the 'variable[index]' if you want to print each characters in a string


