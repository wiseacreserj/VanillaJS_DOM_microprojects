//Elements

const slides = document.querySelectorAll(".c-slider__slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

//State
const lastSlide = slides.length - 1;
const firstSlide = 0;
let currentSlide = 0;

//Handlers

const nextSlideHandler = () => {
    if (currentSlide === lastSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    changeSlide();
};

const prevSlideHandler = () => {
    if (currentSlide === firstSlide) {
        currentSlide = lastSlide;
    } else {
        currentSlide--;
    }

    changeSlide();
};

const changeSlide = () => {
    console.log(slides);
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
};

//Listeners
nextBtn.addEventListener("click", nextSlideHandler);
prevBtn.addEventListener("click", prevSlideHandler);
