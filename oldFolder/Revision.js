const account_Id = 213231;
// account_Id = 20;

let account_Email = "hc@hc.com";
var account_Password = 1213232;
account_City = "Jaipur";


account_Email  = "himanshusha23@gmail.com";
account_Password = 121424242;
account_City = "Bengaluru";

console.table([account_Id,account_Email,account_Password,account_City]); //table is used for consoling mutiple statement
                                                                            // in one statement using []

console.log(typeof undefined); //type of undefined is undefined
console.log(typeof null);       //type of null is object


let score = "33abc";
console.log(score);

let convertedValue = Number(score);
console.log(convertedValue);
    

//Conversion in Javascript
// "33" => 33
// 33abc => NaN
// null => 0
// undefined =>NaN




let userOne = {
    email:"himanshusharma@atlassian.com",
    username:"Himanshu Sharma",
    phone_number: "9870445415",
    location: "New Delhi"
} 

let userTwo = userOne;

userTwo.email = "himanshusharma@google.com";
userTwo.username = "Baby";

console.table([userOne]);


const locations = new String('New DelhiDwarka');

console.log(locations.slice(-14,5));  

console.log(locations.includes('New'));

const anotherNumber = new Number(300)

// console.log(anotherNumber);

const todayDate = new Date("01-10-2023");

// console.log(Math.round(Date.now()/1000));

// console.log(todayDate.getMonth()+1);
console.log(todayDate.toLocaleString());
const anotherDate = new Date()
console.log(anotherDate.getDay());



// ADVANCE ARRAY CONCEPT


const score1 = 300;
const score2 = 500;
const score3 = 700;

// console.log(Array.of(score1,score2,score3));
const mySym = Symbol("key1");

const myObj = {
    name:"Himanshu",
    [mySym]: "Key1",
    fullname:"Himanshu Sharma",
    email:"himanshusha23@gmail.com",
    location:"New Delhi",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Wednesday"]
}


console.log(myObj[mySym]);
console.log(myObj);



// What is IIFE and Why we need IIFE??
// 1. IIFE function which is used to execute the invoked the function immediately just after starting the 
// or executing the program.
// 2. And we don't need pollution from Global scope  



// IIFE
// namedIIFE
(function Himanshu(){
    console.log('DB CONNECTED');
})();
 // ^
// two execute two IIFE at a time we need to put semicolon in the first one because to the end 
// first IIFE and then start the other one.


// unnamed IIFE
((name)=>{
    console.log(`DB2 CONNECTED ${name} `);
})('Himanshu')


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const myBooks = [];

// books.forEach( (bk)=> {
//     if(bk.genre=="History"){
//         myBooks.push(bk.title);
//     }
// } )


// books.forEach( (bk)=> {
//     if(bk.publish>2000){
//         myBooks.push(bk.title);
//     }
//  } )


const userBooks = books.filter( (bk)=> { return bk.publish>=1995 && bk.genre=="History"}  )

console.log(userBooks);




// reduce function

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cartPrice = shoppingCart.reduce(( acc,item)=> acc+item.price,0 )

console.log(cartPrice);