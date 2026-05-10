let marks_class_12 = [91, 95, 86 ,66, null, false, "Not Present"];
console.log(marks_class_12);
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log("Length of marks_length_12 is",marks_class_12.length);

//Adding value on 8th index
marks_class_12[7]=100;
console.log(marks_class_12[6]);
console.log("Length of marks_length_12 is",marks_class_12.length);
 marks_class_12[1]=50;//replaces with the index 1 previous value 
 console.log(marks_class_12);


 console.log("Using For Loop to prin value on array i.e. marks_class_12");
 for(let i=0; i<marks_class_12.length; i++){
    console.log(`${i}=${marks_class_12[i]}`);
 };

