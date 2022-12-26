const buttons = document.querySelectorAll(".tabs__nav-btn");
const tabs = document.querySelectorAll(".tabs__item");

const btnClickHandler = (event) => {
    let btn = event.target;
    let tabId = btn.getAttribute("data-tab");
    let tab = document.querySelector(tabId);

    if (!btn.classList.contains("active")) {
        buttons.forEach((btn) => btn.classList.remove("active"));
        tabs.forEach((tab) => tab.classList.remove("active"));
        btn.classList.add("active");
        tab.classList.add("active");
    }
};

buttons.forEach((btn) => btn.addEventListener("click", btnClickHandler));

buttons[0].classList.add("active");
tabs[0].classList.add("active");
