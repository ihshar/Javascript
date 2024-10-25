console.log('Hello jee');
console.log('How are you ??');
console.log('Are you good ??');
// let lastName='Himanshu Sharma';

// console.log(lastName);

// let firstName= new String('Himanshu Sharmaa');

// let message='This is a my first message';

// let words=message.split('i');

// console.log(words);


// function sum(){
//     let total=0;
//     for(let value of arguments)
//         total=total+value;
//     return total;
// }

// let ans=sum(1,2,3,4);

// console.log(ans);   


// if(value){
// var bi=5;
// }


// console.log(bi);

// let courses=[
//     {no:1, naam:"Love"},
//     {no:2, naam:"Babbar"}
// ];

// let course =courses.find(course=>course.naam ==="Love");

// console.log(course);


// let one=[1,2,3];
// let two=[4,5,6];

// let zero=one.concat(two);
// console.log(zero);

// let arr=[10,20,30,40,50];

// // for(let value of arr){
// //     console.log(value);
// // }

// arr.forEach(number=>console.log(number));



// let number=[40,30,10,20,50];

// number.sort();

// console.log(number);

// number.reverse();
// console.log(number);



// let numbers=[1,2,-1,-4];

// let filtered=numbers.filter(value=>value>=0);

// console.log(filtered);



// let numbers=[7,8,9,10];
// console.log(numbers);

// let items=numbers.map(value=>'student_no'+value);

// console.log(items);


// let numbers=[1,2,-6,-9];

// let items=numbers
//             .filter(value=>value>=0)
//             .map(num=> {value:num});

// console.log(items);



// let user={
//     name:"Himanshu",
//     phone:"9870445415",
//     purchases:['car','laptop','mouse','keyboard']
// };

// console.log(user);
// const liker=['Himanshu','Sharma','Neha','Sudha','Neetu','Hari Shankar Sharma','Chadrakanta Devi','Pushpa Devi','Jai Shankar Sharma'];

// for(formr of liker){
//     if(formr==='Himanshu')
//         console.log('Yes It\'s in the list');
// }

// const Take=document.querySelector('.title');
// const ChangeIt=document.querySelector('.changeColor');


// ChangeIt.addEventListener('click',function(){
//     Take.classList.toggle('change');
// })


// const everything= document.querySelectorAll('.name-list ');

// console.log(everything);

// for(every of everything){
//     every.addEventListener('click',function(){
//         this.style.color ='red';
//     });
// }




// const promiseOne = new Promise(function(res,rej){
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             console.log("promise solved");
//             res({username:"Himanshu",password:"123"})
//         }
//         else{
//             rej("Something went wrong");
//         }
//     },1000)
// })
// .then((user)=>{
//     console.log(user);
//     console.log(user.username);
//     console.log("promise consumed");
// })
// .catch((error)=>{
//     console.log("Error");
// })

// async function getInfo(){
//     try{
//         const response = await fetch('https://api.github.com/users/ihshar');
//         const data = await response.json(); 
//         console.log(data);
//     }
//     catch(err){
//         console.log("E:",err);
//     }
// }

// getInfo();

// const promiseThree = new Promise(function(res,rej){
//     const data = fetch('https://api.github.com/users/ihshar');
//     res(data);
// })
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.log(data.followers);
// })
// .catch((err)=>{
//    console.log(err);
// })


// const promiseFour = new Promise(function(res,rej){
//     const data = fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/inr.json')
//     console.log(data);
//     console.log(typeof data);
//     res(data)
// })
// .then((res)=>{
//     const data = res.json()
//     console.log(typeof data);
//     console.log("Here");
// })
// .catch((err)=> console.log(err))


const useInfo = {
    name:"Himanshu",
    "password":123,
}

console.log(typeof useInfo)
console.log(useInfo.name)
console.log(typeof useInfo.name)
console.log(useInfo["password"])
console.log(typeof useInfo["password"])