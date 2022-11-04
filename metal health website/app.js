const slides = document.querySelectorAll(".slider");
const prevBtb = document.querySelector(".prev");
let index = 0;


function prev(){

   slides[index].classList.remove("active");
   index = (index-1 + slides.length) % slides.length; 
   slides[index].classList.add("active");
  

}

function next(){
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length; 
        slides[index].classList.add("active");
}
setInterval(next,7000);

// window.sr = ScrollReveal({
//         reset:true,
//         distance:"25rem",
//         duration:2500,
//         delay:300,
// });

// sr.reveal(".animate-left",{
//         origin:"left",
//         distance:"25rem",
//         delay:500,
// });
// sr.reveal(".animate-right",{
//         origin:"right",
        
//         distance:"25rem",
//         delay:700
// });
// sr.reveal(".animate-bottom",{
//         origin:"bottom",
        
//         distance:"25rem",
//         delay:600
// });
// sr.reveal(".animate-top",{
//         origin:"top",
        
//         distance:"25rem",
//         delay:700
// });

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();


const arrowUP = document.querySelector(".up");
window.addEventListener("scroll",()=>{
if(window.pageYOffset>100){
        arrowUP.classList.add("active");
}else{
        arrowUP.classList.remove("active");    
}
})

const  navList = document.querySelector(".list");
const bigWrapper = document.querySelector(".big-container")
const menuButton = document.querySelector(".menu-toggle")

function navigation(){
        menuButton.addEventListener("click",()=>{
                bigWrapper.classList.toggle("activee")
        })
}
navigation()
const navLinks = document.querySelectorAll(".nav-list")

navLinks.forEach(itemsNav=>{
        itemsNav.addEventListener("click",()=>{
                bigWrapper.classList.remove("activee")      
        })
})