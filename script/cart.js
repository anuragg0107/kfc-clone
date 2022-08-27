

let arr = JSON.parse(localStorage.getItem("product_data"))||[];
// let obj = {
//     name:"Wednesday Bucket", image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000373.jpg?ver=19.29",
//     qty:2, price:350.48
// }
// arr.push(obj);
// console.log(arr)
// localStorage.setItem("product_data",JSON.stringify(arr))
// let Discount = 0;
//     localStorage.setItem("coupon",JSON.stringify(Discount));
// let arr2 = [
//     {
//         name:"PEPSI PET",image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K350.jpg?ver=19.73",
//         qty:1, price:57.14
//     },{
//         name:"POPCORN NACHOS", image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K664.jpg?ver=19.73",
//         qty:1, price:169
//     },{
//         name:"CHACO MUD PIE",image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K496.jpg?ver=19.73",
//         qty:1, price:128.57
//     },{
//             name:"Wednesday Bucket", image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000373.jpg?ver=19.29",
//             qty:2, price:350.48
//         }
// ]
// localStorage.setItem("recommend",JSON.stringify(arr2));
append1(arr);

                            //   all the cart data appended function
function append1(arr){
    let cont = document.getElementById("part2a");
    let cont2 = document.getElementById("part2b");
        cont.innerHTML="";
        cont2.innerHTML="";
    if(arr.length==0){                                //if cart is empty
        let x = document.getElementById("part2");
        x.removeAttribute("id");
        let div=document.createElement("div");
        div.id = "noitems";
        let div1= document.createElement("div");
        let div2= document.createElement("div");
        let img = document.createElement("img");
        img.src = "https://online.kfc.co.in/static/media/empty_cart.32f17a45.png";
        div2.append(img);
        let head = document.createElement("h1");
        head.innerText="YOUR CART IS EMPTY. LET'S START AN ORDER!";
        let btn = document.createElement("button");
        btn.innerText="Start Order"
        btn.addEventListener("click", function (){
            window.location.assign("menu.html")
        })
        div1.append(head,btn);
        div.append(div1,div2);
        x.append(div);
     } else {   
                                            //it items present in the cart
              arr.forEach((el,i) => {
                var x = document.getElementById("part2a");
                let div=document.createElement("div");
                div.id = "items";
                let div1= document.createElement("div");
                let div2= document.createElement("div");
                let div3= document.createElement("div");
                let div4= document.createElement("div");
                let img = document.createElement("img");
                img.src = el.image;
                div1.append(img);
    
    
                let head = document.createElement("p");
                head.innerText= el.name;
                let remove = document.createElement("div");
                remove.innerText="Remove";
                remove.style.color="red";
                remove.style.textDecoration="underline";
                remove.style.cursor="pointer";
                remove.addEventListener("click",function(){
                    removefunc(i,arr);
                })
                div2.append(head,remove);
    
    
                let n =el.qty;
                let price = document.createElement("p");
                el.price = +(el.price)
                price.innerText= `Rs ${el.price.toFixed(2)}/-`;
                let z = el.price / el.qty;
    
                let minus = document.createElement("div");
                minus.innerText="-";
                minus.className="change"
                minus.addEventListener("click",function(){
                    minusfunc(showqty,price,z,minus,el);
                })
                let showqty = document.createElement("div");
               showqty.innerText=n;
                let plus = document.createElement("div");
                plus.innerText="+";
                plus.className="change"
                plus.addEventListener("click",function(){
                    plusfunc(showqty,price,z,minus,el);
                })
                if(n<=1){
                    minus.style.opacity="0.2";
                    minus.style.background="none"
                    minus.style.cursor="not-allowed"
                    n=1;
                }
               
            
                div3.append(minus,showqty,plus);
    
                div4.append(price);
                div.append(div1,div2,div3,div4);
                x.append(div)
            });
           append2();
           append3();

                                        //code for cart removeall and add more buttons
           let x = document.getElementById("part2a");
    
           let div = document.createElement("div");
           div.id="removeall"
           let p1 = document.createElement("p");
           p1.innerText= "Remove All";
           p1.addEventListener("click", removeallfunc)
           let p2 = document.createElement("div");
           p2.innerText= "Add More Menu";
           div.append(p1,p2);
        
           x.append(div);
        }
}
                                           // quantity plus function
