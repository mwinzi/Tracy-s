// Script to handle interactivity
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const nav = document.querySelector(".nav");

  // Toggle navigation menu visibility on smaller screens
  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("visible");
  });

  // Add interactivity for "Shop by Category" section
  const categories = document.querySelectorAll(".category img");

  categories.forEach((category) => {
    category.addEventListener("mouseenter", () => {
      category.style.transform = "scale(1.1)";
    });

    category.addEventListener("mouseleave", () => {
      category.style.transform = "scale(1)";
    });
  });
});