// Classes in JAVASCRIPT: -->  Classes are blueprint of an object.

class car {
    // constructor:
    constructor(brand) {
        console.log("printing a constructor");
        this.brand=brand;
    }

    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}

let kia = new car("lexus");
// kia.setBrand("kia");
let fortuner = new car("Audi");
// fortuner.setBrand("fortuner");

