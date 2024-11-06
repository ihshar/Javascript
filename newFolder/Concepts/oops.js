function User(username, loginCount) {
    this.username = username;
    this.loginCount = loginCount;
    return this;
  }
  
const userOne = User("himanshu", 12);
// console.log(userOne);







/* new keyword */       

// function getUser(username,price){
//     this.username = username
//     this.price = price
//   }
  
  
//   getUser.prototype.increment = function(){
//     this.price++;
//   }
  
  
//   getUser.prototype.printMe = function(){
//     console.log(`price is ${this.price}`)
//   }
  
  
//   const userOne = new getUser("Himanshu",25)
  
//   userOne.printMe();
//   userOne.increment();
  



/* call */



function setFunction(username){
  this.username = username;
}


function createUser(username,email,password){
  setFunction.call(this,username)  //this argurment is passed inbuilt "if you don't pass it pass by default"

  this.email = email;
  this.password = password;
}

const user = new createUser("Himanshu","Himanshu@google.com","12345");
console.log(user);