console.log('Chaliye shuru krte hai');

// Making Object
// let rectangle = {
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };


// Factory Function
// function createRectangle(length,breadth){
//     return rectangle={
//         length,
//         breadth,

//         draw(){
//             console.log('drawing function');
//         }
//     };
// }

// Returning value of a function to Object
// let RectangleObj1=createRectangle(5,4);
// let RectangleObj2=createRectangle(2,3);
// let RectangleObj3=createRectangle(7,9);

//Constructor function
function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function() {
        console.log('drawing');
    }
}

let rectangleObject=new Rectangle(4,6);

// adding properties in function
rectangleObject.color='yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);


//how main Function creates object
let Rectangle1=new Function ( 
'length',
'breadth',
`this.length=len;
this.breadth=bre;
this.draw= function() {
console.log('drawing');
}`);


// primitive variable
let a=10;
function inc(a){
    a++;
}
inc(a);
console.log(a);


let b={value:10};

function inc(b){
    b.value++;
}


// reference variable
inc(b);
console.log(b.value);


let angle={
    length:1,
    breadth:2
}


// for in loop
for(let key in angle){
    console.log(key,angle[key]);
}


// for of loop
for(let key of Object.entries(angle)){
    console.log(key);
}


// to find if any of the property is present or absent in object
// Example 1
if('color'in angle){
    console.log('Present');
}
else{
    console.log('Absent');
}

// Example 2
if('length'in angle){
    console.log('Present');
}
else{
    console.log('Absent');
}


// Object Cloning #1
let src={
    a:10,
    b:20,
    c:30
};

let dest={};

for(let key in src){
    dest[key]=src[key];
}

console.log(dest);
src.a++
console.log(dest);

// Object Cloning #2
let src1={
    a:10,
    b:20,
    c:30
};

let src2={value:40};

let dest1=Object.assign({},src1,src2);

console.log(dest1);
src1.a++
console.log(dest1);

// Object Cloning #2

let src3={
    a:10,
    b:20,
    c:30
};

let dest3={...src3};

console.log(dest);

src.a++;

console.log(dest);













console.log('Hello Jee');

let lastname='Himanshu';

let firstName=new String('Love');

let message=
`Hello ${lastname},

Thanks for the Opportunity

Regards
Babbar`;

console.log(message);

let date=new Date();

console.log(date);


let date2=new Date('June 2- 1993 07:15');
console.log(date2);

let date3=new Date(1998,5,20,7);
date.getTime();
console.log(date);
// let words=message.split(' ');

// console.log(words);

// let words1=message.replace('first','second');
// console.log(words1);