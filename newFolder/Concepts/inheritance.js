class User{
    constructor(username){
        this.username = username //this keyword of class user will be replaced by this keu=yword of class teacher because of super function
    }
    log(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)  //super function is taking his own this with him to extended class 
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A Course has been added by ${this.username}`);
    }

    encryptPassword(){
        console.log(`${this.password}abc`);
    }
}

const Babu = new Teacher("Babu","babu@gmail.com",'123')


Babu.addCourse()
Babu.encryptPassword()