// string methods

//1. string uppercase() method

let str = "hello world!!";
console.log(str.toUpperCase());

//2. string lowercase() method
let str2 = "hello world!!!";
console.log(str2.toLowerCase());

//3.string trim() method
let str3 = "     hello world!!!  0     ";
console.log(str3.trim());

//4 .string slice() method
let str4 = "Hello";
console.log(str4.slice(1, 4));

//5 .string concat() method
let str5 = "Hello ";
let str6 = "World!!!";

// let result = str5 +" " + str6;
// console.log(result);

console.log(str5.concat(str6));

//6.string replace() method
let str7 = "hello";
console.log(str7.replace("e", "d"));

//7.charAt() method
let str8 = "HelloWorld!!!";
console.log(str8.charAt(7));

//8.replace() method
let str9 = "Hello World!!!";
console.log(str9.replace("World", "Universe"));
