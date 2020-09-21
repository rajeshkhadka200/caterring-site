let food  = document.querySelectorAll(".photos__ch");
var a =0 ;
var order = [];
var first = false ; 
food.forEach( 
function  (element, index) {
food[index].addEventListener("click", function(){
    a++;
    var num = document.createElement("h2");
    num.className = "num" ;

    var ch = "border:2px solid #fff"              

    var clicked__food = element.children.item(0).children.item(0).innerHTML; 

      if (order.length  == 0){
          
        first = true;
        order.push(clicked__food);
        // element.style = color ;
        element.style.border = " 3px  solid #111" ;

        element.appendChild(num);   
        num.innerHTML = '1';
        num.style = ch;
        // document.querySelector(".rev").style =" color : #333 ; background: rgba(253 , 253, 253 , 0.5)" 
      

      }
    
    else{
      let len = order.length;
        for(let i=0 ; i <= len ; i++){
        //   console.log(clicked__food)
      

        //   console.log(order[i] )
            if (order[i] == clicked__food ){
                // console.log(order)
                order.splice(i , 1);
                element.style.border = "none"
                num = element.children.item(1);
                element.removeChild(num);   
                var num = document.querySelectorAll(".num");
                num.forEach(function ( e ,a ) {
                  e.innerHTML = parseInt(a+1) ;
                }
                )
                break; 
                
                
            }
            
          else if ( i == len ){

              if(order[i] != clicked__food){
                // console.log(order)
                order.push(clicked__food);
                // console.log(order);
                // element.style =   color;
                element.style.border = " 3px  solid #111" ;

                
                element.appendChild(num);   
                num.innerHTML = i+1;
                num.style = ch;
                
            }
                
            }
      
            
        }



          
          
          }   
    })


}

);






// search  

var search_b = document.querySelector(".search > i");
var search = document.querySelector("input[type=text]");
var searched = false;
var con_filter_search = document.querySelector("con_nav_search_filter");

// search_b.style.transition = "0.5s "

search_b.addEventListener("click",function  ( ) {
if(searched == false){
search.style.transition = "0.5s "
search.style.width = "180px"
search.style.border = "2px solid #333"
search.style.padding = "11px 15px"
search_b.style.borderRadius = "0px"
document.querySelector(".con_nav_search_filter").style.width = "300px"  
search.style.background = "#333"
searched = true;
// con_filter_search.style.width = "500px"
document.querySelector(".search").style="grid-template-columns:  1fr 15% ;"
}else{
search.style.transition = "0s "
search.style.width = "auto"
search.style.border = " none"
search.style.padding = "0"
search_b.style.borderRadius = " 20px   "
search.style.background = "#fff"
searched = false;

document.querySelector(".search").style="grid-template-columns:  0px 40px ;  "

}


})

// searcg box

var searched__txt = "";
var food_name = ""

search.addEventListener("keyup",function  ( ) {
searched__txt = search.value.toUpperCase();

food.forEach(
function  (el , i) {
food_name = el.children.item(0).children.item(0).innerHTML.toUpperCase();    
food[i].style.display = "none";
if(food_name.indexOf(searched__txt) > -1)
{
food[i].style.display = "block";  
}
}

)


})


// making filter and more btn



//filter toggle
var  fl_active_clik = false;
var fl = document.querySelector(".fil");


//filter toggle

//more__btn 


 

more_btn = document.querySelector(".more");
const more_btn_click_action = function(e){

  document.querySelectorAll(".radio_filter").forEach(function(elm,ind){
    if(elm.checked == true){
      e = elm.value;
    }
  })


let clk = 0 ;
 b=[];
 i=0;
 food.forEach(function(elm , ind){
 let dis = getComputedStyle(elm).display
  
 if(dis != "block"){
   b[i]=ind;
   i++;
 }});


  food.forEach(function(elm_m ,ind){
     b.forEach(function(elm){
     if(e == "no_filter"){
      if(elm == ind && clk < 5){
        elm_m.style.display = "block"
        clk++;
      }
    }
    if(e == "marriage"){
      if(elm == ind && clk < 5){
        for(let i=0 ; i<3 ; i++){
        if(e == elm_m.classList[i]){
        elm_m.style.display = "block"
        clk++;}
      }
    }
    }

    if(e == "puja"){
      if(elm == ind && clk < 5){
        for(let i=0 ; i<3 ; i++){
        if(e == elm_m.classList[i]){
        elm_m.style.display = "block"
        clk++;}
      }
    }
    }

    
    if(e == "birthday"){
      if(elm == ind && clk < 5){
        for(let i=0 ; i<3 ; i++){
        if(e == elm_m.classList[i]){
        elm_m.style.display = "block"
        clk++;}
      }
    }
    }



     })
     

  })

}
// making the filter 

document.querySelectorAll(".radio_filter").forEach(function(elm,ind){
  
  elm.addEventListener("click",function(){
    
  food.forEach(function(elm_m){
  elm_m.style.display ="none"
  let count = 0;
  let comp = elm.value;
  let e = comp;
   
  if(elm.checked && count < 9 ){
  
    if(comp == "puja"){
      
         
        
          for(let i=1 ; i<3 ; i++){
            if(e == elm_m.classList[i]){
          elm_m.style.display = "block"
          
         }
        }
           
        
      
      count++;
  }
  if(comp == "marriage"){
    
    
    for(let i=1 ; i<3 ; i++){
      if(e == elm_m.classList[i]){
      elm_m.style.display = "block"
     }
    }
       
     

      
    
    count++;
  }
  if(comp == "birthday"){
     
    for(let i=1 ; i<3 ; i++){
      if(e == elm_m.classList[i]){
      elm_m.style.display = "block"

     }
    }
       

     
    
    count++;
  }
  if(comp == "no_filter"){
    e = "photos__ch"
    for(let i=0 ; i<15 ; i++){
      
      elm_m.style.display = "block"
     
    }
       
    
      
    
    count++;
  }




}
})})})




