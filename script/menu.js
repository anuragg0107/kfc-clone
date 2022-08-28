let array=JSON.parse(localStorage.getItem("product_data")) || [];
let array1=JSON.parse(localStorage.getItem("order")) || [];

let load=document.getElementById("preload")
window.addEventListener("load",function(){
    load.style.display="none"
})


let data_1=[
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000078.jpg?ver=19.66",
        name:"5+5 Bucket Offer",
        type: "Non veg ",
        price:"₹ 599.05",
        offer:"Save 15% on special combo of 5pc Hot & Crispy Chicken + 5 Peri Peri Strips"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000169.jpg?ver=19.66",
        name:"Peri Peri 10 Leg piece + 4 dips",
        type: "Non veg ",
        price:"₹ 848.57",
        offer:"Save 22% on this Leg Piece Bucket with 10 KFC Peri Peri Leg Piece with 4 dips"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000155.jpg?ver=19.66",
        name:"Mega Feast",
        type: "Non veg",
        price:"₹ 599.05",
        offer:"Relish a big size feast with KFC favorites & new launches- 2 pc H&C,2 pc Smoky Grilled, 1 buttered bun, 1gravy, med.fries & pepsi"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000128.jpg?ver=19.66",
        name:"Big 12 - Chicken Bucket",
        type: "Non veg ",
        price:"₹679.05",
        offer:"6pc Hot & Crispy Chicken + 6 Wings + 2 Dips"   
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000185.jpg?ver=19.66",
        name:"Mingles Meal",
        type: "Non veg",
        price:"₹448.57",
        offer:"21% off on-4 Wings + 2 Peri Peri Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"      
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-403124.jpg?ver=19.66",
        name:"4pc Hot & Crispy with 2 Pepsi",
        type: "Non veg",
        price:"₹516.19",
        offer:"4 pieces of crispy, juicy chicken in a bucket served with 2 Pepsi"
    }
];
let data_2=[
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000168.jpg?ver=19.72",
        name:"Peri Peri 5 Leg piece + 2 Dips + 2 Pepsi",
        type: "Non veg ",
        price:"₹539.05",
        offer:"Your favorite chicken leg pieces in a bucket. 5 pieces served with 2 dips and 2 Pepsi"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000167.jpg?ver=19.72",
        name:"Peri Peri 5 Leg piece + 2 Dips",
        type: "Non veg",
        price:"₹439.05",
        offer:"Save 20% on this combo"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-403124.jpg?ver=19.72",
        name:"4pc Hot & Crispy with 2 Pepsi",
        type: "Non veg",
        price:"₹516.19",
        offer:"4 pieces of crispy, juicy chicken in a bucket served with 2 Pepsi"  
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000185.jpg?ver=19.72",
        name:"Mingles Meal",
        type: "Non veg",
        price:"₹448.57",
        offer:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"  
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-100015.jpg?ver=19.72",
        name:"Hot & Crispy Chicken -8pc",
        type: "Non veg",
        price:"₹628.27",
        offer:"8 pc Hot & Cripsy" 
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000178.jpg?ver=19.72",
        name:"Ultimate Savings Bucket",
        type: "Non veg",
        price:"₹628.57",
        offer:"Save 40% on USB -KFC variety bucket now with Peri Peri Strips-Grab Now!" 
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-120180.jpg?ver=19.72",
        name:"Big 8 - Chicken Bucket",
        type: "Non veg",
        price:"₹548.57",
        offer:"Save upto 31% with this bucket that has 4 pieces of Hot & Crispy and 4 pieces of Smoky Red" 
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404002.jpg?ver=19.72",
        name:"5pc Smoky Red with 2 Pepsi",
        type: "Non veg",
        price:"₹420.00",
        offer:"5 pieces of Colonel's signature Smoky Red with 2 Pepsi" 
    }
];
let data_3=[
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000144.jpg?ver=19.72",
        name:"Spicy Mix Fries -Large",
        type: "veg",
        price:"₹109.05",
        offer:"Your KFC Medium Fries can now be seasoned with lemony tang & chili spice in this combo" 
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000145.jpg?ver=19.72",
        name:"Spicy Mix Fries -Medium",
        type: "veg",
        price:"₹94.29",
        offer:"Your KFC Medium Fries can now be seasoned with lemony tang & chili spice in this combo"  
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000195.jpg?ver=19.72",
        name:"Peri Peri 6pc Chicken Strips",
        type: "Non veg",
        price:"₹228.57",
        offer:"Grab the Spicy & Sizzling Peri Peri 6 pc. Chicken Boneless Strips snack!"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000148.jpg?ver=19.72",
        name:"Biryani Rice",
        type: "veg",
        price:"₹128.57",
        offer:"Flavorful Aromatic rice to pair with your favorite KFC favorites"
    }
];
let data_4=[

    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000042.jpg?ver=19.72",
        name:"Popcorn Biryani Box",
        type: "Non veg",
        price:"₹279.05",
        offer:"Value Meal with flavorful Popcorn Biryani Bucket & spicy dip, 2 piece Hot Wings and Pepsi"  
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000043.jpg?ver=19.72",
        name:"Veg Biryani Box",
        type: "veg",
        price:"₹248.57",
        offer:"Value Meal with flavorful Veg Biryani Bucket & spicy dip, veg patty and Pepsi Add to Cart"  
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404059.jpg?ver=19.72",
        name:"Classic Zinger Box Meal",
        type: "Non veg",
        price:"₹248.57",
        offer:"Value Meal with Classic Zinger, 2 piece Hot Wings, Fries and Pepsi"  
    
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404060.jpg?ver=19.72",
        name:"Tandoori Zinger Box Meal",
        type: "Non veg",
        price:"₹288.57",
        offer:"Value Meal with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi"
    }
];
let data_5=[
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404085.jpg?ver=19.72",
        name:"Classic Veg Krisper",
        type: "veg",
        price:"₹79.05",
        offer:"Value burger with a veg patty, lettuce and mayo"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404085.jpg?ver=19.72",
        name:"Spicy Veg Krisper",
        type: "veg",
        price:"₹79.05",
        offer:"Value burger with a veg patty, lettuce and mayo"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404087.jpg?ver=19.72",
        name:"Classic Chicken Krisper",
        type: "Non veg",
        price:"₹99.05",
        offer:"Value burger with a veg patty, lettuce and mayo"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-110212.jpg?ver=19.72",
        name:"Zinger, Wings and Pepsi combo",
        type: "Non veg",
        price:"₹365.71",
        offer:"Relish the Classic Zinger with 4 pieces Hot Wings and Pepsi"
       
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404141.jpg?ver=19.72",
        name:"Spicy Chicken Krisper, Popcorn & Pepsi Combo",
        type: "Non veg",
        price:"₹228.57",
        offer:"Value burger with a chicken fillet, lettuce and spicy sauce served with Popcorn & Pepsi"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404007.jpg?ver=19.72",
        name:"Zinger & Popcorn combo",
        type: "Non veg",
        price:"₹367.57",
        offer:"Relish the Classic Zinger with a large popcorn"  
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404007.jpg?ver=19.72",
        name:"Zinger & Popcorn combo",
        type: "Non veg",
        price:"₹367.57",
        offer:"Relish the Classic Zinger with a large popcorn"     
    }
];
let data_6=[
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000038.jpg?ver=19.74",
        name:"Classic Chicken Biryani Bucket + Reg Pepsi",
        type: "Non veg",
        price:"₹239.05",
        offer:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"  
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000039.jpg?ver=19.74",
        name:"Popcorn Chicken Biryani Bucket + Reg Pepsi",
        type: "Non veg",
        price:"₹239.05",
        offer:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000040.jpg?ver=19.74",
        name:"Grilled Chicken Biryani Bucket + Reg Pepsi",
        type: "Non veg",
        price:"₹239.05",
        offer:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
        
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000037.jpg?ver=19.74",
        name:"Veg Biryani Bucket + Reg Pepsi",
        type: "veg",
        price:"₹208.57",
        offer:"New flavorful Biryani rice with Veg Patty served with a spicy gravy & Pepsi"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000024.jpg?ver=19.74",
        name:"Classic Chicken Biryani Bucket",
        type: "Non veg",
        price:"₹199.05",
        offer:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000025.jpg?ver=19.74",
        name:"Popcorn Chicken Biryani Bucket",
        type: "Non veg",
        price:"₹199.05",
        offer:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000026.jpg?ver=19.74",
        name:"Smoky Grilled Chicken Biryani Bucket",
        type: "Non veg",
        price:"₹199.05",
        offer:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy"
    }
];
 
