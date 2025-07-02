//Logical operators

let a = 10;
let b = 8;

// && Logical AND Operator - There will be both of conditions must be true

// let c = a <= b;  //true 
// // let d = a === b; //true
// let d = a > b;  //false

// If the two conditions are true then the result will be true otherwise it will be false 
// console.log("c && d = ", c && d); // Logical AND;
console.log("Condition1 && Condition2 = ", a <= b && a === b);

// || Logical OR Operator
// If there are both of conditions are false then the result will be false otherwise it will be true in any of condition.

console.log("condition1 || condition2 = ", a >= b || a < b);

// ! Logical NOT Operator
// It will return the opposite value of the condition. If the condition is true then it will return false and if the condition is false then it will return true.
console.log("condition1=", a > b);  //true
console.log("!condition1=", !(a > b)); //false -cause print Opposite


