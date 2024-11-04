// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);

const chai = {
    name:"ginger chai",
    price:250,
    isAvailable:true
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

chai.name="Himanshu"
console.log(chai);
