// TOOGLE CLASS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");

// WHILE HAMBURGER CLICKED
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// CLICK OUTSIDE SIDEBAR TO REMOVE NAVBAR
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
