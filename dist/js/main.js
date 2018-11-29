// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu__branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

// Set Initial State of the Menu
let isMenuShown = false;

document.addEventListener(
  "click",
  function(e) {
    if (e.target.closest(".menu-btn")) {
      e.preventDefault();
      toggleMenu();
    }
  },
  false
);

function toggleMenu() {
  if (!isMenuShown) {
    menuBtn.classList.add("menu--close");
    menu.classList.add("menu--show");
    menuNav.classList.add("menu--show");
    menuBranding.classList.add("menu--show");
    navItems.forEach(item => item.classList.add("menu--show"));

    // Set Menu State
    isMenuShown = true;
  } else {
    menuBtn.classList.remove("menu--close");
    menu.classList.remove("menu--show");
    menuNav.classList.remove("menu--show");
    menuBranding.classList.remove("menu--show");
    navItems.forEach(item => item.classList.remove("menu--show"));

    // Set Menu State
    isMenuShown = false;
  }
}
