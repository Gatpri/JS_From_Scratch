//In this we are going to learn about methods in array
/*
let num = [1, 2, 3, 34, 4];
let b= num.toString();//b is now string
console.log(b, typeof b)
let c= num.join("and");
let d=num.join("-");
console.log(c, typeof c);
console.log(d,typeof d);
num.pop();//pops out the 4 from num array
console.log(num);
//returning the poped element
let r=num.pop();
console.log(num,r);// return 34 because 4 is already poped outand in this 34 is poped element which should be poped out

//pushing the new element in array at the end automatically
let pus=num.push(1000);
console.log(num,pus);


//shift remove and returns the first element as opposite of pop
let shf=num.shift();
console.log(num,shf);

//unshift addadds element to the beginning and returns new array length
let unshf=num.unshift(5000);
console.log(num,unshf);

*/



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.length);
console.log(num);


console.log("using delete operator in array");
delete num[3];
console.log(num);
console.log(num.length);




//using concat
let num1=[1, 2, 3, 4, 5, 6, 7, 8, 9];
let num2=[11, 21, 31, 41, 51, 61, 71, 81, 91];
let newArray = num1.concat(num1,num2);
console.log("this is a new array",newArray);
console.log(num1,num2);


// using sort method which modifies the array
let compare = (a,b)=>{
    return(b-a);
}
let array=[7,8,9];
array.sort(compare);
console.log(array);




//use of splice
let numm= [551, 22, 3, 14, 5, 6, 7, 8, 229];
numm.splice(2,4,6,1000,2000,3000,4000);//where 2,4 or first two element represent the index position of the array to be removed
console.log(numm);




//use of slice which creates a new array

let nummm=[2,3,5,6,7,7,8,10];
//only it creates new array without changing previous one with the help of previous one
let newNum = nummm.slice(3,8);
console.log(newNum);



 