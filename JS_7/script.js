// first we will access the the elemnent through query selector
// // second we will use get attribute to know the value of attribute
let div = document.querySelector("div")
console.log(div);

let id = div.getAttribute("id")
console.log(id);

// now we will do the same thing to class
let p = document.querySelector("p")
console.log(p.getAttribute("class"));

// to set the attribute value

let id1 =  div.setAttribute("id", "newbox")
console.log(id);

// inserting elements
// to insert elements we have to steps that is create the element and add
// here we have created a button which is newbtn and append it at the end.
let newbtn = document.createElement("button")
newbtn.innerText ="click me"
console.log(newbtn)


div.append(newbtn); 