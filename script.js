let toggle=document.getElementById("toggle")
let changemode=document.getElementsByClassName("nav-section")[0];
toggle.addEventListener("click",function(){
changemode.classList.toggle("dark");
let usertheme=changemode.classList.contains("dark")
console.log(usertheme)
localStorage.setItem("user",usertheme?"dark":"light") 
})
window.addEventListener("DOMContentLoaded",function(){
    let localstorage=localStorage.getItem("user")
    if(localstorage==="dark"){
let changemode=document.getElementsByClassName("nav-section")[0];
changemode.classList.add("dark");

    }
})