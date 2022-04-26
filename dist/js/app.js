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
