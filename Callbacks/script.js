// callback 
function sum(a, b) {
    console.log(a + b);
}
// sum(23,56);

function calculator(a, b, sum1) {
    sum1(a, b);
}
calculator(1, 2, (a, b) => {
    console.log(a + b);

})
// calculator(45,45,sum);

//nesting:

let age = 19;
if (age >= 18) {
    if (age >= 19 && age <= 60) {
        console.log("adult");
    }
}
else {
    console.log("senior");

}

// callback Hell:nested callbacks stacked below one another forming a pyramid structure.

function getData(data ,getNext) {
    setTimeout(() => {
        console.log("data:", data);
        if(getNext){
            getNext();
        }
    }, 2000);
}
// getData(123);
// getNext(1,getData(2));

getData(1,()=>{
    getData(2);
});