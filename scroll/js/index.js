const layotHeaderContainer = document.querySelector(".l-header-container ");
const navLinks = document.querySelectorAll(".c-nav__link");

const footer = document.querySelector(".footer");
const navComponent = document.querySelector(".c-nav");
const menuBtn = document.querySelector(".c-header__menu");

footer.innerHTML = `Copyright © Backroads Travel Tours Company ${new Date().getFullYear()}. All Rights Reserved`;

const scrollHandler = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 90) {
        layotHeaderContainer.classList.add("l-header-container--fixed");
        navLinks.forEach((link) => link.classList.add("c-nav__link--clr-gray"));
    } else {
        layotHeaderContainer.classList.remove("l-header-container--fixed");
        navLinks.forEach((link) =>
            link.classList.remove("c-nav__link--clr-gray")
        );
    }
};

const scrollByLinksHandler = (event) => {
    event.preventDefault();

    const targetScrollElementId = event.currentTarget.getAttribute("href");
    const targetScrollElement = document.querySelector(targetScrollElementId);
    const targetScrollElementOffsetTop = targetScrollElement.offsetTop;
    const navHeight = layotHeaderContainer.getBoundingClientRect().height;

    const fixedNav = document.querySelector(".l-header-container--fixed");

    let position;
    if (fixedNav) {
        position =
            targetScrollElementOffsetTop -
            fixedNav.getBoundingClientRect().height;
    } else {
        position = targetScrollElementOffsetTop - navHeight - 80;
    }

    window.scroll({
        left: 0,
        top: position,
    });

    navComponent.classList.toggle("c-nav--visible");
};

const menuBtnHandler = () => {
    navComponent.classList.toggle("c-nav--visible");
};

menuBtn.addEventListener("click", menuBtnHandler);
document.querySelector(".c-tours-link").addEventListener("click", (event) => {
    scrollByLinksHandler(event);
    navComponent.classList.toggle("c-nav--visible");
});
navLinks.forEach((link) => {
    link.addEventListener("click", scrollByLinksHandler);
});
window.addEventListener("scroll", scrollHandler);
