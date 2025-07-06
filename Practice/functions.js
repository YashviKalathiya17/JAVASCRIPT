// count vowels using Functions:---

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);   
}
countVowels("i");

// using arrow function

const vowels=(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}
vowels("hello World!!");


// print square of num using forEach methods

let num=[12,23,34,45,56,67,78];

num.forEach((val)=>{
    console.log(val*val);
    
})

// print marks of students which is more than 80

let marks=[78,89,82,57,68,90,97,85];

let higher=marks.filter((val)=>{
    return val>80;
})
console.log(higher);

