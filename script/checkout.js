document.querySelector("#gobackmenu").addEventListener("click", backtomenu);
function backtomenu() {
    window.location.href = "index.html"
}
document.querySelector("#login").addEventListener("click", loginPage);
function loginPage() {
    window.location.href = "login.html"
}

let load=document.getElementById("preload")
window.addEventListener("load",function(){
    load.style.display="none"
})

// data

let cartarray = JSON.parse(localStorage.getItem("product_data")) || [];

let nos = cartarray.length;
document.querySelector("thead").textContent = `${nos} ITEM`

let subtotal = cartarray.reduce(function (ac, el) {
    return ac + Number(el.price);
}, 0);
document.querySelector(".subtotal").textContent = `$ ${subtotal.toFixed(2)}`

let tax = subtotal * (0.12);
document.querySelector(".tax").textContent = `$ ${tax.toFixed(2)}`

let estimated = tax + subtotal
document.querySelector(".estimated").textContent = `$ ${estimated.toFixed(2)}`

document.querySelector(".paybutton").value = `Pay $${estimated.toFixed(2)}`

document.querySelector("#paymentinfo").addEventListener("submit", myFunction)
function myFunction(event) {
    event.preventDefault();
    let nameoncard = document.querySelector("#nameoncard").value;
    let card = document.querySelector("#card").value;
    let exp = document.querySelector("#exp").value;
    let cvv = document.querySelector("#cvv").value;

    localStorage.setItem("finalpayable", estimated);
    if ((nameoncard == "anurag"||nameoncard == "suyasha"||nameoncard =="vijay" ||nameoncard =="ganesh" ||nameoncard =="rupesh" 
    ||nameoncard ==  "Suyasha Ratha")&& card == 123456789 && cvv == 1234 && exp == "11/25") {
        console.log("success")
        window.location.href = "otp.html";
        alert(`Total payable is ${val.toFixed(2)}`)
    }
    else {
        alert("Invalid Details")
    }
}
