var tl = gsap.timeline()


// INITIAL ANIMATION 
function inANimation(){

    gsap.from(".nav",{
        y:-200,
        duration:0.75,
        delay:0.75,
        // ease:"power3.out",
        
    })

    tl.from(".leaf img",{
        y:"100%",
        delay:0.5
    })
    gsap.from(".hero .text",{
        x:-800,
        duration:0.75,
        
        
    })
    gsap.from(".hero-text p",{
        x:"-200%",
        duration:0.75,
        delay:0.2
    })
    gsap.from(".hero-text .btn",{
        x:-800,
        duration:0.75,
        delay:0.4
    })

    
}
inANimation();



// START BUTTON ANIMATION     

function outAnimation(){
    gsap.from(".waste-segregation-page",{
        y:"100%",
        duration:1,
    })
    document.querySelector(".waste-segregation-page").style.display = "flex";
}
var btn = document.querySelector(".btn");
btn.addEventListener("click",outAnimation)


// NAV BUTTON OUT ANIMATION 

var navbtn = document.querySelector(".link-container > h1")
navbtn.addEventListener("focus",()=>{
    document.querySelector(".link-container").style.display = "none"
})

// WASTE SEGREGATION BUTTON ANIMATION 

var wastebtn = document.querySelector(".wastebtn")
wastebtn.addEventListener("click",()=>{
    aboutSection.style.zIndex = 9
    P.innerHTML = "Drag and drop or click here <br> to upload image"
    imageview.src="asset/image-upload-concept-landing-page.png"
    document.querySelector(".waste-segregation-page").style.display = "flex";
    gsap.from(".waste-segregation-page",{
        y:"100%",
        duration:1,
    })
    // location.reload(true)
})


// ABOUT US SECTON 
var aboutSection = document.querySelector(".about-us-section")
var about = document.querySelector(".aboutbtn")
about.addEventListener("click",()=>{
    aboutSection.style.zIndex = 11
    aboutSection.style.display = "flex"
    gsap.from(".about-us-section",{
        x:"100%",
        duration:0.75,
        delay:0.5
    })
    
})




// IMAGE TAKING

const dropArea = document.querySelector("#drop-area")
const inputfile = document.querySelector("#image-zone")
const imageview = document.querySelector(".uploadImg")
const P = document.querySelector("#img-view p")

inputfile.addEventListener("change",uploadImage)

function uploadImage(){
    let imglink = URL.createObjectURL(inputfile.files[0]);
    imageview.src = imglink
    P.innerHTML = "SELECTEDIMAGE"
}

dropArea.addEventListener("dragover",function(e){
    e.preventDefault();
})
dropArea.addEventListener("dragover",function(e){
    e.preventDefault();
    inputfile.files = e.dataTranfer.files;
})



// START BUTTON 
    

// GAME SECTION 

var gamebtn = document.querySelector(".gamesbtn")

gamebtn.addEventListener("click",()=>{
    
    gsap.from()
})