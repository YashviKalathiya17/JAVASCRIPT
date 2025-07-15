class Parent {
    Property() {
        console.log("50% is yours.");
    }
}
class Child extends Parent {

}

let obj = new Child();

//   ---------------------------------------------------- 

class Person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    constructor(branch){
        super();  //to invoke parent class constructor
        this.branch=branch;
    }
    work() {
        console.log("They do their work");
    }
}

// class Doctor extends Person{
//     work(){

//         console.log("treat patients");
//     }

// }
let eng = new Engineer("chemical eng");


// super keyword:-used to call the constructor of its parent class to access parent class's properties and methods.

