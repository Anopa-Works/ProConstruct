// Mobile menu
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
});

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();