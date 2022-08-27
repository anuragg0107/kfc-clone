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

let container=[...document.querySelectorAll("#allData")]
let nextBtn=[...document.querySelectorAll(".nxt-btn")]
let prevBtn=[...document.querySelectorAll(".pre-btn")]

container.forEach((item,i)=>{
    let containerDiamensions=item.getBoundingClientRect();
    let containerWidth= containerDiamensions.width;

    nextBtn[i].addEventListener("click",()=>{
        item.scrollLeft +=containerWidth;
    })
    prevBtn[i].addEventListener("click",()=>{
        item.scrollLeft -=containerWidth
    })
})