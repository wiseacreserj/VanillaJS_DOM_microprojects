const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-icon");
const closeMenuBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});
closeMenuBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
});