function plusfunc(showqty,price,p,minus,el){
    minus.style.opacity="1";
    minus.style.cursor="pointer"
     let k = showqty.innerText;
     k++;
     showqty.innerText=k;
     console.log(p)
       p =k*p;
       price.innerText=`Rs ${p}/-`;
       el.qty = k;
       el.price = p;
       localStorage.setItem("product_data",JSON.stringify(arr))
   append1(arr)
}

                                             //  quantity minus function
function minusfunc(showqty,price,p,minus,el){
    let k = showqty.innerText;
    k--;
    if(k<=1){
        minus.style.opacity="0.2";
        minus.style.cursor="not-allowed"
        minus.style.background="none"
        k=1;
    }else {
        minus.style.opacity="1";
    }
    showqty.innerText=k;
    console.log(p)
      p =k*p;
      price.innerText=`Rs ${p}/-`;
      el.qty = k;
      el.price = p;
      localStorage.setItem("product_data",JSON.stringify(arr))
      append1(arr);
}

                                    // remove a specific Item function
function removefunc(i,arr){
   arr.splice(i,1);
   localStorage.setItem("product_data",JSON.stringify(arr))
   append1(arr)
}

                                    //Remove all items in cart function
function removeallfunc(){
    let z = [];
    localStorage.setItem("product_data",JSON.stringify(z));
    let arr = JSON.parse(localStorage.getItem("product_data"))||[];
    console.log(arr.length)
    append1(arr);
    let cont2 = document.querySelector(".part3");
    cont2.innerHTML="";
     window.location.reload()
}

                                    //checkout function to enter checkout page
function checkoutfunc(x){
    localStorage.setItem("cartdata",JSON.stringify(x.toFixed(2)));
    window.location.assign("checkout.html");

}

                                    //donate 5 ruppees function 
function donatefunc(x,checkout,p2){
    if(x.checked==true){
        checkout = checkout-5;
        p2.innerText=`Rs ${checkout.toFixed(2)}/-`
    }else {
        p2.innerText=`Rs ${checkout.toFixed(2)}/-`
    } 
}



                                //append the subtotal data function
