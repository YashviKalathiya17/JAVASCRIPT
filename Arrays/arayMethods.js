// // Array Methods

let cars = ["volvo", "lamborgini", "jaguar", "BMW", "fortuner"];
console.log(cars);

// // 1.push() : add to end

cars.push("G-wagon", "Mercedes");
console.log(cars);

// // 2.pop() :removes from end and returns

cars.pop();
console.log("It removes last value(Mercedes):", cars);

// // 3.toString(): converts array into String

cars.toString();
console.log(cars);

// //4.concat():merge multiple arrays  -returns new array
let food1=["banana","cherry","apple"];
let food2=["pasta","bagel","noodles"];

console.log(`food1: ${food1} food2: ${food2} `);

let food=food1.concat(food2);
console.log(food);


//5.unshift(): add to start
let food3=["potato","tomato","sweet-potato","radish","carrot"];
food3.unshift("chilli");
console.log(food3);

// //6.shift():delete from start and returns
food3.shift();
console.log(food3);

//7.slice():returns a piece of the array
console.log(food3.slice(1,3));

//8.splice():change in original array(add,remove,replace)
let Splice=[23,34,45,56,67,78];
console.log(Splice);
Splice.splice(1,2,43,54);  // here 1 is index,2 is element which you want to remove,and 43,54 is element which you remove in 2nd position.
console.log(Splice);


