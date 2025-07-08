// let div = document.querySelector("div");
// console.log(div);

// let name = div.getAttribute("name");
// console.log(name);


// let para=document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// ------------For styling--------------------

// let div=document.querySelector("div");

// div.style.backgroundColor="purple";
// div.style.color="black";
// div.style.fontSize="20px";
// div.innerText="Hello yashvi!!";

//-----------------------------------------------------

let btn=document.createElement("Button");
btn.innerText="Click ME";
console.log(btn);

let div=document.querySelector("div");
// div.append(btn);    
// div.prepend(btn);
// div.after(btn);   
div.before(btn);


let Heading=document.createElement("h1");
Heading.innerHTML="Hello JAVASCRIPT";

document.querySelector("body").prepend(Heading);

// To remove a specific tag or an element:

let para=document.querySelector("p");
para.remove();

// Heading.remove();
