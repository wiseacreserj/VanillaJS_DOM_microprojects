const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");

openModalBtn.addEventListener("click", () => {
    if (!modal.classList.contains("show-modal")) {
        modal.classList.add("show-modal");
    }
});

closeModalBtn.addEventListener("click", () => {
    if (modal.classList.contains("show-modal")) {
        modal.classList.remove("show-modal");
    }
});
