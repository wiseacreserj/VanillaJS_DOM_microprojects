const mobileLinksContainer = document.querySelector(".mobile-links-container");
const menuBtn = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", () => {
    if (mobileLinksContainer.style.display === "none") {
        mobileLinksContainer.style.display = "flex";
    } else {
        mobileLinksContainer.style.display = "none";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 850) {
        mobileLinksContainer.style.display = "none";
    }
});
