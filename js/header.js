// start writing animation
let words = ["blog", "shop", "Showcase"],
    x = 0,
    index = 0,
    status = true,
    delay = 2000,
    span = document.getElementById("changing-words"),
    nextSpan = span.nextElementSibling,
    wordsWritterTimer = setInterval(wordsWritter, 100);

function wordsWritter() {
    if (x > words.length - 1) {
        x = 0;
    }
    if (index < words[x].length && status == true) {
        index++;
    }else{
        clearInterval(wordsWritterTimer);
        if (delay == 2000) {
            //nextSpan.style.animation = "opacity ease-in-out .7s infinite";
            theStyleOfAnimation(nextSpan,"opacity ease-in-out .7s infinite")
        }
        setTimeout(() => {
            delay = 0;
            clearWords();
            wordsWritterTimer = setInterval(wordsWritter, 100);
        }, delay);
        return;
    }
    //nextSpan.style.animation = "none";
    theStyleOfAnimation(nextSpan,"none")

    span.textContent += words[x].substring(index - 1, index);
}
function clearWords() {
    status = false;
    theStyleOfAnimation(nextSpan,"none")
    span.textContent = span.textContent.slice(0, index);
    if (index > 0) {
        index--;
    } else {
        status = true;
        delay = 2000;
        return x++;
    }
}

// end writting animation 
// start counter animation
let numbersContent = document.querySelectorAll(".header .content .second span"),
    numbers = [27,38,12];
numbersContent.forEach((number,index) => {
    let counter = setInterval(() => {
        if(number.textContent == numbers[index] ) {
            clearInterval(counter)
            return
        }
        number.textContent = parseInt(number.textContent) + 1
    }, 1500 / numbers[index])
})

// end counter animation
// start nav open and close

let open = document.querySelector(".open"),
    theOpened = document.querySelector(".swimming"),
    items = document.querySelector(".swimming .items"),
    close = document.querySelector(".close"),
    oneToTwo = document.querySelectorAll(".oneToTwo"),
    aniD = 0.00;
open.onclick = () => {
    document.body.style.overflow = "hidden";
    gsap.to(".swimming" , {duration:0,delay:0,display:"block"})
    gsap.to(".swimming", {duration:.25,opacity:1})
    if(window.innerWidth > 768){
        oneToTwo.forEach(ele => {
            theStyleOfAnimation(ele , `oneToTwo .2s linear ${aniD += .1}s forwards`)
        })
    }
    setTimeout(() => {
        items.style.left = "0"
    },250)
}
close.onclick = () => {
    document.body.style.overflow = "visible"
    document.body.style.overflowX = "hidden"
    //close.style.animation = "follow .2s linear"
    if(window.innerWidth < 768){
            theStyleOfAnimation(close,"follow .2s linear")
        setTimeout(() => {
        items.style.left = "-100%"
        
            setTimeout(() => {
                //close.style.animation = "none"
                theStyleOfAnimation(close,"none")
                gsap.to(".swimming", {duration:.5,opacity:0})
                gsap.to(".swimming" , {duration:.1,delay:.5,display:"none"})
                if(window.innerWidth > 768){
                    aniD = 0.00
                    oneToTwo.forEach(ele => {
                        theStyleOfAnimation(ele , `none`)
                    })
                }
            },260)
        },200)
    }else{
        theStyleOfAnimation(close,"follow .2s linear")
        setTimeout(() => {
            
            theStyleOfAnimation(close,"none")
            gsap.to(".swimming", {duration:.5,opacity:0})
            gsap.to(".swimming" , {duration:.1,delay:.5,display:"none"})
            
                aniD = 0.00
                oneToTwo.forEach(ele => {
                    theStyleOfAnimation(ele , `none`)
                })
            
        },200)
    }
}





// end nav open and close
document.onkeyup = (e) => {
    console.log(e.keyCode);
    if(e.keyCode == 27 || 8){
        items.style.left = "-100%"
    
        setTimeout(() => {
            theOpened.style.display = "none"
        },260)
    }
}


