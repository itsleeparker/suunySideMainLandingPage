var toggleBtn = document.querySelector(".toggle-button");
var menu = document.querySelector(".list");

//add evet listner
toggleBtn.addEventListener("click" , ()=>{
    menu.classList.toggle("toggle");
});