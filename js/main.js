// vars
let moving = document.querySelector(".moving")
// end vars


window.onmousemove = (e) => {
    moving.style.top = e.pageY + "px"
    moving.style.left = e.pageX + "px"
    
}













