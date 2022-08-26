document.querySelector("form").addEventListener("submit",Func)

let load=document.getElementById("preload")
window.addEventListener("load",function(){
    load.style.display="none"
})



let verified=JSON.parse(localStorage.getItem("order num")) || 10000;
function Func(event){
    event.preventDefault();
    let orderArr=[];
    let verify_num=document.querySelector("#otp").value;
    if(verify_num==1234)
    {
        window.location.href="pay.html";
        verified=verified+1;
        localStorage.setItem("order num",JSON.stringify(verified))
        
    }
    else{
        alert("Invalid OTP");
        window.location.href="checkout.html";
    }

}