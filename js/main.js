// vars
let moving = document.querySelector(".moving")
// end vars
window.onmousemove = (e) => {
    if(window.innerWidth > 991){
        moving.style.top = e.pageY + "px"
        moving.style.left = e.pageX + "px"
    }
    
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
gBtn.parentElement.onmouseout = () => {
   
        gLeft.style.transform = "rotateY(90deg) translateX(-20%)"
        gLeft.style.opacity = 0
    
}
gsap.from(".back" , {duration:.8,delay:1.5,opacity:0,x:-400})
let eles = Array.from(document.querySelectorAll("*"))
let filteredEl = eles.filter(ele => ele.hasAttribute("data-ani"))
filteredEl.forEach(ele => {
    ele.style.transition = ".8s linear all"
    if(ele.dataset.ani == "left"){
        ele.style.opacity = 0;
        ele.style.transform = "translatex(-400px)"
    }
    if(ele.dataset.ani == "down"){
        ele.style.opacity = 0;
        ele.style.transform = "translatey(400px)"
    }
    if(ele.dataset.ani == "right"){
        ele.style.opacity = 0;
        ele.style.transform = "translatex(400px)"
    }
    
});







// scrolling part
let numberssContent = document.querySelectorAll(".pric2 .content .pric-badge .counter"),
    numberss = [326,89],
    del = 800;
window.onscroll = () => {
    for(let i = 0 ; i < filteredEl.length;i++ ){
        if(scrollY + window.innerHeight >= filteredEl[i].offsetTop + 100){
            filteredEl[i].style.opacity = 1;
            filteredEl[i].style.transform = "translatex(0px) translatey(0)"
        }
    
    }
    
    numberssContent.forEach((number,index) => {
        if(scrollY + window.innerHeight >= number.parentElement.offsetTop + 100){
            console.log(number.parentElement.offsetTop);
            setTimeout(() => {
                let counterr = setInterval(() => {
                    del = 0
                    if(number.textContent == numberss[index] ) {
                        clearInterval(counterr)
                        return
                    }
                    number.textContent = parseInt(number.textContent) + 1
                }, 2000 / numbers[index])
            },del)
        }
    })
    
    
}

//gLeft.hasAttribute("data-active")
function theStyleOfAnimation(ele,val){
    ele.style.animation = val
}


// media
let height = document.querySelector(".pric2 .content .pric-badge .counter").clientHeight;
document.querySelector(".pric2 .content .pric-badge .img").style.height = height + "px";
document.querySelector(".pric2 .content .pric-badge .img").style.lineHeight = height + "px";