let data_7=[
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000211.jpg?ver=19.74",
        name:"Solo Feast",
        type: "Non veg",
        price:"₹308.57",
        offer:"Large Popcorn + Med Fries"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000195.jpg?ver=19.74",
        name:"Peri Peri 6pc Chicken Strips",
        type: "Non veg",
        price:"₹228.57",
        offer:"Grab this new spicy Boneless Peri Peri Chicken snack!"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-120089.jpg?ver=19.74",
        name:"Chicken Popcorn-Large",
        type: "Non veg",
        price:"₹180.00",
        offer:"Signature bite-sized boneless chicken, with special spices"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-120085.jpg?ver=19.74",
        name:"4pc Hot wings",
        type: "Non veg",
        price:"₹135.24",
        offer:"Save upto Rs. 101 & Pick any combo - 5pc Hot & Crispy Chicken OR 10 chicken strips OR 2 Large Popcorn"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-120085.jpg?ver=19.74",
        name:"Hot wings & Tandoori masala dip combo",
        type: "Non veg",
        price:"₹155.24",
        offer:"4 Hot Wings + Tandoori Dip",
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404046.jpg?ver=19.74",
        name:"Popcorn & Tandoori masala dip combo",
        type: "Non veg",
        price:"₹155.24",
        offer:"Med Popcorn + Tandoori Dip", 
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000165.jpg?ver=19.74",
        name:"3pc Strips + Tandoori masala dip",
        type: "Non veg",
        price:"₹170.48",
        offer:"3 Peri Peri Chicken Strips + Tandoori Dip"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-120165.jpg?ver=19.74",
        name:"Grilled Chicken - Smoky Red-2 pc",
        type: "Non veg",
        price:"₹188.57",
        offer:"Spicy, red, grilled chicken"  
    }
];

