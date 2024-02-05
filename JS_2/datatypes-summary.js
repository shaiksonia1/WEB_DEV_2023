
// primitve datatypes
// 7types: string,num,boolean,null,undefined,symbol 

const id = Symbol('124')
const anotheId = Symbol('124')

console.log(id === anotheId);

const bigNumber = 44524536463n
// reference(non-primitive)
// Arrray,objects,functions

// js is dynamically typed languages



const heros = ["shaktiman","nagaraj","doga"];
let myObj ={
    name:"sonia",
    age:22,
}

const myfunction =  function () {
    console.log("hello world");
}



// stack(primitive) and heap memory(non-primitive)

let myname = "sonia"
let anothername = "shaik"
anothername ="shaik sonia"
console.log(myname)
console.log(anothername)

let user1 ={
    email: "shaiksonia@gmail.com",
    upi:"34@ybl"
}
let user2 = user1
user2.email = "shaiksonia@gmail.com"
console.log(user1.email)
console.log(user2.email)