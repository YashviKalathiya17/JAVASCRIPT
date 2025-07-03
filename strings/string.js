// Print string  - strings are immutable

let str1 = "Hello";
let str2 = "World!!!";
console.log(str1, str2);
// print length
console.log(str1.length);
// print specific letter
console.log(str1[4]);
console.log(str2[0]);

// Bactics / template literals
let speString = `This is How It Look like🤷‍♂️`;
console.log(speString);
console.log(typeof speString);

// 2nd example of template literals
let obj = {
    item: "Mobile",
    price: 24500,
}
// console.log(obj.item , obj.price);
let output = `Here is the ${obj.item} price is ${obj.price}.`;
console.log(output);

// escape characters

let str="hello\tworld!!!"
console.log(str.length);