let data_8=[
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-160065.jpg?ver=19.74",
        name:"Chocolate Mud Pie",
        type: "veg",
        price:"₹199.05",
        offer:"Chocolate lovers unite! Say hello to our delicous, new, creamy chocolate & cake dessert- a must try!"  
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-200011.jpg?ver=19.74",
        name:"Pepsi Large",
        type: "veg",
        price:"₹88.57",
        offer:"Refereshing beverage"     
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-200015.jpg?ver=19.74",
        name:"Mirinda Large",
        type: "veg",
        price:"₹88.57",
        offer:"Refereshing beverage"      
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-200013.jpg?ver=19.74",
        name:"7UP Large",
        type: "veg",
        price:"₹88.57",
        offer:"Refereshing beverage"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-210002.jpg?ver=19.74",
        name:"Mojito",
        type: "veg",
        price:"₹68.57",
        offer:"Our signature Krusher"
    }
];



let container_1=document.getElementById("container_1");

    data_1.forEach(function(el){
  let div = document.createElement("div");

  div.setAttribute("id","div");

  

     let image=document.createElement("img");
     image.src=el.image;
     image.src=el.image;
     image.setAttribute("id","img2")
   

     let name = document.createElement("h4");
     name.innerText=el.name;
     

     let type = document.createElement("p")
     type.innerHTML=`<i id="redcircle" class="fa-solid fa-circle"></i> ${el.type}`;

     

     let price = document.createElement("h4");
     price.innerText="price:₹₹"+ el.price;
     

     let offer = document.createElement("p");
     offer.innerText=el.offer;
     

     let btn= document.createElement("button");
     btn.innerHTML=`Add to cart <i class="fa-solid fa-cart-plus"></i>`;
     btn.addEventListener("click",function(){
        add(el)
     })
    

     div.append(image,name,type,price,offer,btn);
     container_1.append(div);

    });
    function add(el){
      array.push(el) 
      array1.push(el);
      localStorage.setItem("product_data",JSON.stringify(array)) ;
      localStorage.setItem("order",JSON.stringify(array1));

      let bucket=JSON.parse(localStorage.getItem("product_data")) || [];
      let p=el.price.split("₹");
      let currentPrice=+p[1];
      let rupee1=document.getElementById("rupee").innerText.split("₹");
      let previousPrice=+rupee1[1];
      let total=(previousPrice+currentPrice).toString();
      console.log(total)
      document.getElementById("no-of-items").innerText=bucket.length;
      document.getElementById("rupee").innerText=`₹${total}`
 };
 function clicked(id){
 
      document.getElementById(id).scrollIntoView();
      
 };


