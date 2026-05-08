//Write a program to print marks of a student in 5 subjects using for loop.

//marks= {harry: 98, rohan: 70, aakash: 90, shivam: 80, ankit: 85}

let marks= {
    harry: 98,
     rohan: 70,
      aakash: 90,
       shivam: 80,
        ankit: 85
    };

/*for(let i=0; i<Object.keys(marks).length; i++){
    console.log("Marks of", Object.keys(marks)[i], "is", marks[Object.keys(marks)[i]]);
};

/*
// Step 1: Create object
let marks = {
    harry: 98,
    rohan: 70,
    aakash: 90,
    shivam: 80,
    ankit: 85
};

// Step 2: Convert object keys into array
let keys = Object.keys(marks);
// ["harry", "rohan", "aakash", "shivam", "ankit"]

// Step 3: Get total number of keys
let length = keys.length; // 5

// Step 4: Loop through array
for (let i = 0; i < length; i++) {

    // Step 5: Get name using index
    let name = keys[i];

    // Step 6: Get marks using name
    let score = marks[name];

    // Step 7: Print result
    console.log("Marks of " + name + " is " + score);
}*/






/// For in loops with 
for(let i in marks){
    console.log("Marks of", i, "is", marks[i]);
};




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
//Write the program to print "try again" until the user enters the correct number.


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let cn = 43;

function askGuess() {
    rl.question("Guess the number: ", (number) => {
        let guess = Number.parseInt(number);

        if (guess !== cn) {
            console.log("Try again");
            askGuess(); // 🔁 ask again
        } else {
            console.log("🎉 Congratulations! You guessed correctly");
            rl.close();
        }
    });
}

askGuess();
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Write a funstion to find mean of 5 numbers


const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
//console.log(mean(1,2,3,4,5));

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter 5 numbers separated by space: ", (input) => {
    let numbers = input.split(" ").map(Number);
    console.log("Mean:", mean(...numbers));
    rl.close();
});
