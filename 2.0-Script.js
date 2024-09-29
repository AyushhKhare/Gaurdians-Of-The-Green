var tl = gsap.timeline()

gsap.from(".nav",{
    y:-200,
    duration:0.75,
    delay:1,

})

gsap.from(".leaf img",{
    x:-800,
    duration:0.75,
    delay:0.5,
    
})
gsap.from(".hero .text , p",{
    x:-800,
    duration:0.75,
    delay:0.5,
    
})

/* to be resolved(side button still appears on the left) */
gsap.to(".btn",{
    opacity:1,
    duration:0.75,
    delay:1.5
})

gsap.from(".btn",{
    x:-500,
    duration:0.75,
    delay:1.5
})

/* isko bhi dekh lena */
gsap.to(".illust img",{
    opacity:1,
    x:-100,
    duration:1,
    delay:0.75
})


var btn = document.querySelector(".btn");
var wastebtn = document.querySelector(".wastebtn")


btn.addEventListener("click",()=>{
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
    
    gsap.to(".illust img",{
        opacity:0,
        duration:0.75,
    })

    document.querySelector(".process").style.display = "flex";
    gsap.from(".process",{
        y:800,
        duration:0.5,
        delay:1
    })
})

wastebtn.addEventListener("click",()=>{
    document.querySelector(".contact").style.display = "none";
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
    
    gsap.to(".illust img",{
        opacity:0,
        duration:0.75,

    })

    document.querySelector(".process").style.display = "flex";
    gsap.from(".process",{
        y:800,
        duration:0.5,
        delay:1
    })
})


var about = document.querySelector(".aboutbtn")
about.addEventListener("click",()=>{
    document.querySelector(".contact").style.display = "block";
    gsap.from(".contact",{
        x:2000,
        duration:0.75,
    })
    
})
    


let image = document.querySelector("label img")
let input = document.querySelector("#input-file")

input.onchange = function(){
    image.src = URL.createObjectURL(input.files[0]);
}

image.addEventListener("drogover",function(e){
    e.preventDefault();
});
image.addEventListener("drop",function(e){
    e.preventDefault();
    input.files = eldataTransfer.files;
});

