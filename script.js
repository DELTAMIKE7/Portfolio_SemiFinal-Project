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



function slide() {
    document.querySelectorAll(".slide").forEach(function (slide) {
        slide.addEventListener("mousemove", function (dets) {
            var dim = slide.getBoundingClientRect();
            this.children[1].style.clipPath = `circle(15% at ${dets.clientX - dim.left}px  ${dets.clientY - dim.top}px)`;
        })
    })
}
document.querySelectorAll(".slide").forEach(function (slide) {
    slide.addEventListener("mouseout", function (dets) {
        var dim = slide.getBoundingClientRect();
        this.children[1].style.clipPath = `circle(0% at ${dets.clientX - dim.left}px  ${dets.clientY - dim.top}px)`;
    })
})
slide()

function skew_maker() {
    var dim1 = document.querySelector(".slide").getBoundingClientRect();
    var prev = dim1.left;


    document.querySelector(".project").addEventListener("scroll", function (elmm) {
        var dim2 = document.querySelector(".slide").getBoundingClientRect();
        var diff = prev - dim2.left;
        document.querySelectorAll(".slide").forEach(function (elm) {
            elm.style.transform = `skew(${diff * .07}deg)`; 
        })
        prev = dim2.left;
        
    })
}
skew_maker()



var nopen = document.querySelector(".navopen");
var cls = document.querySelector("#cls");
var flag= 1;
document.querySelector("#dix").addEventListener("mouseover",function(){ 
    if(flag===1){
        nopen.style.display="flex"
        lolo();
        flag=0;
    }
    // nopen.addEventListener("mouseover",function(){
    //     if(flag===1){
    //         nopen.style.display="flex"
    //         lolo();
    //     }
    // })


}
)
cls.addEventListener("click",function(){
    nopen.style.display="none"
    flag=1;

})


function lolo(){
gsap.to(".navopen",{
    width: "28vw",
    padding: "14vh 2vw",
    height: "fit-content",
    opacity: 1
})
}
function tolo(){
    gsap.from(".navopen",{
        width: "0vw",
        padding: "0vh 0",
        height: "0vh",
        opacity: 0,
    })
    }