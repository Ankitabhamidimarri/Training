//^ Events in javaScript
//? event are nothing but an action to perform on html elements
//? in the events we have 
//~ click
//?
//~ mouse
//~ key

//! on click
/*let btn = document.getElementById("btn");
//btn.addEventListener("events", "callbackfn")
btn.addEventListener("click",()=>{
    console.log("button clicked")
    document.body.style.background="red"
})*/

//! 
/*let btn = document.getElementById("btn");
//btn.addEventListener("events", "callbackfn")
btn.addEventListener("mouseover",()=>{
  document.body.style.background="tomato"
})*/

/*let inp = document.querySelector("#inp");
inp.addEventListener("keydown",()=>{
    console.log("key pressed down");
})

inp.addEventListener("keyup",()=>{
    console.log("key pressed up");
})*/

/*function changeBackground(color) {
    document.body.style.backgroundColor = color;
}*/

let bgColor = document.querySelectorAll(".bgColor");
[...bgColor].map((element)=>{
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor = element.innerText;
    });

    element.addEventListener("mouseleave", ()=> {
        element.style.backgroundColor="transparent";
    })
})

