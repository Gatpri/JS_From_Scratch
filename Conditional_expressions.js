/* In this file, we will explore conditional expresssions in javascript. Conditional expressions allow us to make decisions in our code based on certain conditions. We will use the if else statement to demonstrate how conditional expressions work in java script.*/

console.log("TUTORIAL 6: CONDITIONAL EXPRESSIONS");
let age = 18;

if (age >=18) {
    console.log("You are an adult.");
}
else{
    console.log("You are a minor.");
}



const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (age) => {
    console.log("YOU ARE ", age,"YEARS OLD");
    if (age >=18) {
        console.log("You are an adult.");
    }
    else {
        console.log("You are a minor.");
    }
    rl.close();
});




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




const rl2 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout  
});

rl2.question("Enter you actual age:", (actualAge) => {
    console.log("Your actual age is:", actualAge);
    if (actualAge <18) {
        console.log("you are minor so cant drive");
    }
    else if(actualAge >=18 && actualAge<60){
    console.log("nice your age is acceptable for driving")
    }
    else{
        console.log("you are too old to drive");
    }
    rl2.close();
})




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("Using switch statements");

const rl3 =require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl3.question("Enter a day of the week:", (day) => {
    console.log("You entered:", day);
switch(day.toLowerCase()) {
    case "monday":
        console.log("Today is Monday.");
        break;
    case "tuesday":
        console.log("Today is Tuesday.");
        break;
    case "wednesday":
        console.log("Today is Wednesday.");
        break;
    case "thursday":
        console.log("Today is Thursday.");
        break;
    case "friday":
        console.log("Today is Friday.");
        break;
    case "saturday":
        console.log("Today is Saturday.");
        break;
    case "sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day entered.");
}
rl3.close();
});
