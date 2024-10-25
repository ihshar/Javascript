// async function getUserData(){
//     try{
//         const response = await fetch('https://api.github.com/users/ihshar');
//         console.log(response)
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:",error);
//     }
// }


// .then and catch same function

fetch('https://api.github.com/users/ihshar')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
console.log(error);
})

// getUserData();