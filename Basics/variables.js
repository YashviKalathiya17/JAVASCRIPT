// variable Declaration in JS

// let ,var ,const are used to declare variables in JavaScript

// let - block scoped variable
let fullname = "chalu pandey";
let year = 28;
let isMarried = false;

console.log(fullname);
console.log(year);
console.log(isMarried);

// var - function scoped variable
var city = "Delhi";
var city = "Mumbai"; // redeclaring var variable is allowed
console.log(city);

// const - block scoped constant variable
const age = 28;
// const age=23;
console.log(age); //It shows an error because const variable cannot be redeclared
// Mostly used for constants that should not change like PI, gravity etc.


// let can be updated which means we can declare a variable with let and then change its value later
let a;
a = 10;
console.log(a); // 10
// but in Const we cannot change the value once it is assigned
// const b;
// // b=20;
// console.log(b); //It shows an error;


//Data Types in JavaScript

// primitive Data Types

// 1. Number

let num=10;
console.log(num); // 10
console.log(typeof num); // "number"

// 2. String
let str="hello";
console.log(str); // "hello"
console.log(typeof str); // "string"

// 3. Boolean
let isTrue = true;
console.log(isTrue); // true
console.log(typeof isTrue); // "boolean"    

// 4. Undefined
let x;
console.log(x); // undefined
console.log(typeof x);

// 5. Null
let y = null;
console.log(y); // null
console.log(typeof y); // "object" (this is a known quirk in JavaScript)

//Non-primitive Data Types

// 6. Objects(Collection of values)
let student={
    name:"john",
    age:20,
    address:"vapi",
};

student.age=student.age+1; // updating the age property
console.log(student); 
console.log(student.name);
console.log(student["age"]);



