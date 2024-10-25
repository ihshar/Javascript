// function print(){
//     console.log('I have clicked somewhere on the window');
// }
// document.addEventListener('click',print);

// document.removeEventListener('click',print);

// let content = document.querySelector('#wrapper');

// content.addEventListener('click',function(event){
//     console.log(event);
// });


// let links = document.querySelectorAll('a');

// let thirdLink = links[2];

// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('maza aaya, acha laga');
// })

// let myDiv = document.createElement('div');

// myDiv.addEventListener('click',print);

// function print(event){
//     console.log('Para' + event.target.textContent);
// }

// for(let i=0;i<=100;i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para'+i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// let element = document.querySelector('#wrapper1');

// element.addEventListener('click',function(event){
//         if(event.target.nodeName === 'SPAN'){       
//             console.log('span pr click kia hai'+ event.target.textContent);
//         }
// })



// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'I have a Para'+i;

//     document.body.appendChild(newElement);
// }


// setTimeout(function(){
//     console.log('Kya haal chaal');
// },5000);


// let meraPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I m inside Promise');
//     },5000);
//     // resolve(2000);
//     reject(new Error('Bhaishab Error aaye hai'));
// });

// meraPromise.then(value=>console.log(value),error =>console.log("Error occured"));

// console.log('Phela');


// let wadda1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("setTimeout1 started");
//     },5000)
//     resolve(true);
// });

// wadda1.then(()=>{
//     setTimeout(()=>{
//         let wadda2 = new Promise(function(resolve,reject){
//             setTimeout(()=>{
//                 console.log("setTimeout2 started");
//             },2000)
//             resolve("wadda2 resolved");
//         })  
//         return wadda2;
//     })
// }).then((value)=>console.log(value));




// async function utility(){

//     let DelMausam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Delhi Mai Bhaut Garmi Hai");
//         },5000);
//     });

//     let hydMausam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Hyderabad is cool");
//         },6000);
//     });

//     let dm = await DelMausam;
//     let hm = await hydMausam;

//     return [dm,hm];
// }


// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let response = await content.json();
//     console.log(response);
// }


// async function helper(){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Himanshu',
//           body: 'Sharma',
//           userId: 2000,
//           weight:'58'
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         }
//     }


//     let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response = await content.json();
//     return response;

// }

// async function utility(){
//     let ans = helper();
//     console.log(ans);
// }

// utility();


// function man(){
//     let name ="Himanshu";

//     function child(){
//         console.log(name);
//     }
//     return child();
// }

// let ans = man();
// ans();


// async function showWeather(){
//     // let latitude = 15.3333;
//     // let longitude = 74.0833;

//     let city = "Delhi";
//     const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";


//    try{

//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
//         console.log(data);

//         let newPara = document.createElement('p');
//         newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;

//         document.body.appendChild(newPara);

//    }
//    catch(err){
//         console.log("Some Error Occured ->",err);
//    }

// }


function geoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("Geolocation Not Supported");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;       
    let longi = position.coords.longitude;       

    console.log(lat);
    console.log(longi);
}
