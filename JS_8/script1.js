let modebtn = document.querySelector("#modebtn")
let para =  document.querySelector("#para")
console.log(para)
let body = document.querySelector("body")
let currmode = "light";

modebtn.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
        }else {
        currmode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currmode)
})

