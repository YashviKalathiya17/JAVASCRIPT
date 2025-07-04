// create and store performing operations...

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

//-----------  remove from first
companies.shift();
console.log(companies);

//------------ remove uber and add ola at that place..
companies.splice(2,1,"OLA");
console.log(companies);

//------------remove last element
companies.pop();
console.log(companies);

// add at last element
companies.push("yahooo");
console.log(companies);





