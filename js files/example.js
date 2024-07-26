var x = true;

function swipe() {
    if (x === true) {
        var l = document.getElementsByClassName("left")[0];
        l.classList.add(`animate`);

        var r = document.getElementsByClassName("right")[0];
        r.style.width = "0";
        var k = document.getElementsByClassName("main2")[0];
        k.setAttribute(`style`, `display:none`);
        setTimeout(sample, 1000);
    }
}

function sample() {
    let mainAddress = document.getElementById("main");
    mainAddress.style.display = "none";
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: Math.floor(document.querySelectorAll('.swiper-slide').length / 2 - 1),
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 3000, // Auto slide every 2.5 seconds
        disableOnInteraction: false,
    },
    loop: true,
});
var z=true;
function display(){
    if(z==true){
        var x = document.getElementById("bdyyy");
        x.style.opacity = "1";
        x.style.zIndex = "1000"; 
        x.style.display="flex"
        
        z=false;
    }
    else{
        var x=document.getElementById("bdyyy");
        // x.style.zIndex = "-1000"; 
        x.style.display="none"
        z=true;
    }
    


}
function display1(){
    if(z==true){
        var x = document.getElementById("bdyyy1");
        x.style.opacity = "1";
        x.style.zIndex = "1000"; 
        x.style.display="flex"
        
        z=false;
    }
    else{
        var x=document.getElementById("bdyyy1");
        // x.style.zIndex = "-1000"; 
        x.style.display="none"
        z=true;
    }
    


}
var a=true;
function display2(){
    if(a==true){
        var x = document.getElementById("bdyyy2");
        x.style.opacity = "1";
        x.style.zIndex = "1000"; 
        x.style.display="flex"
        
        a=false;
    }
    else{
        var x=document.getElementById("bdyyy2");
        // x.style.zIndex = "-1000"; 
        x.style.display="none"
        a=true;
    }
    


}
var a=true;
function display3(){
    if(a==true){
        var x = document.getElementById("bdyyy3");
        x.style.opacity = "1";
        x.style.zIndex = "1000"; 
        x.style.display="flex"
        
        a=false;
    }
    else{
        var x=document.getElementById("bdyyy3");
        // x.style.zIndex = "-1000"; 
        x.style.display="none"
        a=true;
    }
    


}
var a=true;
function display4(){
    if(a==true){
        var x = document.getElementById("bdyyy4");
        x.style.opacity = "1";
        x.style.zIndex = "1000"; 
        x.style.display="flex"
        
        a=false;
    }
    else{
        var x=document.getElementById("bdyyy4");
        // x.style.zIndex = "-1000"; 
        x.style.display="none"
        a=true;
    }
    


}
var a=true;
function display5(){
    if(a==true){
        var x = document.getElementById("bdyyy5");
        x.style.opacity = "1";
        x.style.zIndex = "1000"; 
        x.style.display="flex"
        
        a=false;
    }
    else{
        var x=document.getElementById("bdyyy5");
        // x.style.zIndex = "-1000"; 
        x.style.display="none"
        a=true;
    }
    


}
var a=true;
function display6(){
    if(a==true){
        var x = document.getElementById("bdyyy6");
        x.style.opacity = "1";
        x.style.zIndex = "1000"; 
        x.style.display="flex"
        
        a=false;
    }
    else{
        var x=document.getElementById("bdyyy6");
        // x.style.zIndex = "-1000"; 
        x.style.display="none"
        a=true;
    }
    


}

var a=true;
function display7(){
    if(a==true){
        var x = document.getElementById("bdyyy7");
        x.style.opacity = "1";
        x.style.zIndex = "1000"; 
        x.style.display="flex"
        
        a=false;
    }
    else{
        var x=document.getElementById("bdyyy7");
        // x.style.zIndex = "-1000"; 
        x.style.display="none"
        a=true;
    }
    


}

var a=true;
function display8(){
    if(a==true){
        var x = document.getElementById("bdyyy8");
        x.style.opacity = "1";
        x.style.zIndex = "1000"; 
        x.style.display="flex"
        
        a=false;
    }
    else{
        var x=document.getElementById("bdyyy8");
        // x.style.zIndex = "-1000"; 
        x.style.display="none"
        a=true;
    }
    


}