// mouse enter
let li = document.querySelectorAll(".second section")
let section = document.querySelectorAll(".second section ")
let fSpan = document.querySelectorAll(".second section > span ")
let a = document.querySelectorAll(".second section a ")
let sSpan = document.querySelectorAll(".second section a span ")
let items2 = document.querySelector(".items")
// let ul = document.querySelector(".items ul:nth-of-type(2)")
let uls  = document.querySelectorAll(".contentOfLists ul")
let contentOfLists  = document.querySelector(".contentOfLists ")
let active = document.querySelector(".contentOfLists .active")
section.forEach((section,index) => {
    section.onmouseover = (e) => {
        section.style.transform = "translatex(20px)"
        a[index].style.color = "rgba(255,255,255,.4)"
        fSpan[index].style.transform = "rotate(45deg)"
        fSpan[index].style.color = "#D90A2C"

        sSpan[index].style.transform = "translateY(-28%) translatex(25px)"
        sSpan[index].style.opacity = "0"
        uls.forEach(ul => {
            if(e.target.dataset.ms == ul.dataset.ms){
                ul.classList.add("active")
                // ul.querySelectorAll("li").style.animation = "animation: linear oneToTwo forwards .2s ;"
                ul.querySelectorAll("li").forEach(li => {
                    theStyleOfAnimation(li,`linear oneToTwo forwards .2s ${aniD += .1}s`)
                })
               
            }
        })
    }
    section.onmouseout = (e) => {
        section.style.transform = "translatex(0px)"
        a[index].style.color = "rgba(255,255,255,1)"
        fSpan[index].style.transform = "rotate(0deg)"
        fSpan[index].style.color = "rgba(255,255,255,.4)"
        sSpan[index].style.transform = "translateY(-28%) translatex(0px)"
        sSpan[index].style.opacity = "1"
        uls.forEach(ul => {
            
            if(e.target.dataset.ms == ul.dataset.ms){
                ul.classList.remove("active")
                aniD = 0.00
                ul.querySelectorAll("li").forEach(li => {
                    theStyleOfAnimation(li,`none`)
                })
            }
        })
    }
})
items2.onmousemove = (e) => {
   
}
// function mdNav (arr,index){
//         Object.keys(arr[0])[0].style.transform = arr[0].section
//         Object.keys(arr[1])[0][index].style.color =  arr[1].a[index]
//         Object.keys(arr[2])[0][index].style.transform =  arr[2].fSpan[index]
//         Object.keys(arr[3])[0][index].style.color = arr[3].fSpan[index]

//         Object.keys(arr[4])[0][index].style.transform = arr[4].sSpan[index]
//         Object.keys(arr[5])[0][index].style.opacity = arr[5].sSpan[index]
// }

// let items2 = document.querySelector(".items")
// let ul = document.querySelector(".items ul:nth-of-type(2)")
// let uls  = document.querySelectorAll(".contentOfLists ul")
// let contentOfLists  = document.querySelector(".contentOfLists ")


// ul.onmouseover = (e) => {
//     uls.forEach(ul => ul.classList.remove("active"))
//     uls.forEach(ul => {
        
//         if(e.target.dataset.ms == ul.dataset.ms){
//             ul.classList.add("active")
//             let arr = Array.from(ul.children)
//             arr.forEach(child => {
//                 child.classList.add("active")
//             })
//         }
//     })
    
// }
// items2.onmousemove = (e) => {
//     if(e.target.classList == "active"){
//         e.target.onmouseout = () => {
//             console.log("fuckkkk");
//         }
//     }
// }

// imgs animation
gsap.from(".header .container-fluid", {duration: .6, x:-800,opacity:0})
gsap.from(".l", {duration: .6, x:150,opacity:0})
gsap.from(".md", {duration: .6, y:150,opacity:0})
gsap.from(".r", {duration: .6, x:-150,opacity:0})
// main functions
function theStyleOfAnimation(ele,val){
    ele.style.animation = val
}

