// console.log(a)
// // console.log(b)
// let a=5;


// console.log(1<2<3)
// console.log(3>2>1)

// const foo = ()=>{
//     console.log(this.name);
// }

// foo.call({name:"John"})

// console.log(this);


// const user = {
//     id:123,
//     name:'John Doe',
//     age:28,
//     address: {
//         city:'mumbai',
//         state:'maharashtra',
//     },
// }



// const changedObjectProperty = Object.defineProperty(user,"id",{
//     writable:false,
//     enumerable:false
// })


// const ObjectProperty = Object.getOwnPropertyDescriptor(user,"id")
// console.log(ObjectProperty);


// question-1

// const changedProperty = Object.defineProperty(user,"id",{
//     writable:false,
//     enumerable:false,
// })
// const property = Object.getOwnPropertyDescriptor(user,"id")
// console.log(property);




// question-2
// const fruitsName = ["apple","mango","pineapple","orange","banana"]

// const ul = document.createElement('ul')

// fruitsName.forEach((fruit)=>{
//     const li = document.createElement('li');

//     li.innerHTML=fruit

//     ul.appendChild(li)
// })

// const body= document.querySelector('body')

// body.appendChild(ul)




// question-3
// const myPromise = new Promise((res,rej)=>{
//     document.querySelector('#my-btn').addEventListener("click",()=>{
//         res("resolved");
//     })
//     document.querySelector('#my-btn2').addEventListener("click",()=>{
//         rej("something wrong happened");
//     })
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch(err=>console.log(err))



// question-4

// async function otherPromise(){
    
// }



// question-4

// const circle = document.createElement('div')

// document.addEventListener("click",(e)=>{
//     const x = e.clientX;
//     const y = e.clientY; `
    
//     console.log("x is:",x,"y is:",y);
// })

// div.setAttribute("class","circle-id")
// body.appendChild(div)



// var x=20;

// function foo(){
//     var x=10;
//     console.log(x);
// }
// foo();



// console.log("Start");
// setTimeout(() => {
//     console.log("Timeout");
// }, 0);
// console.log("End");


// setTimeout(() => {
//     console.log("Timeout");
// }, 1000);
// console.log("End");




// document.addEventListener('click',(e)=>{
//     const x = e.clientX;
//     const y = e.clientY;
//     console.log(x,y);

//     const div = document.createElement('div').setAttribute('class','circle-id')
//     const body = document.querySelector('body')
    
//     body.append(div);

// })

let x = "Himanshu";
// console.log(x);
// x="Himan";
// console.log(x);

function a(){
    var x1 = 10;
}

// // console.log(x1);
// console.log(x.slice(0,5));

const mySym = Symbol("key1");

const jsUser = {
    name:"Himanshu",
    age:22,
    email:"himanshusha23@gmail.com",
    isLoggedIn:true, 
    Location:"New Delhi",
    [mySym] : "myKey1",
}

// console.log(jsUser);
// console.log(jsUser[mySym]);


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}; 
 
const obj3 = {...obj1,...obj2} 

// console.log(obj3);              

 a =300;

if(true){
     a = 25;
}

 a = 55;
 a = 65;

// console.log(a);


function one(){
    let username = "Himanshu";
    console.log(`${this.username}`);
}

// one();

const user23 = {
    username: "Himanshu",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// console.log(user23.username);
// console.log(user23.price);

const greeting = "Hello World";

for(let greet of greeting){
    if(greet==' '){
        break;
    }
    // console.log(`characters are ${greet}`);
} 

const map = new Map()

map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

for(let [key,value] of map){
    // console.log(key+ ':-' +value);
}

const myArr1 = ["yoyo","xoxo"]

for(let key of myArr1){
    // console.log(key);
}


const myObj = {
    username:"Himanshu",
    password:"12345"
}

for(let key in myObj){
    // console.log(`${key}:${myObj[key]}`);
}

const myArr = ["yoyo","xoxo"]

for(let key in myArr){
    // console.log(myArr[key]);
}


const coding = ["cpp","java","python","ruby"]

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})



const myNum = [1,2,3,4,5,6,7,8,9,10]

const result = myNum.map((num)=>{
    return num+10
})

// console.log(result);

newMyNum = []

myNum.forEach((num)=>{
    // newMyNum.push(num+10);    
})

// console.log(newMyNum);


myNumbers = [1,2,3,4,5,6,7,8,9,10]

const output = myNumbers
        .map((num)=> num*10)
        .map((num)=> num+1)
        .filter((num)=> num>=50)

// console.log(output);

const output1 = myNumbers.reduce((acc,currval)=>{
    return acc+currval
},0)

// console.log(output1);

const shoppingCart = [
    {
        course:"js course",
        price:999
    },
    {
        course:"java course",
        price:9999
    },
    {
        course:"mobile dev course",
        price:12999
    },
    {
        course:"data science course",
        price:15999
    },
]


const cartPrice = shoppingCart.reduce((acc,item)=>{
    return acc+item.price
},0)

console.log(cartPrice);

