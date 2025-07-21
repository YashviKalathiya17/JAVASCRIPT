// let promise = new Promise((resolve, reject) => {
//   console.log("Promises");
//   // resolve(2123);
//   // reject("it shows some error");
// });

//------------------------------------------------

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Promises");
//     // resolve("ss");
//     reject("not fullfield error");
//   });
// };
// let promise2 = getPromise();
// promise2.then((res) => {
//   console.log("Fullfilled", res);

// });
// promise2.catch((err) => {
//   console.log("rejected", err);
// })

// ----------------------------------------------------------


// function getData(dataId,getNextData){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data",dataId);
//       resolve("success");
//       if(getNextData){
//         getNextData();
//       }
//     },4000);
//   });
// }


// Promise Chaining:

function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success")
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success")
    }, 4000);
  });
}
console.log("Wait loading🛞...");

let p1 = asyncFunc();
p1.then((res)=>{
  console.log(res);
}) 

let p2 = asyncFunc2();
p2.then((res)=>{
  console.log(res);
})

console.log("data 1");
asyncFunc().then((res)=>{
  console.log("data 2...");
  asyncFunc2().then((res)=>{});  
});
