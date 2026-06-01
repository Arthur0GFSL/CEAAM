const btnMenu = document.getElementById("btnMenu");
const menuLinks = document.getElementById("menuLinks");
const menu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
  menuLinks.classList.toggle("ativo");
});

const links = document.querySelectorAll(".links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.classList.remove("ativo");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    menu.style.boxShadow = "0 5px 18px rgba(0,0,0,0.15)";
  } else {
    menu.style.boxShadow = "0 3px 10px rgba(0,0,0,0.08)";
  }
});