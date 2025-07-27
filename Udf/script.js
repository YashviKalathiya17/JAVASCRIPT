// 1. Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

console.log("Add 5 + 3 =", addNumbers(5, 3));              

// 2. Function to check if a number is even or odd
function isEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("Check 4 is", isEven(4));                      

// 3. Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Reverse of 'hello' =", reverseString("hello")); 

// 4. Function to find the factorial of a number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log("Factorial of 5 =", factorial(5));             

// 5. Function to find the maximum number in an array
function findMax(arr) {
    return Math.max(...arr);
}

console.log("Max in [3, 7, 2, 9, 1] =", findMax([3, 7, 2, 9, 1])); 
