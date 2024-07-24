function swipe(){
    var l=document.getElementsByClassName("left")[0];
    l.classList.add("animate")

    var r=document.getElementsByClassName("right")[0];
    r.style.width="0"
    var k=document.getElementsByClassName("main2")[0];
    k.style.display = "none";
    setTimeout(sample,850);
    
}
function sample(){
    let mainAddress = document.getElementById("main");
    mainAddress.style.display = "none";

}

