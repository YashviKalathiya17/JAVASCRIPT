// Array Basic info  - Arrays are mutable
// Create an simple array

// let subjects=["Maths","Science","English","Social-Science","Hindi"];
// console.log(subjects);
// console.log(subjects.length);

// let marks

let marks = [67, 98, 73, 88, 52];
console.log(marks);
// console.log(marks.length);
// console.log(marks[3]);
// console.log(marks[6]); //undefined
marks[2] = 66;
console.log(marks);

//-------------------------looping over an array-----------------------------

let names = ["tv", "Mobile", "Laptop", "tablet", "airpod", "Modem"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}