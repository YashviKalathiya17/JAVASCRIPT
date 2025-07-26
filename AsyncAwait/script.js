// Async - await :it returns promise
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    await api();
    await api();
    await api();
}


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("success")
        },2000);
    });
}
// iife functions
(async function(){
    console.log("iife functions are:");
    
    await getData(1);
    await getData(2);
    await getData(3);
}
)();
 function hello() {
    console.log("Hello");

}
