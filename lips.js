// JavaScript for Kiko Milano Website


// Smooth Scroll Logic for Navigation Buttons
const scrollToSection = (selector) => {
    document.querySelector(selector).scrollIntoView({
        behavior: "smooth"
    });
};

const heroButtons = document.querySelectorAll(".hero-buttons button");

heroButtons[0].addEventListener("click", () => {
    scrollToSection(".new-arrivals");
});

heroButtons[1].addEventListener("click", () => {
    scrollToSection(".bestsellers");
});
