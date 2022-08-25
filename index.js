let load=document.getElementById("preload")
window.addEventListener("load",function(){
    load.style.display="none"
})
let slideIndex=0;
slideShow()

function slideShow(){
    let i;
    let slides=document.getElementsByClassName("kfc-poster");
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex=1;
        }
        slides[slideIndex-1].style.display="block";
        setTimeout(slideShow,5000)
}