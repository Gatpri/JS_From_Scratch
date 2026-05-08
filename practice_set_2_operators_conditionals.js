/*//write a program to find wether the given number is divisible by 2 and 3.

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter a number: ", (number)=>{
    console.log("The number you entered is:", number);
    if (number%2 ===0 && number%3 ===0) {
        console.log("The number is divisible by both 2 and 3.");
    }
    else if (number%2 ===0) {
        console.log("The number is divisible by 2 only.");
    }
    else if (number%3 ===0) {
        console.log("The number is divisible by 3 only.");
    }
    else {
        console.log("The number is not divisible by 2 or 3.");
    }       
    rl.close();
});*/




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Using Ternary Operator

const rl1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl1.question("Enter a number: ", (number) => {
    console.log("The number you entered is:", number);
    const result = (number % 2 === 0 && number % 3 === 0) ? "The number is divisible by both 2 and 3." :
                   (number % 2 === 0) ? "The number is divisible by 2 only." :
                   (number % 3 === 0) ? "The number is divisible by 3 only." :
                   "The number is not divisible by 2 or 3.";
    console.log(result);
    rl1.close();
});