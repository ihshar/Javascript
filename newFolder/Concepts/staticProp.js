class User{
    constructor(username){
        this.username = username //this keyword of class user will be replaced by this keu=yword of class teacher because of super function
    }
    log(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,){
        super(username)  //super function is taking his own this with him to extended class 
        this.email = email;
    }

    static createId(){
        return 123
    }
}

const Himanshu = new Teacher("Himanshu","abc")

Himanshu.createId()