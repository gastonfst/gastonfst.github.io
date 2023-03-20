const menu = document.querySelector(".menu");
const botonabrirmenu = document.querySelector(".abrir-menu");
const botoncerrarmenu = document.querySelector(".cerrar-menu");

function toggleMenu()  {
    menu.classList.toggle("menu_abierto");
}

botonabrirmenu.addEventListener("click",toggleMenu);
botoncerrarmenu.addEventListener("click",toggleMenu);

const menuLinks = document.querySelectorAll(".menu a[href^='#']");

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
      menu.classList.remove("menu_abierto");
    })
})