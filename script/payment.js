let totalpay= localStorage.getItem("finalpayable")
document.querySelector("#payed").textContent=`Payed $${totalpay}`

document.querySelector("#gobackhome").addEventListener("click", homePage);
function homePage(){
    window.location.href="index.html"
}
var ordervalue=JSON.parse(localStorage.getItem("order num"))
document.querySelector("#order_id").textContent="Order-No.-#"+ordervalue;
console.log(ordervalue)
localStorage.removeItem("product_data")
