import { TweenMax } from 'gsap';

const divs  = Array.from({length : 100 }, ()=> document.createElement("div"))
divs.forEach(div=>{
    TweenMax.set(div, {
        position : "absolute",
        x : `${Math.random()*window.innerWidth}px`,
        y : `${Math.random()*window.innerHeight}px`,
        width :20,
        height : 20,
        backgroundColor: "green",
        border : "3px solid black"
    })
    document.appendChild(div)
})
document.addEventListener("click", event=>{
    const{x, y} = event
    TweenMax.to(divs , 1 , {x, y})
})