// --------------------------------------------------------------------------------------------------
let container_2=document.getElementById("container_2");

    data_2.forEach(function(el){
  let div = document.createElement("div");
  div.setAttribute("id","div");

     let image=document.createElement("img");
     image.src=el.image;
     image.setAttribute("id","img1");
   

     let name = document.createElement("h4");
     name.innerText=el.name;
     
     let type = document.createElement("p")
     type.innerHTML=`<i id="redcircle" class="fa-solid fa-circle"></i> ${el.type}`;

     let price = document.createElement("h4");
     price.innerText="price:₹₹"+ el.price;
     
     let offer = document.createElement("p");
     offer.innerText=el.offer;
     
     let btn= document.createElement("button");
     btn.innerHTML=`Add to cart <i class="fa-solid fa-cart-plus"></i>`;
     btn.addEventListener("click",function(){
        add(el)
     })
    div.append(image,name,type,price,offer,btn);
     container_2.append(div);

    });

 function clicked(id){
 
    document.getElementById(id).scrollIntoView();
    
};



// --------------------------------------------------------------------------------------
let container_3=document.getElementById("container_3");

    data_3.forEach(function(el){
  let div = document.createElement("div");
  div.setAttribute("id","div");

     let image=document.createElement("img");
     image.src=el.image;
     image.setAttribute("id","img1");
   

     let name = document.createElement("h4");
     name.innerText=el.name;
     
     let type = document.createElement("p")
     type.innerHTML=`<i id="redcircle" class="fa-solid fa-circle"></i> ${el.type}`;

     let price = document.createElement("h4");
     price.innerText="price:₹₹"+ el.price;
     
     let offer = document.createElement("p");
     offer.innerText=el.offer;
     
     let btn= document.createElement("button");
     btn.innerHTML=`Add to cart <i class="fa-solid fa-cart-plus"></i>`;
     btn.addEventListener("click",function(){
        add(el)
     })
    div.append(image,name,type,price,offer,btn);
     container_3.append(div);

    });
 

// -------------------------------------------------------------------------------------
let container_4=document.getElementById("container_4");

    data_4.forEach(function(el){
  let div = document.createElement("div");
  div.setAttribute("id","div");

     let image=document.createElement("img");
     image.src=el.image;
     image.setAttribute("id","img1");
   

     let name = document.createElement("h4");
     name.innerText=el.name;
     
     let type = document.createElement("p")
     type.innerHTML=`<i id="redcircle" class="fa-solid fa-circle"></i> ${el.type}`;

     let price = document.createElement("h4");
     price.innerText="price:₹₹"+ el.price;
     
     let offer = document.createElement("p");
     offer.innerText=el.offer;
     
     let btn= document.createElement("button");
     btn.innerHTML=`Add to cart <i class="fa-solid fa-cart-plus"></i>`;
     btn.addEventListener("click",function(){
        add(el)
     })
    div.append(image,name,type,price,offer,btn);
     container_4.append(div);

    });


// ------------------------------------------------------------------------------------------- 

