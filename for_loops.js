console.log("Using for loops in JavaScript:");

// 1. Basic for loop 
for (let i = 0; i < 5; i++) {
    console.log("Iteration number:", i);
}   
// 2. For loop with an array
const fruits = ["apple", "banana", "cherry"];   
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}
// 3. For loop with an object
const person = {
    name: "Saugat", 
    age: 25,
    city: "Kathmandu"
};  
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// 4. For loop with a string
const message = "Hello, World!";
for (let i = 0; i < message.length; i++) {
    console.log(`Character at index ${i}:`, message[i]);
}
// 5. Nested for loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`Outer loop iteration ${i}, Inner loop iteration ${j}`);
    }
}

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the rest of the loop when i is 2
    }
    console.log("Iteration number:", i);
}       
