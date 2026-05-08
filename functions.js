function onePlusAvg(x,y){
    return 1+(x+y)/2
}

let a=1;
let b=2;
let c=3;
/*
console.log("One plus average of a and b is", 1+(a+b)/2);
console.log("One plus average of b and c is", 1 +(b+c)/2);
console.log("One plus average of a and c is is", 1 +(b+c)/2);
*/
console.log("One plus average of a and b is", onePlusAvg(a,b));
console.log("One plus average of b and c is", onePlusAvg(b,c));
console.log("One plus average of a and c is", onePlusAvg(a,c));




const sum = (p,q)=>{
    return p+q;
};

console.log(sum(16,4));


const hello=()=>{
    console.log("hey i had made the function for the practice section ");
}

hello();


const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
console.log(mean(1,2,3,4,5));