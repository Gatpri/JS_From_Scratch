let name ="SAugaT Bhai"
console.log(name.length);
console.log("Name in uppercase only",name.toUpperCase());
console.log("Name in lowercase only",name.toLowerCase());
console.log(name.slice(2,4));// prints ug because index starts from 0
console.log(name.slice(2)); // prints ugat because it starts from index 2 and goes till the end of the string
console.log(name.slice(0,3));   
console.log(name.replace("Bhai","Bhaiya")); // replaces Bhai with Bhaiya
console.log(name.replace("a","A"));// replaces only the first occurrence of a with A
console.log(name.replaceAll("a","A")); // replaces all the occurrences of a with A
let friend = "Abhaya";
console.log(name.concat(" is a friend of ", friend)); // concatenates name with the string "is a friend of" and then with the variable friend
console.log(`${name} is a friend of ${friend}`);
console.log(name + " is a friend of " + friend);
//\n is used to print in the next line
// \t is used to print in the next tab
// \ is used to escape the next character
// \r is used to return the cursor to the beginning of the line

//example
console.log("Hello\nWorld");
console.log("Hello\tWorld");
console.log("Hello\World");
console.log("Hello\rWorld"); // prints World because \r returns the cursor to the beginning of the line and then prints World over Hello    

let friend2="        Manish        ";
console.log(friend2);
console.log(friend2.trim()); // removes the whitespace from the beginning and end of the string
console.log(friend2.trimStart()); // removes the whitespace from the beginning of the string
console.log(friend2.trimEnd()); // removes the whitespace from the end of the string    





const sentence = "The quick brown fox jumps over the lazy dog";
const word1 = "fox";
const word2 = "fox1";
console.log(sentence.includes(word1));
console.log(sentence.includes(word2));
console.log(`The sentence is "${sentence}"`)
console.log(`The word "${word1}" ${sentence.includes(word1) ? 'is' : 'is not'} in the sentence`);
console.log(`The word "${word2}" ${sentence.includes(word2) ? 'is' : 'is not'} in the sentence`);


//Using Startwith and endwith method
let text= "JavaScript is awesome";
// startsWith examples
console.log(text.startsWith("Java"));      // true
console.log(text.startsWith("java"));      // false (case-sensitive)
console.log(text.startsWith("Script", 4)); // true (starts at index 4)

// endsWith examples
console.log(text.endsWith("awesome"));     // true
console.log(text.endsWith("Awesome"));     // false (case-sensitive)
console.log(text.endsWith("JavaScript", 10)); // true (checks first 10 characters)


//PRoblem solution
console.log("Extract the amount out of this string "PLease give RS 1000"");
let str2 ="please give RS 1000";
let amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount);