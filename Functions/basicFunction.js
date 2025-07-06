// Basic Functions

// --> Function Definition
function myFunction() {
    console.log("Hello world!!!");
}
// --> Function Calling/invoke
myFunction();


// Parameter
function myFunction2(msg, msg2) {  // parameter
    console.log(msg, msg2);
}

myFunction2("here is your msg", "here is your second msg");  // argument


// calculate sum of two numbers

function sum(a, b) {
    // Local variables -block scopes variable
    console.log(a + b);
}
sum(500, 600);

function mul(x, y) {
    console.log(x * y);
}
mul(12, 56);

//Arrow => Functions.....

const sum1 = (a, b) => {
    console.log(a + b);
}
sum1(4, 5);

// 2nd example of arrow function

const print = () => console.log("Hello world!!!");

print();


// forEach / higher order functions or methods

let arr = ["abc", "def", "ghi", "jkl", "mno", "pqr"];

arr.forEach((val) => {
    console.log(val);
})

// map():

console.log("Using map:");
arr.map((val) => {
    console.log(val);

})

// filter():
let arr1 = [12, 23, 34, 45, 56, 67, 78, 89];

// let evenNum=arr1.filter((val)=>{

// })

let evenArr = arr1.filter((val) => {
    return val % 2 == 0;
})
console.log(evenArr);


// reduce method():

let arr3=[98,87,76,65,54];

let main=arr3.reduce((res,curr)=>{
    return res +curr;
})
console.log(main);
