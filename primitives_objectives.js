/* there are 7 types of primitive data types in JavaScript:
1. String: Represents a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). Example: "Hello, World!"
2. Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14  */



/* They are:
Null: Represents the intentional absence of any object value. It is a primitive value that represents "no value" or "empty value". Example: null
Undefined: Represents a variable that has been declared but has not been assigned a value. It is a primitive value that indicates the absence of a value. Example: undefined    
Boolean: Represents a logical entity that can have two values: true or false. It is used for conditional statements and logical operations. Example: true, false
Symbol: Represents a unique and immutable value that can be used as an identifier for object properties. It is often used to create private properties in objects. Example: Symbol('description')
BigInt: Represents integers that are too large to be represented by the Number type. It is used for working with large integers. Example: 9007199254740991n
Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14
String: Represents a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). Example: "Hello, World!"



/* In JavaScript, primitive data types are immutable, meaning that their values cannot be changed after they are created. When you perform operations on primitive values, a new value is created rather than modifying the original value. This is an important characteristic of primitive data types in JavaScript.*/




let a=null;
let b=undefined;
let c=true;//can also be false
let d=Symbol("I am a nice symbol");
let e=BigInt("9007199254740991"); // BigInt literals can also be written with an 'n' at the end, like 9007199254740991n.
let f=42;   
let g="Hello, World!";

console.log("The value of a is:", a);
console.log("The value of b is:", b);
console.log("The value of c is:",c);
//symbol cannot be converted to string by +d, so we use ,d only or console.log(The value of d is: +d.tostring())
console.log("The value of d is:", d);
console.log("The value of e is:", e);
console.log("The value of f is:", f);
console.log("The value of g is:", g);


console.log("The type of a is:", typeof a);
console.log("The type of b is:", typeof b);
console.log("The type of c is:", typeof c);
console.log("The type of d is:", typeof d);
console.log("The type of e is:", typeof e);
console.log("The type of f is:", typeof f);
console.log("The type of g is:", typeof g); 


/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*objects in javascripts*/

const person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log("The person object is:", person);
console.log("The type of person is:", typeof person);

/* In the above code, we created an object called 'person' with three properties: 'name', 'age', and 'isStudent'. We then printed the object and its type to the console. The output will show the contents of the 'person' object and indicate that its type is 'object'.*/
console.log("The name of the person is:",person.name);
console.log("The age of the person is:", person.age);
console.log("Is the person a student?", person.isStudent);
/* In the above code, we accessed the properties of the 'person' object using dot notation and printed their values to the console. The output will show the name, age, and student status of the person.*/




//OR

/* We can also access the properties of an object using bracket notation, which allows us to use variables or special characters in property names.*/

console.log("The name of the person is:", person["name"]);
console.log("The age of the person is:", person["age"]);
console.log("Is the person a student?", person["isStudent"]);
/* In the above code, we accessed the properties of the 'person' object using bracket notation and printed their values to the console. The output will be the same as when we used dot notation, showing the name, age, and student status of the person.*/    