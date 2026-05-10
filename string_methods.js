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
