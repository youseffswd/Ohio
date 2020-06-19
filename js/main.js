// vars
let moving = document.querySelector(".moving")
// end vars
window.onmousemove = (e) => {
    moving.style.top = e.pageY + "px"
    moving.style.left = e.pageX + "px"
    
}










// animation part

let gBtn = document.querySelector(".half .icon")
let gLeft = document.querySelector(".back .left")
let gBtnTimer = setInterval(() => {
    theStyleOfAnimation(gBtn , "hop 1.5s linear alternate-reverse")
    setTimeout(() => {
        theStyleOfAnimation(gBtn , "none")
    },1600)
},3000)
gBtn.parentElement.onmouseover = () => {
    gLeft.style.transform = "rotateY(0deg) translateX(-20%)"
    gLeft.style.opacity = 1
}
gBtn.parentElement.onmouseout = (e) => {
   
        gLeft.style.transform = "rotateY(90deg) translateX(-20%)"
        gLeft.style.opacity = 0
    
}
//gLeft.hasAttribute("data-active")
function theStyleOfAnimation(ele,val){
    ele.style.animation = val
}