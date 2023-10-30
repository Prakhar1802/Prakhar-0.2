toggle = document.querySelector("#toggle"); 
menu = document.querySelector("ul")
let nav = document.querySelectorAll(".item-nav")

toggle.onclick = function(){
    menu.classList.toggle("active")
    toggle.classList.toggle("bi-x")
    toggle.classList.toggle("bi-list")
}
for (i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", function () {
        menu.classList.toggle("active");
        toggle.classList.toggle("bi-x")
        toggle.classList.toggle("bi-list")
    })
}