let container_5=document.getElementById("container_5");

    data_5.forEach(function(el){
  let div = document.createElement("div");
  div.setAttribute("id","div");

     let image=document.createElement("img");
     image.src=el.image;
     image.setAttribute("id","img1");
   

     let name = document.createElement("h4");
     name.innerText=el.name;
     
     let type = document.createElement("p")
     type.innerHTML=`<i id="redcircle" class="fa-solid fa-circle"></i> ${el.type}`;

     let price = document.createElement("h4");
     price.innerText="price:₹₹"+ el.price;
     
     let offer = document.createElement("p");
     offer.innerText=el.offer;
     
     let btn= document.createElement("button");
     btn.innerHTML=`Add to cart <i class="fa-solid fa-cart-plus"></i>`;
     btn.addEventListener("click",function(){
        add(el)
     })
    div.append(image,name,type,price,offer,btn);
     container_5.append(div);

    });
   

// -------------------------------------------------------------------------------------------- 
 
let container_6=document.getElementById("container_6");

    data_6.forEach(function(el){
  let div = document.createElement("div");
  div.setAttribute("id","div");

     let image=document.createElement("img");
     image.src=el.image;
     image.setAttribute("id","img1");
   

     let name = document.createElement("h4");
     name.innerText=el.name;
     
     let type = document.createElement("p")
     type.innerHTML=`<i id="redcircle" class="fa-solid fa-circle"></i> ${el.type}`;

     let price = document.createElement("h4");
     price.innerText="price:₹₹"+ el.price;
     
     let offer = document.createElement("p");
     offer.innerText=el.offer;
     
     let btn= document.createElement("button");
     btn.innerHTML=`Add to cart <i class="fa-solid fa-cart-plus"></i>`;
     btn.addEventListener("click",function(){
        add(el)
     })
    div.append(image,name,type,price,offer,btn);
     container_6.append(div);

    });
    
// -------------------------------------------------------------------------------

let container_7=document.getElementById("container_7");

    data_7.forEach(function(el){
  let div = document.createElement("div");
  div.setAttribute("id","div");

     let image=document.createElement("img");
     image.src=el.image;
     image.setAttribute("id","img1");
   

     let name = document.createElement("h4");
     name.innerText=el.name;
     
     let type = document.createElement("p")
     type.innerHTML=`<i id="redcircle" class="fa-solid fa-circle"></i> ${el.type}`;

     let price = document.createElement("h4");
     price.innerText="price:₹₹"+ el.price;
     
     let offer = document.createElement("p");
     offer.innerText=el.offer;
     
     let btn= document.createElement("button");
     btn.innerHTML=`Add to cart <i class="fa-solid fa-cart-plus"></i>`;
     btn.addEventListener("click",function(){
        add(el)
     })
    div.append(image,name,type,price,offer,btn);
     container_7.append(div);

    });
  
//  ---------------------------------------------------------------------------------------

let container_8=document.getElementById("container_8");

    data_8.forEach(function(el){
  let div = document.createElement("div");
  div.setAttribute("id","div");

     let image=document.createElement("img");
     image.src=el.image;
     image.setAttribute("id","img1");
   

     let name = document.createElement("h4");
     name.innerText=el.name;
     
     let type = document.createElement("p")
     type.innerHTML=`<i id="redcircle" class="fa-solid fa-circle"></i> ${el.type}`;

     let price = document.createElement("h4");
     price.innerText="price:₹₹"+ el.price;
     
     let offer = document.createElement("p");
     offer.innerText=el.offer;
     
     let btn= document.createElement("button");
     btn.innerHTML=`Add to cart <i class="fa-solid fa-cart-plus"></i>`;
     btn.addEventListener("click",function(){
        add(el)
     })
    div.append(image,name,type,price,offer,btn);
     container_8.append(div);

    });

recomend();
function recomend(){
    let arr2 = [
    {
        name:"PEPSI PET",image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K350.jpg?ver=19.73",
        qty:1, price:57.14
    },{
        name:"POPCORN NACHOS", image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K664.jpg?ver=19.73",
        qty:1, price:169
    },{
        name:"CHACO MUD PIE",image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K496.jpg?ver=19.73",
        qty:1, price:128.57
    },{
            name:"Wednesday Bucket", image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000373.jpg?ver=19.29",
            qty:2, price:350.48
        }
]
localStorage.setItem("recommend",JSON.stringify(arr2));
}