// document.querySelector(".slide").addEventListener("mousemove",function(elem){
//     var dim = document.querySelector(".slide").getBoundingClientRect();

//     document.querySelector(".slide img:nth-child(2)").style.clipPath= `circle(10% at ${elem.clientX-dim.left}px ${elem.clientY-dim.top}px)`
// })

// document.querySelector(".slide").addEventListener("mousemove",function(elem){
//     var dim = document.querySelector(".slide").getBoundingClientRect();

//     document.querySelector(".slide img:nth-child(2)").style.clipPath= `circle(0% at ${elem.clientX-dim.left}px ${elem.clientY-dim.top}px)`
// })
var nh1= document.querySelector("#nav>h1"),
nopen= document.querySelector(".navopen");

nh1.addEventListener("click",function(){
    nopen.style.opacity= "1"
    nopen.style.display= "flex"
    nopen.style.height= "35vw"

})

// gsap.to(".navopen",{
//     height: 35
// })
