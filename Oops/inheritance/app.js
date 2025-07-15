let data="Have some fun";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(data);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data="have some doubt???"
    }
}
let student1=new User("abc","abc@gmail.com");
let student2=new User("pqr","pqr@gmail.com");
let student3=new User("xyz","xyz@gmail.com");

let teacher1=new User("hod","hod@gmail.com");
User