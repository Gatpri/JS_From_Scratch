//1. create a variable of type string andtry to add a number to it and see the result
 let a="saugat";
 let b=10;
 console.log(a+b);
/* In the above code, we declared a variable 'a' of type string and assigned it the value "saugat". We also declared a variable 'b' of type number and assigned it the value 10. When we tried to add 'a' and 'b', JavaScript performed type coercion and converted the number 10 to a string, resulting in the concatenation of "saugat" and "10", which outputs "saugat10". This demonstrates how JavaScript handles operations between different data types.*/   



//2. Use type of operator to find the datatype of the string in the last question

console.log("The type of a and b is:", typeof a, "and", typeof b);


//3. Create a const object in java script and can you change it to hold a number later?

const myobject = {
    name: "Saugat",
    age: 25,
    isStudent: true
};
console.log("The myobject is:", myobject);

/* NO WE CANT CHANGE THE CONST OBJECT TO A NUMBER LATER
{myobject = 10; // This will result in a TypeError because 'myobject' is declared as a constant and cannot be reassigned to hold a number.}*/



//4. Try to add  a new key to the const object in problem 3 were you able to to do it?

/* Yes, we can add a new key to the const object because while we cannot reassign the entire object, we can modify its properties. Here's how you can do it:*/

myobject.address = "kathmandu";
console.log("The updated myobject is:", myobject);
console.log("The type of myobject is:", typeof myobject);
console.log("adressof my object is;", myobject.address);


//5. write a js  program to create a word meaning dictionary of 5 Words
const wordMeaningDictionary = {
    "serendipity": "the occurrence and development of events by chance in a happy or beneficial way.",
    "ephemeral": "lasting for a very short time.",
    "quintessential": "representing the most perfect or typical example of a quality or class.",
    "melancholy": "a feeling of pensive sadness, typically with no obvious cause.",
    "resilience": "the capacity to recover quickly from difficulties; toughness."
};
console.log("The word meaning dictionary is:", wordMeaningDictionary);
console.log("The meaninf if ephemeral is:", wordMeaningDictionary.ephemeral);

