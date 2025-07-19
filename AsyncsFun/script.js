// sync Function: --it prints line-by-line data if error occurs it stop at that point.

let a = 10;
let b = 20;
let c = 30;
console.log(a);
console.log(b);
console.log(c);

// Async Function:

// setTimeout Function:--
function print1() {
    console.log("Hello world!!!");
}
setTimeout(print1, 2000);

setTimeout(() => {
    console.log("HELLO JAVASCRIPT");
}, 3000)

// setInterval Function:--
setInterval(() => {
    console.log("hello");
}, 2000);
