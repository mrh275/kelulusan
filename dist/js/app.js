// Toggle Menu
let hMenu = document.querySelector(".toggle-menu");
hMenu.addEventListener("click", function () {
  if (!hMenu.classList.contains("show")) {
    this.classList.add("show");
    document.querySelector(".nav-menu").classList.add("show");
  } else {
    this.classList.remove("show");
    document.querySelector(".nav-menu").classList.remove("show");
  }
});

// Get current year footer
const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;

// Navbar Animation on Scroll
let navbar = document.querySelector(".navbar");
let offset = 0;
window.addEventListener("scroll", function () {
  let st = window.pageYOffset;
  if (st > offset) {
    navbar.classList.add("fixed-nav");
    if (document.querySelector(".hero-wrapper")) {
      document.querySelector(".hero-wrapper").classList.add("fixed-nav");
    }
    if (document.querySelector(".pengumuman")) {
      document.querySelector(".pengumuman").classList.add("fixed-nav");
    }
  } else {
    navbar.classList.remove("fixed-nav");
    if (document.querySelector(".hero-wrapper")) {
      document.querySelector(".hero-wrapper").classList.remove("fixed-nav");
    }
    if (document.querySelector(".pengumuman")) {
      document.querySelector(".pengumuman").classList.remove("fixed-nav");
    }
  }
});
