/* In this we are going to learn about while loops in javascript. A while loop is a control flow statement that allows code to be executed repeatedly based on a given condition. The syntax of a while loop is as follows:*/

const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
console.log(mean(1,2,3,4,5));
/*while (condition) {
    // code to be executed
}*/

/*******************************************************/
/*
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (number) => {


    console.log("The number you entered is:", number);
    let i = 0;
    while (i < number) {
        console.log("Iteration number:", i);
        i++;
    }
    rl.close();   
});
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Now using do while loop
/*
const rl2 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl2.question("Enter a number: ", (number) => {
    console.log("The number you entered is:", number);
    let i = 0;  
    do {
        console.log("Iteration number:", i);
        i++;
    } while (i < number);
    rl2.close();
});

*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Write a funstion to find mean of 5 numbers


const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
console.log(mean(1,2,3,4,5));