more_btn.addEventListener("click",more_btn_click_action);







// intersection observer..

const obs= document.querySelector(".intersection_check");
const search_filter_tgl= document.querySelector(".con_nav_search_filter");
var below_filter= document.querySelector(".filter");
let opt = {}
let obser = new IntersectionObserver(function(entries){
entries.forEach(entry =>{

// if(below_filter.getComputedStyle.height == '60px'){
  const below_filte= document.querySelector(".filter");
  console.log(entry)
  fl.addEventListener("click" , function () {
    if(fl_active_clik==false){
    below_filte.classList.add("active_fl");
    fl_active_clik =true;
  }
  else{
    below_filte.classList.remove("active_fl");
    fl_active_clik =false;
  }
  })
    if(fl_active_clik == true){

below_filter.classList.toggle("active_fl");
  }
})
},opt);
obser.observe(obs);

obs3 = document.querySelector(".photos")
 
let obser2 = new IntersectionObserver(function(entries ){
  entries.forEach(entry =>{
    if(entry.isIntersecting){
search_filter_tgl.classList.add("tgl_search");

  // if(below_filter.getComputedStyle.height == '60px'){
    }
    else {
      search_filter_tgl.classList.remove("tgl_search");
    }
})
  },opt);
  obser2.observe(obs3)

//intersection obj for imgs.. photos__ch

const photos__ch_obj = document.querySelectorAll(".photos__ch");
let opt1 = {rootMargin:'0px'}
 var delay = 0 ;
 var delay1;
const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){

      
      entry.target.classList.add("animate");
      
    }
    else{
      entry.target.classList.remove("animate");
    }
  })
},opt1);
photos__ch_obj.forEach(function(elm , ind){
  observer.observe(elm);
  
})
document.querySelector("#half").addEventListener("click",function(){
if(document.querySelector("#half").checked){
   

  document.querySelector("#sub_system").style.display = 'block';
  document.querySelectorAll(".toggle_anim")[1].classList.remove("fa-toggle-off");
  document.querySelectorAll(".toggle_anim")[1].classList.add("fa-toggle-on");
  

  document.querySelectorAll(".toggle_anim")[0].classList.remove("fa-toggle-on");
  document.querySelectorAll(".toggle_anim")[0].classList.add("fa-toggle-off");
  
// console.log("half")

}
 
})

document.querySelector("#full").addEventListener("click",function(){
  if(document.querySelector("#full").checked){
    
  document.querySelector("#sub_system").style.display = 'none';
  document.querySelectorAll(".toggle_anim")[0].classList.add("fa-toggle-on");
  document.querySelectorAll(".toggle_anim")[0].classList.remove("fa-toggle-off");
  document.querySelectorAll(".toggle_anim")[1].classList.add("fa-toggle-off");
  document.querySelectorAll(".toggle_anim")[1].classList.remove("fa-toggle-on");
} 
})

var this_is_try = document.querySelectorAll(".this_is_try");

this_is_try.forEach(function(elm , ind){
  elm.addEventListener("click",function(){

    if (elm.children.item(0).checked){
      console.log("clicked");
      elm.children.item(1).classList.add('turned_on');
      elm.classList.add('turned_on');
    }
    else{
      elm.children.item(1).classList.remove('turned_on');
      elm.classList.remove('turned_on');

    }
  })
})
function sendEm(){
  var box = document.querySelector(".box");
  var status =  document.querySelector(".box > .ti");
  var load = document.querySelector(".loader > .ins");
 
  box.style.transform = " translate(-50%,-50%) scale(1) rotate(0deg)";
  box.style.display = "block";
  status.innerHTML = "Sending Order";
  load.style.width = "0%";


  var catering;
  if(document.querySelector("#half").checked){
     catering = "half";
  }
  else{
     catering  = "full";
  }
  var services = "";
this_is_try.forEach(function(elm , ind){
 
    
    if (elm.children.item(0).checked){
      services += elm.textContent + "<br>";
      
    }
   
});

  var msg = "";
  var num = document.querySelector("#number_inp_user").value;
  var desc = document.querySelector("textarea").value;



  order.forEach(function(elm){
    msg += elm + "<br>";
  })

  if(num != '' && order != "" && catering != "" ){
    Email.send({  
    SecureToken:"6aa251d8-d136-4368-a182-36815dfa6be5",
    To : 'cashforapp39@gmail.com',
    From : "agc.catering.contact@gmail.com",
    Subject : "New order",
    Body : "<div style='text-align:center'> <h1>Food Are:-</h1> <br>" + msg + "<br>  <h1>Number:-</h1><br>"+ num +" <br>"+ "<h1>Description:-</h1><br>"+ desc + " <br>"+ "<h1>Catering Type:-</h1><br>"+ catering +"<br><h1>services:-</h1><br>"+services+"</div>" 


}).then(message => {
  box.style.transform = " translate(-50%,-50%) scale(1) rotate(0deg)";
  box.style.display = "block"
  status.innerHTML = "Sending Order.";
  load.style.width = "60%";

  setTimeout(function(){
    box.style.transform = " translate(-50%,-50%) scale(1) rotate(0deg)",status.innerHTML = "Order Sent Successfully <br> Thank You",load.style.width = "100%"
  },800);

});
  }
  else{
    setTimeout(function(){
      box.style.transform = " translate(-50%,-50%) scale(1) rotate(0deg)",status.innerHTML = "sorry the * marked items cannot be blank.",load.style.width = "70%",load.style.background = "rgb(179, 32, 32)"
    },1000);
 
  }
}


 