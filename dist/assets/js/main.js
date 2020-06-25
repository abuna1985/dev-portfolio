"use strict";

var Modal =
/*#__PURE__*/
function () {
  //constructor
  function Modal() {
    // Select DOM Items
    this.menuBtn = document.querySelector(".menu-btn");
    this.menu = document.querySelector(".menu");
    this.menuBranding = document.querySelector(".menu__branding");
    this.menuNav = document.querySelector(".menu-nav");
    this.navItems = document.querySelectorAll(".menu-nav__item"); 
    // Set Initial State of the Menu
    this.isMenuShown = false;
    //create event listener
    this.event();
  }

  var _proto = Modal.prototype;

  //events function
  _proto.event = function event() {
    var _this = this;

    document.addEventListener("click", function (e) {
      if (e.target.closest(".menu-btn")) {
        e.preventDefault();

        _this.toggleMenu();
      }
    }, false);
  };

  //custom functions
  _proto.toggleMenu = function toggleMenu() {
    if (!this.isMenuShown) {
      this.menuBtn.classList.add("menu--close");
      this.menu.classList.add("menu--show");
      this.menuNav.classList.add("menu--show");
      this.menuBranding.classList.add("menu--show");
      this.navItems.forEach(function (item) {
        return item.classList.add("menu--show");
      }); // Set Menu State

      this.isMenuShown = true;
    } else {
      this.menuBtn.classList.remove("menu--close");
      this.menu.classList.remove("menu--show");
      this.menuNav.classList.remove("menu--show");
      this.menuBranding.classList.remove("menu--show");
      this.navItems.forEach(function (item) {
        return item.classList.remove("menu--show");
      }); // Set Menu State

      this.isMenuShown = false;
    }
  };

  return Modal;
}();

var modal = new Modal();