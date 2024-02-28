let btn1 =  document.querySelector("#btn1")

// btn1.onclick = () => {
//     console.log("button is clicked");
//     let a = 25;
//     a++;
//     console.log(a)
// }


let div =  document.querySelector("div")
div.onmouseover = ( ) => {
    console.log("onmouser is done")
}

btn1.addEventListener("click", (evt)=>{
    console.log("btn1 is clicked-handler1")
    console.log(evt)
    console.log(evt.type)
})
btn1.addEventListener("click", ()=>{
    console.log("btn1 is clicked-handler2")
})
const handler3 = () =>{
    console.log("btn1 is clicked-handler3")
}
btn1.addEventListener("click",handler3)

btn1.addEventListener("click", ()=>{
    console.log("btn1 is clicked-handler4")
})
btn1.removeEventListener("click",handler3)