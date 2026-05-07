console.log("TUTORIAL 3: CONST, LET, VAR");
/* In JavaScript, we can declare variables using three keywords: var, let, and const. Each of these has different characteristics and use cases.*/

// 1. VAR
/* The 'var' keyword is function-scoped and can be re-declared and updated. However, it can lead to issues such as hoisting and unintended consequences in larger codebases.*/
var x = 10;
var x= "saugat";
console.log(x);
/* In the above code, we declared a variable 'x' using 'var' and assigned it the value of 10. We then re-declared 'x' and assigned it the value of 'saugat'. Finally, we printed the value of 'x', which will output 'saugat'*/
let y=10000000;
{
    let y="hello"
    console.log(y);
}
console.log(y);
/* In the above code, we declared a variable 'y' using 'let' and assigned it the value of 10000000. We then created a block scope and declared another variable 'y' with the value of 'hello'. When we printed 'y' inside the block, it outputted 'hello', but when we printed 'y' outside the block, it outputted 10000000. This demonstrates that 'let' is block-scoped.*/    
   
var x=null;
console.log(x);
/* In the above code, we assigned the value of null to the variable 'x' and printed it, which will output 'null'.*/













/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const z= "constant value";
console.log(z);
/* In the above code, we declared a variable 'z' using 'const' and assigned it the value of "constant value". We then printed the value of 'z', which will output "constant value".*/




/*[Note: 'const' variables must be initialized at the time of declaration and cannot be reassigned later. They are also block-scoped, similar to 'let'.]*/



/*z= "new value";
console.log(z);
/* In the above code, we attempted to reassign the value of 'z' to "new value". However, since 'z' was declared using 'const', this will result in a TypeError, [as 'const' variables cannot be reassigned.]*/


const PI = 3.14;
console.log(PI);
/* In the above code, we declared a constant 'PI' and assigned it the value of 3.14. We then printed the value of 'PI', which will output 3.14. This is a common use case for 'const', where we want to define a constant value that should not be changed throughout the program.*/