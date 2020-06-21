// vars
let moving = document.querySelector(".moving")
// end vars
window.onmousemove = (e) => {
    if(window.innerWidth > 991){
        moving.style.top = e.pageY + "px"
        moving.style.left = e.pageX + "px"
    }
    
}
let imgsCreater = document.querySelector(".portfolio .inHTML")
let wordsC = [
    "corporate",
    "digital agency" ,
    "personal blog",
    "design bureau",
    "showcase slider",
    "cloud service",
    "photo gallery",
    "Mobile App",
    "Showcase Slider",
    "Conference",
    "Showcase Slider",
    "Classic Shop",
    "Travel Blog",
    "Showcase Slider",
    "corporate",
    "digital agency" ,
    "personal blog",
    "design bureau",
    "showcase slider",
    "cloud service",
    "photo gallery",
    "Mobile App",
    "Showcase Slider",
    "Conference",
    "Showcase Slider"
]
let sentC = [
    "agency , corporate",
    "agency , portfolio",
    "blog , news",
    "agency , portfolio",
    "agency , portfolio",
    "service ,app , product",
    "personal  ,  portfolio",
    "Service, App, Product",
    "Agency, Studio, Portfolio",
    "Event, Conference, Meetup",
    "Agency, Studio, Portfolio",
    "Store, WooCommerce",
    "Blog, News",
    "Agency, Studio, Portfolio",
    "agency , corporate",
    "agency , portfolio",
    "blog , news",
    "agency , portfolio",
    "agency , portfolio",
    "service ,app , product",
    "personal  ,  portfolio",
    "Service, App, Product",
    "Agency, Studio, Portfolio",
    "Event, Conference, Meetup",
    "Agency, Studio, Portfolio"
]
let y = 1;
for(let i = 1 ; i <= 25;i++){
    
    imgsCreater.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="img-box cls${y}">
                <div class="img">
                    <img src="imgs/portfolio/DemoTemplate${i}_Home.jpg" alt="" />
                </div>
                <div class="info">
                    <a href="#">${wordsC[i]}</a>
                    <p>${sentC[i]}</p>
                </div>
            </div>
        </div>
    `
    if(y <= 2){
        y++
    }else{
        y = 1
    }
}


imgsCreater.querySelectorAll(".cls1").forEach(img => img.parentElement.dataset.ani = "left")
imgsCreater.querySelectorAll(".cls2").forEach(img => img.parentElement.dataset.ani = "down")
imgsCreater.querySelectorAll(".cls3").forEach(img => img.parentElement.dataset.ani = "right")

let imgsDiv = imgsCreater.querySelectorAll(".img img")

imgsDiv.forEach(img => {
    
    img.onmousemove = (e) => {
        console.log(e.layerX,e.layerY);
        if(window.innerWidth < 576){
            if(e.layerX > 1 && e.layerY < -1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${e.layerX / 14}deg)
                                        rotateY(${-1 * (e.layerY / 8)}deg)
                `
            }
            else if(e.layerX > 1 && e.layerY > 1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${-1 *  (e.layerX / 14)}deg)
                                        rotateY(${e.layerY / 8}deg)
                `
            }
            else if(e.layerX < -1 && e.layerY > 1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${(e.layerX / 14)}deg)
                                        rotateY(${-1 *(e.layerY / 8)}deg)
                `
            }
            else if(e.layerX < -1 && e.layerY < -1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${-1 *(e.layerX / 14)}deg)
                                        rotateY(${(e.layerY / 8)}deg)
                `
            }
            
        }else if(window.innerWidth > 576 && window.innerWidth < 768){
            if(e.layerX > 1 && e.layerY < -1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${e.layerX / 24}deg)
                                        rotateY(${-1 * (e.layerY / 14)}deg)
                `
            }
            else if(e.layerX > 1 && e.layerY > 1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${-1 *  (e.layerX / 24)}deg)
                                        rotateY(${e.layerY / 14}deg)
                `
            }
            else if(e.layerX < -1 && e.layerY > 1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${(e.layerX / 24)}deg)
                                        rotateY(${-1 *(e.layerY / 14)}deg)
                `
            }
            else if(e.layerX < -1 && e.layerY < -1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${-1 *(e.layerX / 24)}deg)
                                        rotateY(${(e.layerY / 14)}deg)
                `
            }

            
        }else if(window.innerWidth > 768 && window.innerWidth < 992){
            if(e.layerX > 1 && e.layerY < -1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${e.layerX / 16}deg)
                                        rotateY(${-1 * (e.layerY / 10)}deg)
                `
            }
            else if(e.layerX > 1 && e.layerY > 1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${-1 *  (e.layerX / 16)}deg)
                                        rotateY(${e.layerY / 10}deg)
                `
            }
            else if(e.layerX < -1 && e.layerY > 1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${(e.layerX / 16)}deg)
                                        rotateY(${-1 *(e.layerY / 10)}deg)
                `
            }
            else if(e.layerX < -1 && e.layerY < -1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${-1 *(e.layerX / 16)}deg)
                                        rotateY(${(e.layerY / 10)}deg)
                `
            }
        }else if(window.innerWidth > 992 && window.innerWidth < 1200){
            if(e.layerX > 1 && e.layerY < -1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${e.layerX / 16}deg)
                                        rotateY(${-1 * (e.layerY / 10)}deg)
                `
            }
            else if(e.layerX > 1 && e.layerY > 1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${-1 *  (e.layerX / 16)}deg)
                                        rotateY(${e.layerY / 10}deg)
                `
            }
            else if(e.layerX < -1 && e.layerY > 1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${(e.layerX / 16)}deg)
                                        rotateY(${-1 *(e.layerY / 10)}deg)
                `
            }
            else if(e.layerX < -1 && e.layerY < -1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${-1 *(e.layerX / 16)}deg)
                                        rotateY(${(e.layerY / 10)}deg)
                `
            }
        }else{
            if(e.layerX > 1 && e.layerY < -1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${e.layerX / 20}deg)
                                        rotateY(${-1 * (e.layerY / 12)}deg)
                `
            }
            else if(e.layerX > 1 && e.layerY > 1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${-1 *  (e.layerX / 20)}deg)
                                        rotateY(${e.layerY / 12}deg)
                `
            }
            else if(e.layerX < -1 && e.layerY > 1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${(e.layerX / 20)}deg)
                                        rotateY(${-1 *(e.layerY / 12)}deg)
                `
            }
            else if(e.layerX < -1 && e.layerY < -1){
                img.style.transform = `translate(-50%,-50%) 
                                        rotatex(${-1 *(e.layerX / 20)}deg)
                                        rotateY(${(e.layerY / 12)}deg)
                `
            }
        }
    }
    
    
})



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


setTimeout(() => {
    
    imgsDiv.forEach(div => {
        div.parentElement.style.height = div.clientHeight + "px"
    })
}, 700);
let height = document.querySelector(".pric2 .content .pric-badge .counter").clientHeight;
document.querySelector(".pric2 .content .pric-badge .img").style.height = height + "px";
document.querySelector(".pric2 .content .pric-badge .img").style.lineHeight = height + "px";