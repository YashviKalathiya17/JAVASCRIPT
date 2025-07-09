let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    // console.log(e.type);
    console.log("button was clicked!!");
    // let a=25;
    // a++;
    // console.log(a);
}

let box = document.querySelector("#box1");
box.onmouseover = () => {
    console.log("You hover on div");
}

let btn = document.querySelector("#btn2");
btn.addEventListener("click", () => {
    console.log("Button is clicked");
})