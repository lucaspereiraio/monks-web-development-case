const mobileHeader = document.querySelector(".mobile-header");
const mobileNavBar = document.querySelector(".mobile-navbar");
const headerMain = document.querySelector(".header-main");
const menuBurger = document.querySelector(".menu-burger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.querySelector(".go-back");
const mobileHeaderCategories = document.querySelector(
  ".mobile-header-categories"
);
const goBack = document.getElementById("goBack");

// Abre o menu mobile
menuBurger.addEventListener("click", () => {
  const isOpen = headerMain.hasAttribute("open");
  if (isOpen) {
    mobileHeader.removeAttribute("open");
    mobileNavBar.removeAttribute("open");
    headerMain.removeAttribute("open");
    mobileMenu.removeAttribute("open");
    mobileHeaderCategories.removeAttribute("open");
    goBack.removeAttribute("open");
  } else {
    mobileHeader.setAttribute("open", "true");
    mobileNavBar.setAttribute("open", "true");
    headerMain.setAttribute("open", "true");
    mobileMenu.setAttribute("open", "true");
    mobileHeaderCategories.setAttribute("open", "true");
    goBack.setAttribute("open", "true");
  }
});

// Fecha o menu mobile
closeMenu.addEventListener("click", () => {
  mobileHeader.removeAttribute("open");
  mobileNavBar.removeAttribute("open");
  headerMain.removeAttribute("open");
  mobileMenu.removeAttribute("open");
  mobileHeaderCategories.removeAttribute("open");
  goBack.removeAttribute("open");
});
