const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#menu");
const link = document.querySelectorAll("#menu-link");
const header = document.querySelector("#header");




hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("menu-container--active");
    header.classList.toggle("header--active");
    hamburger.classList.toggle("active");
});


const closeMenu = () => {
    navMenu.classList.remove("menu-container--active");
    header.classList.remove("header--active");
    hamburger.classList.remove("active");

}

link.forEach( l => l.addEventListener('click', closeMenu));
