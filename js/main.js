let toggle = document.querySelector(".toggle")
let icon = document.querySelector(".toggle img")
let ul = document.querySelector("ul")
toggle.addEventListener("click",()=>{
    ul.classList.toggle("active")
    if(icon.src.includes("images/icon-hamburger.svg")){
        icon.src = "images/icon-close.svg"
    } else if(icon.src.includes("images/icon-close.svg")){
        icon.src = "images/icon-hamburger.svg"
    }
})