function append2(){

    let cont2 = document.getElementById("part2b");
    cont2.innerHTML="";
    let arr1 = JSON.parse(localStorage.getItem("product_data"))||[];
    let div = document.createElement("div");
    div.id= "subtotal";
    let qty = document.createElement("h3");
    let total = arr1.reduce(function(a,b){
        return a+b.qty;
    },0) 
   console.log(total)
    qty.innerText= `${total} ITEM`;
    let div1 = document.createElement("div");
    div1.id = "div1"
    let div1a = document.createElement("div");
    div1a.innerText= "%";
    let div1b = document.createElement("div");
    div1b.innerText="Apply Offers & Deals "
    let div1c = document.createElement("div");
    div1c.innerText= "View All";
    div1.append(div1a,div1b,div1c);

    let subtotal = arr1.reduce(function(a,b){
        return a+b.price;
    },0) 
    let div2 = document.createElement("div");
    div2.id = "div2"
    let div2a = document.createElement("div");
    div2a.innerText= "Subtotal";
    subtotal = +(subtotal);
    let div2b = document.createElement("div");
    div2b.innerText=`Rs ${subtotal.toFixed(2)}/-`;
    div2.append(div2a,div2b)
    div1c.addEventListener("click", function(){
        offerfunc(subtotal.toFixed(2));
    })

    let gst = 5 * subtotal /100;
    gst = gst;
    gst = +(gst);
    console.log(gst)
    let div3 = document.createElement("div");
    div3.id = "div2"
    let div3a = document.createElement("div");
    div3a.innerText= "GST";
    let div3b = document.createElement("div");
    div3b.innerText=`Rs ${gst.toFixed(2)}/-`;
    div3.append(div3a,div3b)

    let div4 = document.createElement("div");
    div4.id = "div2"
    let div4a = document.createElement("div");
    div4a.innerText= "Restaurant Handling (Incl. Taxes)";
    let div4b = document.createElement("div");
    let fee = 35.00;
    div4b.innerText=`Rs ${fee}/-`;
    div4.append(div4a,div4b);

    let Discount =JSON.parse(localStorage.getItem("coupon"))||0;
    Discount = +(Discount);
    console.log(Discount)
    var discdiv = document.createElement("div");
    discdiv.id="div2"
    if(Discount==100){
         let diva = document.createElement("div");
         let span = document.createElement("span");
         span.innerHTML="❌"
         span.style.cursor="pointer";
         span.addEventListener("click", removediscount)
         diva.innerHTML= `Discount(MASAI100)`;
         diva.append(span)
         let divb = document.createElement("div");
         divb.innerHTML= `-Rs ${Discount}/-`;

         discdiv.append(diva,divb)
    }else {
        discdiv.innerHTML="";
    }
    var checkout = subtotal + gst + fee - Discount;
    let div5 = document.createElement("div");
    div5.id = "div5"
    let div5a = document.createElement("div");
      let x = document.createElement("input");
      x.type="checkbox";
      div5a.append(x)
    let div5b = document.createElement("div");
     let a = document.createElement("h3");
     a.innerText="Donate ₹5.00 Tick to Add Hope."
     let b = document.createElement("p");
     b.innerText="Our goal is to feed 20 million people by 2022."
     div5b.append(a,b)
    let div5c = document.createElement("div");
    let img2 = document.createElement("img");
    img2.src="data:image/png;base64,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"
    div5c.append(img2)

    div5.append(div5a,div5b,div5c);

    let div6 = document.createElement("div");
    div6.id="div6"
    let p1 = document.createElement("p");
    p1.innerText="Checkout"
    let p2 = document.createElement("p");
    x.addEventListener( "click",function(){
       donatefunc(x,checkout,p2);
      } )
    p2.innerText=`Rs ${checkout.toFixed(2)}/-`
    div6.append(p1,p2);
    div6.addEventListener("click",function(){
        checkoutfunc(checkout);
    })


    div.append(qty,div1,div2,div3,div4,discdiv,div5,div6)
    let ch = document.getElementById("part2b")
    ch.append(div)
}


let k=document.querySelectorAll("li>label");
console.log(k[0])
for(let a=0; a<k.length; a++){
    
    k[a].addEventListener("click",closefunc)
function closefunc(){
    // event.preventDefault();
    if(k[a].lastElementChild.id == "arrow"){
        k[a].lastElementChild.removeAttribute("id")
        console.log(k[a].lastElementChild)
        return;
    } else {
        k[a].lastElementChild.id="arrow";
    }

}
}

                                //Onload kfc anime function
let load=document.getElementById("preload")
window.addEventListener("load",function(){
    load.style.display="none"
})

                             //Apply Offer and coupon function;
