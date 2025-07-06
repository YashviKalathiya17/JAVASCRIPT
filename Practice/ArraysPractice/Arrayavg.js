// Calculate an average of some Numbers

let marks = [23, 34, 45, 56, 67, 78, 89];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
let avg = sum / marks.length;
console.log(avg);

// ---------------------print odd number------------------
let marks1 = [23, 34, 45, 56, 67, 78, 89];
for (i = 0; i < marks1.length; i++) {
    if (marks1[i] % 2 !== 0) {
        console.log("even num:", marks1[i]);
    }
}

