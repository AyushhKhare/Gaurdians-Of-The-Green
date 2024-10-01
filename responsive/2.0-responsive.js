var tl = gsap.timeline()


// INITIAL ANIMATION 
function inANimation(){

    gsap.from(".nav",{
        y:-200,
        duration:0.75,
        delay:0.75,
        ease:"power3.out",
        
    })

    gsap.from(".hero .text,.leaf img ",{
        x:-800,
        duration:0.75,
        delay:0.5,
        
    })

    gsap.from(".hero-text p",{
        x:-1400,
        duration:0.75,
        delay:0.4,
    })
    
    gsap.from(" .hero .hero-text .btn",{
        x:-800,
        duration:1,
        // delay:0.7,   
    })
}
inANimation();



// START BUTTON ANIMATION     

function outAnimation(){
    document.querySelector(".hero-text p").style.display="none"
    gsap.to(".leaf img",{
        x:-800,
        duration:0.75,
        
    })
    gsap.to(".hero .text , p",{
        x:-800,
        duration:1,
        
    })
    
    gsap.to(".btn",{
        x:-500,
        opacity:1,
        duration:0.75,
        
    })

    document.querySelector(".waste-segregation-page").style.display = "flex";
    gsap.from(".process",{
        y:800,
        duration:0.5,
        delay:1
    })
}
var btn = document.querySelector(".btn");
btn.addEventListener("click",outAnimation)


// HOME BUTTON ANIMATION 

var homeBtn = document.querySelector(".home")
homeBtn.addEventListener("click",()=>{
    inANimation();
    document.querySelector(".waste-segregation-page").style.display = "none";
})

// WASTE SEGREGATION BUTTON ANIMATION 

var wastebtn = document.querySelector(".wastebtn")
wastebtn.addEventListener("click",()=>{
    document.querySelector(".waste-segregation-page").style.display = "block";
    gsap.from(".waste-segregation-page",{
        y:2000,
        duration:1,
    })
})


// ABOUT US SECTON 

var about = document.querySelector(".aboutbtn")
about.addEventListener("click",()=>{
    document.querySelector(".contact").style.display = "block";
    gsap.from(".contact",{
        x:2000,
        duration:0.75,
    })
    
})


// let image = document.querySelector("label img")
// let input = document.querySelector("#input-file")

// input.onchange = function(){
//     image.src = URL.createObjectURL(input.files[0]);
// }

// image.addEventListener("drogover",function(e){
//     e.preventDefault();
// });
// image.addEventListener("drop",function(e){
//     e.preventDefault();
//     input.files = eldataTransfer.files;
// });

