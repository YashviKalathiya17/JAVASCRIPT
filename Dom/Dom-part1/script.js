// DOM- Document Object Model

let heading = document.getElementById("heading");
console.dir(heading);

// let newBtn = document.createElement("button");
// newBtn.innerText = "click Me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn);

// let p=document.querySelector("p");
// p.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "Hello JAVASCRIPT!!!";

document.querySelector("body").append(newHeading);


let para = document.querySelector("p");
para.remove();