//Closure

function getInfo(){
    const username = "Himanshu"
    let password = 12345

    function getChildInfo(){
        const username = "Child"
        let pin = 5678

        console.log(username);
    }
    getChildInfo();
}

// getInfo();


//54321 => 5+4+3+2+1=> ? if its not a one digit no. then again do the same thing until its one digit 

// function sumOfAllDigits(num){
//     let sum = 0
//     while(num.length()>1){
//         sum += num%10
//     }
//     return sum;
// }

// console.log(sumOfAllDigits(54321))



// function addData(digit){
//     const convertedData = digit.toString()
//     const splitedData = convertedData.split('').map((data)=>{
//         return parseInt(data) 
//     })
//     const sum = splitedData.reduce((a,b)=>{
//         return a+b
//     },0)

//     if(sum>10){
//         addData(sum)
//     }
//     else{
//         console.log(sum);
//     }
// }





// const finaloutput = splitedData.reduce((a,b)=>a+b)
// console.log(finaloutput);
// if(finaloutput>10){
//     addData(finaloutput)
// }
// else{
//     // console.log(finaloutput);
// }


// addData(4987)






// function x(){
//     setTimeout(()=>{
//         console.log(i);
//     })
//     var i = 1;
// }
// x(); 


// while(true){
//     console.log("Himanshu");
// }

// console.log("Start");
// function printMe(){
//     setInterval(()=>{
//         console.log(Date.now().toLocaleString());
//     },2000)
// }
// printMe()
// console.log("End");


// const arr = [1,2,3]
// arr[4]=5;

// console.log(arr.length);
// console.log(arr[3]);

// const [,,,a] = [10,20,30,40,50]
// console.log(a);

// const {3:b} = [10,20,30,40,50]
// console.log(b);


// function abc(name){
//     this.name = name
// }
// const value = new abc("Himanshu");
// const value1 = new abc("Sharma");
// console.log(value);
// console.log(value1);

// abc.prototype.getName = function (){
//     console.log(this.name);
// }

// value.getName()



// const time = document.getElementById('time')


// setInterval(()=>{
//     const date =  new Date()
//     console.log(date.toLocaleTimeString());
//     time.innerText=`${date.toLocaleTimeString()}`
// },1000)



// traditonal method of classes using protoypes 

// function person(name,age){
//     this.name = name
//     this.age = age
// }

// person.prototype.getName = function(){
//     console.log(`My Name is ${this.name}`);
// }

// const Himanshu = new person("Himanshu",24)
// console.log(Himanshu);
// Himanshu.getName();



// new method of classes ES6 or later

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     sayHello(){
//         console.log(`Hii from ${this.name} of age ${this.age}`);
//     }
// }

// const Himanshu = new Person("Himanshu",24)
// Himanshu.sayHello()
// console.log(Himanshu);


const promise = new Promise((res,rej)=>{
    document.querySelector('#resolve').addEventListener('click',()=>{
        res("resolved")
    })
    
    document.querySelector('#reject').addEventListener('click',()=>{
        rej("Rejected")
    })

})
.then((res)=>console.log(res))
.catch((rej)=>{console.log(rej)})





// async function promiseFunc(){
//     console.log("pending");
//     const btn = await document.querySelector('button').addEventListener('click',()=>{
//         console.log("resolved");
//     })
// }  
// promiseFunc();


async function MyFunc(){
    const res = await promise
    return "Himanshu";
}

const res = await MyFunc()
console.log(res);