function offerfunc(x){
       let cont = document.getElementById("offer");
    let div = document.createElement("div");

    let div0 = document.createElement("div");
    div0.id="offer1"
    let p1 = document.createElement("h2");
    p1.innerHTML="❮"
    p1.style.cursor="pointer";
    let p2 = document.createElement("h2");
    p1.addEventListener("click",function (){
        offerclosefunc(cont)
    })
    p2.innerText="OFFERS & DEALS";
    let p3 = document.createElement("h2");
    p3.innerHTML="&#10006;"
   p3.style.cursor="pointer";
    p3.addEventListener("click",function (){
        offerclosefunc(cont)
    })
    div0.append(p1,p2,p3);

    let div1 = document.createElement("div");
    div1.id="offer2";
    
    let div1a= document.createElement("div");
    let p4= document.createElement("h3");
    p4.innerText="HAVE A DISCOUNT CODE?";
    let p5 = document.createElement("p");
    p5.innerText="You can only apply one coupon per order.";
    div1a.append(p4,p5);

    let div1b = document.createElement("div");
    let p6 = document.createElement("p");
    p6.innerText="Discount Code"
    let p7 = document.createElement("input");
    p7.placeholder="Enter code"
    p7.id="input";
    div1b.append(p6,p7);

    let div1c = document.createElement("div");
    div1c.innerText="Apply";
    div1c.addEventListener("click",function (){
        applyfunc(x);
    })

    div1.append(div1a,div1b,div1c)

    let div2 = document.createElement("div");
    div2.id="offer3";

    let p8 = document.createElement("h2");
    p8.innerText="OFFERS & DEALS FOR YOU";
    let p9 = document.createElement("p");
    p9.innerText="See Exclusive Offers & Deals Below"
    div2.append(p8,p9);

    let div3 = document.createElement("div");
    div3.id="offer4";

    let div3a = document.createElement("div");
    let img = document.createElement("img");
    img.src = "https://images.yourstory.com/cs/images/companies/Masai-1597756802133.jpg?fm=png&auto=formatar=1:1&mode=fill&fill=solid";
    div3a.append(img);

    let div3b = document.createElement("div");
    let p10 = document.createElement("p");
    p10.innerText="Expires on 31/12/2022";
    let p11 = document.createElement("h3");
    p11.innerText="THE SPECIAL MASAI SCHOOL COUPON FOR YOU";
    let p12 = document.createElement("p");
    p12.innerText="Get A Flat Discount Of 100 Ruppees On The Cart Value Of Above 500";
    div3b.append(p10,p11,p12);

    let div3c = document.createElement("div");
    div3c.id="redeem";
    div3c.innerText="Redeem";
    div3c.addEventListener("click",function(){
        redeemfunc(x)
    })
    div3.append(div3a,div3b,div3c);
    div.append(div0,div1,div2,div3);
    console.log(cont)
    div.id="offer0"
    cont.append(div);
    document.querySelector("body").style.overflow="hidden";
    let body =document.querySelector(".container")
   body.id="container";
}

                          //offer closes function
function offerclosefunc(x){
    x.innerHTML="";
    console.log(x);
    document.querySelector("body").style.overflow="auto";
    let body =document.querySelector(".container")
    body.removeAttribute("id");
}

                    //offfer Reddems function 
function redeemfunc(){
    document.getElementById("input").value="MASAI100";
}

                    //Apply the coupon function
function applyfunc(x){
    let k=document.getElementById("input");

    if(k.value=="MASAI100"){
        x= +(x);
        if(x>500){
         x=x-100;
         let z= JSON.parse(localStorage.getItem("coupon"));
         if(z==100){
            alert("coupon code already applied")
         }else{
            let k = 100;
         localStorage.setItem("coupon",JSON.stringify(k))
         alert("Coupon Applied")
        document.getElementById("offer").innerHTML="";
        document.querySelector("#container").style.overflow="auto";
        let body =document.querySelector(".container");
   body.removeAttribute("id");
          window.location.reload()
         }
         
    } else {
        alert("the coupon will be applied for the subtotal above 500 only")
    }
} else {
    alert("The Coupon code you entered is not available")
}
}

                                    //discount removal function
function removediscount(){
    localStorage.setItem("coupon",JSON.stringify("0"));
    window.location.reload();
}
                   
                                // append 3 function
function append3(){
   
    let arr2=JSON.parse(localStorage.getItem("recommend"))||[];
    let cont2 = document.querySelector(".part3");
    cont2.innerHTML="";
    cont2.id="recomend"
    let diva = document.createElement("div");
    diva.id="part3"
    arr2.forEach((el,i) => {
          let div = document.createElement("div");
          div.style.backgroundImage=`url(${el.image})`
          let name = document.createElement("h3");
          name.innerText=el.name;
          let cost = document.createElement("p");
          cost.innerText=el.price;
          let  btn = document.createElement("div");
          btn.innerText="Add to Cart"
          btn.id="btn"
          btn.addEventListener("click", function(){
            addcartfunc(el,arr2,i);
          })
          div.append(name,cost,btn);
          diva.append(div);
    });
    let divb = document.createElement("div");
    divb.className="part3b";
    cont2.append(diva,divb)
}

                                   // add the selected item to cart function
function addcartfunc(x,arr2,i){
    let arr = JSON.parse(localStorage.getItem("product_data"))||[];
    arr.push(x);
    localStorage.setItem("product_data",JSON.stringify(arr));
    append1(arr);
    arr2.splice(i,1);
    localStorage.setItem("recommend",JSON.stringify(arr2));
    append3(arr);
    append2(arr);
}
