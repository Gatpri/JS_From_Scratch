/* in this we are going to learn about operators and expressions in javascript */

// 1. Arithmetic Operators
let a = 10;
let b = 5;
console.log("Using addition operator:", a + b); // Output: 15
console.log("Using subtraction operator:", a - b); // Output: 5
console.log("Using multiplaction operator:", a * b); // Output: 50
console.log("Using division operator:", a / b); // Output: 2
console.log("Using modulus operator:", a % b); // Output: 0
console.log("Using exponentiation operator:", a ** b); // Output: 100000 i.e. 10**5 = 10*10*10*10*10*10 = 10^5 = 100000
console.log("Using increment operator:", a++); // Output: 10 (post-increment, returns the value before incrementing)
console.log("Value of a after post-increment:", a); // Output: 11
console.log("Using decrement operator:", b--); // Output: 5 (post-decrement, returns the value before decrementing)
console.log("Value of b after post-decrement:", b); // Output: 4
console.log("Using pre-increment operator:", ++a); // Output: 12 (pre-increment, increments the value before returning it)
console.log("Using pre-decrement operator:", --b); // Output: 3 (pre-decrement, decrements the value before returning it)
console.log("Value of a after pre-increment:", a); // Output: 12
console.log("Value of b after pre-decrement:", b); // Output: 3

// 2. Assignment Operators
let c= 10;
console.log("Value of operator c is:", c); // Output: 10

c+=5; //this is equivalent to c =c+5;
console.log("Value of operator c after addition is:", c); // Output: 15

c-=3; //this is equivalent to c = c-3
console.log("value of operator c after subtraction is:", c); // Output: 12

c*=2; //this is equivalent to c = c*2
console.log("Value of operator c after multiplication is:", c); // Output: 24

c/=4; //this is equivalent to c = c/4
console.log("Value of operator c after division is:", c); // Output: 6

c%=5; //this is equivalent to c = c%5
console.log("Value of operator c after modulus is:", c); // Output: 1

c**=3; //this is equivalent to c = c**3
console.log("Value of operator c after exponentiation is:", c); // Output: 1 i.e. 1**3 = 1*1*1 = 1



// 3. Comparison Operators

console.log("Using equality operator:", a == b); // Output: false
console.log("Using strict equality operator:", a === b); // Output: false [triple equal checks for both value and type, while double equal checks for value only]
console.log("Using inequality operator:", a != b); // Output: true
console.log("Using strict inequality operator:", a !== b); // Output: true
console.log("Using greater than operator:", a > b); // Output: true
console.log("Using less than operator:", a < b);    // Output: false
console.log("Using greater than or equal to operator:", a >= b); // Output: true
console.log("Using less than or equal to operator:", a <= b); // Output: false
console.log("Using ternary operator:", a > b ? "a is greater than b" : "a is not greater than b"); // Output: "a is greater than b"



// 4. Logical Operators
let x = true;
let y = false;
console.log("Using AND operator:", x && y); // Output: false
console.log("Using OR operator:", x || y); // Output: true
console.log("Using NOT operator:", !x); // Output: false 

// 5. Typeof Operator
console.log("The type of a is:", typeof a); // Output: number
console.log("The type of x is:", typeof x); // Output: boolean
console.log("The type of y is:", typeof y); // Output: boolean
console.log("The type of 'Hello' is:", typeof "Hello"); // Output: string
console.log("The type of null is:", typeof null);       // Output: object (this is a known quirk in JavaScript)