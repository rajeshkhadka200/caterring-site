
var stars = 1 ;
const ratingstars = document.querySelectorAll(".star_section_star");

ratingstars.forEach(function(ent , ind){
   
  ent.addEventListener("click",function(){
    for(let i =0 ; i <= 4; i++){
        ratingstars[i].children.item(0).classList.remove("fas")
        ratingstars[i].children.item(0).classList.add("far")
    }
    for(let i =0 ; i <= ind; i++){
      stars =i+1; 
      ratingstars[i].children.item(0).classList.add("fas")
      ratingstars[i].children.item(0).classList.remove("far")
    }
  })
})


var right_arrow = document.getElementById('right');
var left_arrow = document.getElementById('left');
var ind = 0;
var img = ['img/food_1.jpg', 'img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];
var desc = [
  'Special events comes once. So make your event Special with us.',
  'Some people look for a beautiful place. We make the place beautiful.',
  'Order Once remember Forever.',
  'Good Food Good Mood.',
  'Make your event successfull and enjoyable With us.'
];
var titles_img  = [
  "Events there <br> we are here",
  "your Event <br> Our respnosibility",
  "creating Memories <br> ",
  "Food You will <br>Never Forget",
  "Creating successfull <br> parties"
];
var tittittit = document.querySelector(".txt__con > h3");
var ch_img = document.querySelector(".image_changer_img");
var ch_desc = document.querySelector(".txt__con > p");

let style_short_hand = " saroj 0.5s ease forwards , saroj_remove 0.5s ease forwards 0.6s;"

right_arrow.addEventListener("click",function(){
  tittittit.classList.add("animation_arrow_clk");
  ch_desc.classList.add("animation_arrow_clk");
  ch_img.classList.add("animation_arrow_clk");
 


  setTimeout(() => {
  
  if(ind > 3){
     
    ind=0;
    tittittit.innerHTML = titles_img[ind];
    ch_img.style = "background:url("+img[ind]+") ";
    ch_desc.innerHTML = '<i class="fad fa-quote-left"></i>'+desc[ind]+'<i class="fad fa-quote-right"></i>';
    
 tittittit.classList.remove("animation_arrow_clk");
 ch_desc.classList.remove("animation_arrow_clk");
 ch_img.classList.remove("animation_arrow_clk");
    return;
  }
  ind+=1;
 tittittit.innerHTML = titles_img[ind];
 if(window.innerWidth >= 800){
 ch_img.style = "background:url("+img[ind]+") ; background-size:90%; background-position:left top;  background-repeat: no-repeat;";}
 else{
  ch_img.style = "background:url("+img[ind]+") ; background-size:contain; background-position:top center; background-attachment:fixed;";
 }
 ch_desc.innerHTML = '<i class="fad fa-quote-left"></i>'+desc[ind]+'<i class="fad fa-quote-right"></i>';
 
 tittittit.classList.remove("animation_arrow_clk");
 ch_desc.classList.remove("animation_arrow_clk");
 ch_img.classList.remove("animation_arrow_clk");
}, 800);

})

left_arrow.addEventListener("click",function(){ 
   
  tittittit.classList.add("animation_arrow_clk");
  ch_desc.classList.add("animation_arrow_clk");
  ch_img.classList.add("animation_arrow_clk");

setTimeout(() => {
  
  if(ind < 1){
     
    ind=4;
    tittittit.innerHTML = titles_img[ind];
    ch_img.style = "background:url("+img[ind]+") ; background-size:90%; background-position:left top;  background-repeat: no-repeat;";
    ch_desc.innerHTML = '<i class="fad fa-quote-left"></i>'+desc[ind]+'<i class="fad fa-quote-right"></i>';

 tittittit.classList.remove("animation_arrow_clk");
 ch_desc.classList.remove("animation_arrow_clk");
 ch_img.classList.remove("animation_arrow_clk");
    return;
  }
  ind-=1;
 tittittit.innerHTML = titles_img[ind]; if(window.innerWidth >= 800){
  ch_img.style = "background:url("+img[ind]+") ; background-size:90%; background-position:left top;  background-repeat: no-repeat;";}
  else{
   ch_img.style = "background:url("+img[ind]+") ; background-size:contain; background-position:top center; background-attachment:fixed;";
  }
 ch_desc.innerHTML = '<i class="fad fa-quote-left"></i>'+desc[ind]+'<i class="fad fa-quote-right"></i>';

 
 tittittit.classList.remove("animation_arrow_clk");
 ch_desc.classList.remove("animation_arrow_clk");
 ch_img.classList.remove("animation_arrow_clk");
 
}, 800);

  
})
function function_click(){
  var box = document.querySelector(".box");
  var status =  document.querySelector(".box > .ti");
  var load = document.querySelector(".loader > .ins");
 
  box.style.transform = " translate(-50%,-50%) scale(1) rotate(0deg)";
  box.style.display = "block";
  status.innerHTML = "Sending Ratings.";
  load.style.width = "0%";

  let msg = "<h3 style = 'color:#333; font-size:50px; text-transform:capitalize; text-align:center;'>"+document.querySelector("textarea").value +"</h3> <br><center>"+stars+"</center>";
  if(document.querySelector("textarea").value != ""){
  Email.send({ 
  SecureToken:"6aa251d8-d136-4368-a182-36815dfa6be5",
  To : 'cashforapp39@gmail.com',
  From : "agc.catering.contact@gmail.com",
  Subject : "Rating",
  Body : msg
}).then(
message => {
  box.style.transform = " translate(-50%,-50%) scale(1) rotate(0deg)";
  box.style.display = "block"
  status.innerHTML = "Sending Ratings.";
  load.style.width = "60%";

  setTimeout(function(){
    box.style.transform = " translate(-50%,-50%) scale(1) rotate(0deg)",status.innerHTML = "sent Ratings.",load.style.width = "100%"
  },1000);
}
);
  }
  else{
  setTimeout(function(){
    box.style.transform = " translate(-50%,-50%) scale(1) rotate(0deg)",status.innerHTML = "sorry the rating comment cannot be empty.",load.style.width = "70%",load.style.background = "rgb(179, 32, 32)"
  },1000);
  
  }
} 