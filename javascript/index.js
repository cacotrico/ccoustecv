const cambioHeader = document.querySelector("header")
const navToggle = document.querySelector(".btn-toggle")
const navMenu = document.querySelector("nav ul")
const backToggle = document.querySelector(".btn-menu_visible")
const irArriba = document.querySelector(".btn-up")



window.addEventListener("scroll", function(){
    cambioHeader.classList.toggle("abajo", this.scrollY>0)
});

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle("btn-menu_visible");
});


